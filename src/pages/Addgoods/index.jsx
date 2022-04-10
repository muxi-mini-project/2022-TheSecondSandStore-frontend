import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Textarea, Button, Image, Input, Text, Canvas } from '@tarojs/components'
import './index.css'
import Modal4 from '../../Components/Modal4'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '客官，请留下您的联系方式',
      place: '请输入您的QQ号',
      hidden: true,
      images: [],
      tempImage: [],
      price: '',
      description: ''
    }
  }

  componentDidShow() {
    this.setState({
      images: [],
      tempImage: [],
      price: '',
      description: '',
      hidden: true
    })
  }

  // toTags() {
  //   Taro.navigateTo({
  //     url: '/pages/Tags/index'
  //   })
  // }


  changeHidden = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ hidden: Hidden })
  }

  // addImage = () => {
  //   const { images, tempImage } = this.state
  //   const params = {};
  //   params.count = 1;
  //   params.sizeType = ['original', 'compressed'];
  //   params.sourceType = ['album', 'camera'];
  //   Taro.chooseImage(params)
  //     .then(res => {
  //       const { tempFilePaths } = res
  //       const file = Taro.getFileSystemManager().readFileSync(tempFilePaths[0], "base64")
  //       this.setState({
  //         images: [...images, file],
  //         tempImage: [...tempImage, tempFilePaths[0]]
  //       });
  //     })
  // }

  //压缩图片
  addImage = () => {
    const { images, tempImage } = this.state
    //选择图片
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        Taro.getImageInfo({
          src: res.tempFilePaths[0],
          success: (res) => {
            console.log('getImageInfo=>res', res)
            console.log('getImageInfo=>', res.path)
            let originW = res.width
            let originH = res.height
            //压缩比例
            //最大尺寸限制
            let maxW = 1920
            let maxH = 1920
            //目标尺寸
            let targetW = originW
            let targetH = originH
            if (originW > maxW || originH > maxH) {
              if (originW / originH > maxW / maxH) {
                // 要求宽度*(原生图片比例)=新图片尺寸
                targetW = maxW;
                targetH = Math.round(maxW * (originH / originW));
              } else {
                targetH = maxH;
                targetW = Math.round(maxH * (originW / originH));
              }
            }
            //尝试压缩文件，创建 canvas
            let ctx = Taro.createCanvasContext('image');
            ctx.clearRect(0, 0, targetW, targetH);
            console.log(res.path, targetW, targetH)
            ctx.drawImage(res.path, 0, 0, targetW, targetH);
            ctx.draw();
            //设置canvas的长宽
            this.setState({
              cw: targetW,
              ch: targetH
            })
            setTimeout(() => {
              Taro.canvasToTempFilePath({
                canvasId: 'image',
                width: targetW,
                height: targetH,
                fileType: "jpg",
                success: (res) => {
                  console.log('画布信息=>', res)
                  console.log('画布信息=>', res.tempFilePath)
                  const file = Taro.getFileSystemManager().readFileSync(res.tempFilePath, "base64")
                  this.setState({
                    images: [...images, file],
                    tempImage: [...tempImage, res.tempFilePath]
                  });
                  Taro.getImageInfo({
                    src: res.tempFilePath,
                    success: (res) => {
                      console.log('压缩后的res', res)
                    }
                  })
                  // this.setState({
                  //   tempFilePaths: res.tempFilePath,
                  //   hidden: true,
                  //   isChanged: true
                  // })
                  // Taro.setStorageSync('userImage', res.tempFilePath)
                }
              }, this)
            }, 500)
          }
        })
      }
    })
  }

  handleText = (e) => {
    this.setState({ description: e.target.value });
  }

  handlePrice = (e) => {
    this.setState({ price: e.target.value });
  }

  render() {
    const { tempImage } = this.state
    const style = { height: this.state.ch + 'px', width: this.state.cw + 'px', marginLeft: -this.state.cw / 2 + 'px' }
    return (
      <View>
        <View className='AddGoods_container'>
          <Textarea placeholder='请描述一下你的宝贝' maxlength={180} className='AddGoods_textarea' value={this.state.description} onInput={this.handleText}></Textarea>
          {/* <Button onClick={this.toTags} className='AddGoods_tag'>#</Button> */}
          <View>
            {tempImage.map((image) => {
              return <Image key={image.id} src={image} />
            })}
            <View className='AddGoods_addimg' onClick={this.addImage}></View>
          </View>
          <View className='AddGoods_price'>
            定价：
            <View>
              <Text>￥</Text>
              <Input placeholder='00.00' placeholderStyle='color:red' type='number' value={this.state.price} onInput={this.handlePrice} />
            </View>
          </View>
        </View>
        <Button className='AddGoods_sell' onClick={this.changeHidden}>发布</Button>
        <Modal4 price={this.state.price} images={this.state.images} description={this.state.description} hidden={this.state.hidden} changeHidden={this.changeHidden} text={this.state.text} place={this.state.place} maxlength='10' />
        <View style={style} className='hiddenCanvas'>
          <Canvas className='canvas' canvasId="image" style={style} />
        </View >
      </View>
    )
  }
}