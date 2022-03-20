import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Image, Form, Input } from '@tarojs/components'
import './index.css'
import Fetch from '../../Service/fetch'

export default class Index extends Component {

  state = {
    avatar: '',
    username: ''
  }

  changeAvater = () => {
    const { avatar } = this.state
    const params = {};
    params.count = 1;
    params.sizeType = ['original', 'compressed'];
    params.sourceType = ['album', 'camera'];
    Taro.chooseImage(params)
      .then(res => {
        const { tempFilePaths } = res
        const file = Taro.getFileSystemManager().readFileSync(tempFilePaths[0], "base64")
        this.setState({
          avatar: file,
        });
      })
      .then(
        Fetch(`/user/image`, { avatar }, 'PUT')
      )
      .catch(error => {
        console.error(error);
      });
  }

  changeName = (e) => {
    this.setState({
      username: e.target.value
    });
  }


  render() {
    const { avatar, username } = this.state
    return (
      <View className='index'>
        <Form
          className='from'
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
        >
          <View className='from-content'>
            <View className='avatar'>
              <View>修改头像</View>
              <Image
                src={avatar}
                // src="https://thirdqq.qlogo.cn/qqapp/1108100302/AEC7B0E25CBC86FC3098E2FC0FD5CD0D/100"
                onClick={this.toChangeAvatar.bind(this)}
                className='avatar-img'
              ></Image>
              <View className='icon-right'>
              </View>
            </View>
            <View className='user-name'>
              <View className='nick'>昵称</View>
              <Input
                maxLength='10'
                className='nick-input'
                placeholder='昵称'
                placeholderClass='input-font'
                value={username}
                onChange={this.toChangeName.bind(this)}
              // onFocus={this.handleFocus.bind(this)}
              // onBlur={this.handleUnFocus.bind(this)}
              // focus
              />
              {/* {!onfocus && <MxIcon type="cross"></MxIcon>} */}
              <View className='icon-right'>
              </View>
            </View>
          </View>
          <View className='from-button'>
            <Button formType='reset' className='reset-button'>
              取消
            </Button>
            <Button formType='submit' className='submit-button'>
              保存
            </Button>
          </View>
        </Form>
        {/* <View className='log-out' onClick={this.handleLogout.bind(this)}>
          退出登陆
        </View> */}
      </View>

    )
  }
}