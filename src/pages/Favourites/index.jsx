import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Goods from '../../Components/Goods'
import './index.css'
import Fetch from '../../Service/fetch'

export default class Index extends Component {

  state = {
    goods: [],
    hide: true
  }

  componentDidMount() {
    Fetch(`/collection`, {}, 'GET')
      .then(res => {
        console.log(res)
        if (res.data) {
          this.setState({ goods: res.data })
        }
      })
  }

  // changeHide = () => {
  //   const ifHide = this.state.hide
  //   const Hide = !ifHide
  //   this.setState({ hide: Hide })
  // }

  todetail() {
    Taro.navigateTo({
      url: '/pages/Goods-details/index?goods_id=' + this.id
    })
  }

  render() {
    const { goods } = this.state
    return (
      <View>
        {goods.map((good) => {
          return <Goods hide={this.state.hide} changeHide={this.changeHide} key={good.id} {...goods} goods={goods} todetail={this.todetail} id={good.id} goods_images_videos={good.goods_images_videos} content={good.content} if_sell={good.if_sell} if_del={good.if_del} user_nickname={good.user_nickname} />
        })}
      </View>
    )
  }
}
