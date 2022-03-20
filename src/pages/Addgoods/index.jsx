import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Textarea, Button, Image } from '@tarojs/components'
import './index.css'
import Modal1 from '../../Components/Modal1'
import Fetch from '../../Service/fetch'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '客官，请留下您的联系方式',
      place: '请输入您的QQ号',
      hidden: true,
      images: []
    }
  }

  toTags() {
    Taro.navigateTo({
      url: '/pages/Tags/index'
    })
  }

  showModal = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ hidden: Hidden })
  }

  changeHidden = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ hidden: Hidden })
  }

  addImage = () => {
    const { images } = this.state
    const params = {};
    params.count = 9-images.length;
    params.sizeType = ['original', 'compressed'];
    params.sourceType = ['album', 'camera'];
    Taro.chooseImage(params)
      .then(res => {
        console.log(res)
        const { tempFilePaths } = res
        const file = Taro.getFileSystemManager().readFileSync(tempFilePaths[0], "base64")
        console.log(file)
        this.setState({
          images: file,
        });
      })
  }

  handleChange(e) {
    this.setState({ content: e.target.content });
  }

  render() {
    const { images } = this.state
    return (
      <View>
        <View className='AddGoods_container'>
          <Textarea type='number' placeholder='请描述一下你的宝贝' maxlength={200} className='AddGoods_textarea' value={this.state.content} onChange={this.handleChange}></Textarea>
          <Button onClick={this.toTags} className='AddGoods_tag'>#</Button>
          <View>
            <View>
               { images.map((image) => {
                  return <Image key={image.image_id} {...image} />
                })}

            </View>
            <View className='AddGoods_addimg' onClick={this.addImage}></View>
          </View>
        </View>
        <Button className='AddGoods_sell' onClick={this.showModal}>发布</Button>
        <Modal1 hidden={this.state.hidden} changeHidden={this.changeHidden} text={this.state.text} place={this.state.place} maxlength='10' />
      </View>
    )
  }
}