import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Goods from '../../Components/Goods'
import './index.css'
import Fetch from '../../Service/fetch'

export default class Index extends Component {

  state = {
    goods: [],
  }

  componentDidMount() {
    Fetch(`/user/goods`, {}, 'GET')
      .then(res => {
        console.log(res)
        if (res.data) {
          this.setState({ goods: res.data })
        }
      })
  }

  todetail() {
    Taro.navigateTo({
      url: '/pages/Goods-details/index?goods_id=' + this.id
    })
  }
  // Todetail=(goods_id)=>{
  //   Taro.redirectTo({
  //     url:'/pages/Goods-details/index?goods_id='+goods_id
  //   })
  //   return 1
  // }

  delgood = (id) => {
    Fetch(`/user/goods/${id}`, {}, 'DELETE')
      .then(
        Fetch(`/user/goods`, {}, 'GET')
          .then(res => {
            if (res.data) {
              this.setState({ goods: res.data })
            }
          })
      )
  }

  sellgood = (id) => {
    Fetch(`/user/goods/${id}`, {}, 'PUT')
      .then(
        Fetch(`/user/goods`, {}, 'GET')
          .then(res => {
            if (res.data) {
              this.setState({ goods: res.data })
            }
          })
      )
  }

  render() {
    const { goods } = this.state
    return (
      <View>
        {goods.map((good) => {
          return <Goods key={good.id} {...goods} goods={goods} todetail={this.todetail} delgood={this.delgood} sellgood={this.sellgood} id={good.id} goods_images_videos={good.goods_images_videos} content={good.content} if_sell={good.if_sell} if_del={good.if_del} user_nickname={good.user_nickname} />
        })}
      </View>
    )
  }
}
