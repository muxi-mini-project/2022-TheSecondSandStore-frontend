import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.css'
import favourite from '../../Images/favourite.png'
import lists from '../../Images/lists.png'
import Modal3 from '../../Components/Modal3'
import Fetch from '../../Service/fetch'

export default class index extends Component {

  state = {
    text: '客官，请留下对小贰的建议',
    place: '限150字...',
    hidden: true,
    user: [],
    avatar: '',
  }

  componentDidMount() {
    Fetch(`/user`, {}, 'GET')
      .then(res => {
        if (res.data) {
          this.setState({ user: res.data })
        }
      })
  }

  tofavourites() {
    Taro.navigateTo({
      url: '/pages/Favourites/index'
    })
  }
  tolists() {
    Taro.navigateTo({
      url: '/pages/Lists/index'
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

  render() {
    const { user, avatar } = this.state
    return (
      <View>
        <View className='Homepage_box1'>
          <Image className='Homepage_avatar' src={avatar ? avatar : `http://${user.image}`} onClick={this.changeAvater}></Image>
          <Text className='Homepage_nickname' onClick={this.changeName}>{user.nickname}</Text>
          <View className='Homepage_count'>
            <View className='Homepage_box2'>
              {user.posts_number}
              <Text>发布</Text>
            </View>
            <View className='Homepage_box3'>
              {user.sells_number}
              <Text>卖出</Text>
            </View>
          </View>
        </View>
        <View onClick={this.tolists} className='Homepage_lists'>
          <Image src={lists} className='Homepage_img'></Image>
          <Text>我发布的</Text>
        </View>
        <View onClick={this.tofavourites} className='Homepage_favourites'>
          <Image src={favourite} className='Homepage_img'></Image>
          <Text>我收藏的</Text>
        </View>
        <View className='Homepage_feedback' onClick={this.showModal}>意见反馈</View>
        <Modal3 hidden={this.state.hidden} changeHidden={this.changeHidden} text={this.state.text} place={this.state.place} />
      </View>
    )
  }
}
