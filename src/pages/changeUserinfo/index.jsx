import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Image, Input } from '@tarojs/components'
import './index.css'
import Fetch from '../../Service/fetch'

export default class Index extends Component {

  state = {
    user: [],
    image: '',
    nickname: ''
  }

  componentDidMount() {
    Fetch(`/user`, {}, 'GET')
      .then(res => {
        if (res.data) {
          this.setState({ user: res.data })
        }
      })
  }

  changeAvater = () => {
    const params = {};
    params.count = 1;
    params.sizeType = ['original', 'compressed'];
    params.sourceType = ['album', 'camera'];
    Taro.chooseImage(params)
      .then(res => {
        const { tempFilePaths } = res
        const file = Taro.getFileSystemManager().readFileSync(tempFilePaths[0], "base64")
        this.setState({
          tempavatar: tempFilePaths[0],
          image: file,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

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
    Fetch(`/user/image`, { image }, 'PUT')
    Fetch(`/user/nickname`, { nickname }, 'PUT')
    if (!nickname && !image) {
      Taro.showToast({
        icon: 'none',
        title: '昵称或头像不能为空'
      });
    } else {
      Taro.showToast({
        icon: 'none',
        title: '修改成功'
      });
    }
  }

  render() {
    const { tempavatar, nickname, user } = this.state
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
              placeholder='昵称'
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
      </View>

    )
  }
}