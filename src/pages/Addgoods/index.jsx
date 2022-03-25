import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Textarea, Button, Image, Input, Text } from '@tarojs/components'
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
      price: ''
    }
  }
  componentWillMount () {
    this.setState({
      images: [],
      tempImage: [],
      price: ''
    })
  }

  toTags() {
    Taro.navigateTo({
      url: '/pages/Tags/index'
    })
  }

  showModal = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ 
      hidden: Hidden ,
    })
  }

  changeHidden = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ hidden: Hidden })
  }

  addImage = () => {
    const { images, tempImage } = this.state
    const params = {};
    params.count = 1;
    params.sizeType = ['original', 'compressed'];
    params.sourceType = ['album', 'camera'];
    Taro.chooseImage(params)
      .then(res => {
        const { tempFilePaths } = res
        const file = Taro.getFileSystemManager().readFileSync(tempFilePaths[0], "base64")
        this.setState({
          images: [...images, file],
          tempImage: [...tempImage, tempFilePaths[0]]
        });
      })
  }

  handleText = (e) => {
    this.setState({ description: e.target.value });
  }

  handlePrice = (e) => {
    this.setState({ price: e.target.value });
  }

  render() {
    const { tempImage} = this.state
    return (
      <View>
        <View className='AddGoods_container'>
          <Textarea type='number' placeholder='请描述一下你的宝贝' maxlength={250} className='AddGoods_textarea' value={this.state.description} onInput={this.handleText}></Textarea>
          <Button onClick={this.toTags} className='AddGoods_tag'>#</Button>
          <View>
            {tempImage.map((image) => {
              return <Image key={image.id} src={image} />
            })}
            <View className='AddGoods_addimg' onClick={this.addImage}></View>
          </View>
        </View>
        <View className='AddGoods_price'>
          定价：
          <View>
            <Text>￥</Text>
            <Input placeholder='00.00' placeholderStyle='color:red' type='number' onInput={this.handlePrice} />
          </View>
        </View>
        <Button className='AddGoods_sell' onClick={this.showModal}>发布</Button>
        <Modal4 price={this.state.price} images={this.state.images} description={this.state.description} hidden={this.state.hidden} changeHidden={this.changeHidden} text={this.state.text} place={this.state.place} maxlength='10' />
      </View>
    )
  }
}