import { Component } from 'react'
import { View, Input, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './square.css'
import image from '../../Images/搜索.png'
import Item from '../../Components/Item'
import Fetch from '../../Service/fetch'

export default class Square extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      goods: [],
      bottomFlag: false,
      isFirst: true,
    };
  }

  componentWillMount() {
    const token = Taro.getStorageSync('token');
    if (!token) {
      Taro.redirectTo({
        url: '/pages/Login/index'
      })
    }
    else {
      const isFirst = this.state.isFirst
      if (isFirst == 1) {
        this.getGoods();
      }
    }
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getGoods = () => {
    let newGoods = this.state.goods;
    Fetch(
      '/goods/details/all',
    )
      .then(data => {
        if (data.code == 401) {
          Taro.redirectTo({
            url: '/pages/Login/index'
          })
          Taro.showToast({
            icon: 'none',
            title: '登录已过期，请重新登录'
          });
        }
        else if (data.data !== null) {
          newGoods = newGoods.concat(data.data);
          Taro.stopPullDownRefresh();
          Taro.hideNavigationBarLoading();
          this.setState({
            goods: data.data,
            isFirst: false
          });
        } else {
          Taro.showToast({
            title: '到底啦！',
            duration: 2000
          });
          Taro.stopPullDownRefresh();
          Taro.hideNavigationBarLoading();
          this.setState({
            bottomFlag: true
          });
        }
      })
  }

  onPullDownRefresh() {
    Taro.showNavigationBarLoading();
    this.getGoods();
  }

  /* goDtl = (goods_id) => {
    const id = goods_id;
    Taro.redirectTo({
      url:'/pages/Goods-details/index?goods_id='+id
    })
  }
 */
  Toresearch = () => {
    Taro.navigateTo({
      url: '/pages/Search/index'
    })
  }
  render() {
    const { bottomFlag, goods } = this.state;


    return (
      <View className='ground'>
        <View className='header'>
          <Input type='text' placeholder='' onClick={this.Toresearch} />
          <Image src={image} style={{ width: 32, height: 32, marginTop: 20 }} />
        </View>
        <View className='show'>
          {goods.map((good) => {
            return (
              <Item content={good.content} price={good.price} iffavorite={good.if_collected} username={good.user_nickname} QQ={good.qq_account} user_image={good.user_image} item_image={good.goods_images_videos} goods_id={good.id} if_sell={good.if_sell} if_del={good.if_del} key='item' />
            )
          })}
        </View>
        {bottomFlag && <View className='bottomBox' >到底啦！</View>}
      </View>
    )
  }
}
