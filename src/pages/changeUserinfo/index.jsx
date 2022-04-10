import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Image, Input, Canvas } from '@tarojs/components'
import './index.css'
import Fetch from '../../Service/fetch'

export default class Index extends Component {

  state = {
    user: [],
    image: '',
  }

  componentDidMount() {
    Fetch(`/user`, {}, 'GET')
      .then(res => {
        if (res.data) {
          this.setState({
            user: res.data,
            nickname: res.data.nickname
          })
        }
      })
  }

  //压缩图片
  changeAvater = () => {
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
            let ctx = Taro.createCanvasContext('avatar');
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
                canvasId: 'avatar',
                width: targetW,
                height: targetH,
                fileType: "jpg",
                success: (res) => {
                  console.log('画布信息=>', res)
                  console.log('画布信息=>', res.tempFilePath)
                  const file = Taro.getFileSystemManager().readFileSync(res.tempFilePath, "base64")
                  this.setState({
                    tempavatar: res.tempFilePath,
                    image: file,
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

  // changeAvater = () => {
  //   const params = {};
  //   params.count = 1;
  //   params.sizeType = ['original', 'compressed'];
  //   params.sourceType = ['album', 'camera'];


  //   Taro.chooseImage(params)
  //     .then(res => {
  //       const { tempFilePaths } = res
  //       const file = Taro.getFileSystemManager().readFileSync(tempFilePaths[0], "base64")
  //       this.setState({
  //         tempavatar: tempFilePaths[0],
  //         image: file,
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  changeName = (e) => {
    this.setState({
      nickname: e.target.value
    });
  }

  cleartemp = () => {
    this.setState({
      tempavatar: ''
    })
  }

  handleinfo = () => {
    const { image, nickname } = this.state
    if (image) {
      Fetch(`/user/image`, { image }, 'PUT')
    }
    Fetch(`/user/nickname`, { nickname }, 'PUT')
    if (!nickname) {
      Taro.showToast({
        icon: 'none',
        title: '昵称不能为空'
      });
    } else {
      Taro.showToast({
        icon: 'none',
        title: '修改成功'
      });
      Taro.navigateBack()
    }
  }

  render() {
    const { tempavatar, user, nickname } = this.state
    const style = { height: this.state.ch + 'px', width: this.state.cw + 'px', marginLeft: -this.state.cw / 2 + 'px' }
    return (
      <View className='index'>
        <View className='from-content'>
          <View className='avatar'>
            <View>修改头像</View>
            <Image
              src={tempavatar ? tempavatar : `http://${user.image}`}
              onClick={this.changeAvater}
              className='avatar-img'
            ></Image>
            <View className='icon-right'>
            </View>
          </View>
          <View className='user-name'>
            <View className='nick'>修改昵称</View>
            <Input
              maxLength='10'
              className='nick-input'
              value={nickname}
              onInput={this.changeName}
            />
            <View className='icon-right'>
            </View>
          </View>
        </View>
        <View className='from-button'>
          <Button className='reset-button' onClick={this.cleartemp}>
            取消
          </Button>
          <Button className='submit-button' onClick={this.handleinfo}>
            保存
          </Button>
        </View>
        {/* <View className='log-out' onClick={this.handleLogout.bind(this)}>
          退出登陆
        </View> */}
        <View style={style} className='hiddenCanvas'>
          <Canvas className='canvas' canvasId="avatar" style={style} />
        </View >
      </View>
    )
  }
}