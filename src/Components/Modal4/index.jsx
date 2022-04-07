import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import './index.css'
import Fetch from '../../Service/fetch'

export default class Index extends Component {

  state = {
    videos: [],
    tag_ids: []
  }

  handleCancle = () => {
    this.props.changeHidden()
  }

  getqq = (e) => {
    this.setState({
      qq_account: e.target.value
    })
  }

  getCurrentTime = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    //时
    var hour = date.getHours();
    //分  
    var minute = date.getMinutes()
    //秒 
    var second = date.getSeconds();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }

    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  }

  debounce(f) {
    var timer = null
    return function () {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        f.call(this)
      }, 1000)
    }
  }

  handleConfirm = () => {
    const time = this.getCurrentTime()
    const { price, description, images } = this.props
    const { qq_account, videos, tag_ids } = this.state
    if (qq_account) {
      Fetch('/goods', { qq_account, price, images, description, tag_ids, videos, time }, 'POST')
        .then(() => {
          this.props.changeHidden()
          Taro.showToast({
            icon: 'none',
            title: '发布成功'
          });
        })
    } else {
      Taro.showToast({
        icon: 'none',
        title: '请输入QQ号'
      });
    }
  }

  render() {
    const { hidden, text, place } = this.props
    return (
      <View>
        {hidden ? null : <View class='toast-box' >
          <View class='toastbg'></View>
          <View class='showToast'>
            <View class='toast-title'>
              <Text>{text}</Text>
            </View>
            <View class='toast-main'>
              <View class='toast-input'>
                <Input placeholder={place} onInput={this.getqq} maxlength={15}></Input>
              </View>
            </View>
            <View class='toast-button'>
              <View class='button1'>
                <Button catchtap='cancel' onClick={this.handleCancle}>取消</Button>
              </View>
              <View class='button2'>
                <Button catchtap='confirm' onClick={this.debounce(this.handleConfirm)}>确定</Button>
              </View>
            </View>
          </View>
        </View>}
      </View>
    )
  }
}