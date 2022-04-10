import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import './index.css'
import favorite from '../../Images/favorite.png'
import lists from '../../Images/lists.png'
import Modal3 from '../../Components/Modal3'
import Modal5 from '../../Components/Modal5'
import Fetch from '../../Service/fetch'

export default class index extends Component {

  state = {
    text: '客官，请留下对小贰的建议',
    place: '限150字...',
    pla: '是否确认退出登录',
    hidden: true,
    hid: true,
    user: [],
    avatar: '',
  }

  componentDidShow() {
    Fetch(`/user`, {}, 'GET')
      .then(res => {
        if (res.data) {
          this.setState({ user: res.data })
        }
      })
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

  touserinfo() {
    Taro.navigateTo({
      url: '/pages/changeUserinfo/index'
    })
  }

  onPullDownRefresh() {
    Taro.showNavigationBarLoading();
    Fetch(`/user`, {}, 'GET')
      .then(res => {
        if (res.data) {
          this.setState({ user: res.data })
          Taro.stopPullDownRefresh();
          Taro.hideNavigationBarLoading();
        }
      })
  }

  changeHidden = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ hidden: Hidden })
  }

  changeHid = () => {
    const ifHid = this.state.hid
    const Hid = !ifHid
    this.setState({ hid: Hid })
  }

  relogin = () => {
    Taro.clearStorageSync()
    Taro.showToast({
      icon: 'loading',
      title: '退出登录成功'
    });
    Taro.redirectTo({
      url: '/pages/Login/index'
    })
  }

  render() {
    const { user, avatar } = this.state
    return (
      <View>
        <View className='Homepage_box1'>
          <Image className='Homepage_avatar' src={avatar ? avatar : `http://${user.image}`} onClick={this.touserinfo}></Image>
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
          <Image src={favorite} className='Homepage_img'></Image>
          <Text>我收藏的</Text>
        </View>
        <View className='Homepage_feedback' onClick={this.changeHidden}>意见反馈</View>
        <View onClick={this.changeHid} className='Homepage_relogin'>退出登录</View>
        <Modal3 hidden={this.state.hidden} changeHidden={this.changeHidden} text={this.state.text} place={this.state.place} />
        <Modal5 hidden={this.state.hid} place={this.state.pla} changeHid={this.changeHid} relogin={this.relogin} />
      </View>
    )
  }
}
