import { View,Image,Text } from '@tarojs/components'
import { Component } from 'react'
import Taro from '@tarojs/taro'
import avater from '../../Images/picture.png'
import './index.css'

export default class Index extends Component {
      state={
            name:'昵称',
            price:'¥15',
            message:'出一本大学生计算机基础，有圈画，有笔记，无破损！！！'
      }

      Todetail=()=>{
        Taro.redirectTo({
          url:'/pages/Goods-details/index'
        })
      }
     render() {
    /* const {price}=this.state */
    const {name,price,message} = this.state
    return (
      <View className='item' onClick={this.Todetail}>
        <View className='photo'>
            <Image 
              src='https://static.easyhaitao.com/uploaded/https://img.alicdn.com/bao/uploaded/i1/1932014659/O1CN01g5HNPK1kHrxRcq1J4_!!0-item_pic.jpg_210x210.jpg'
            ></Image>
        </View>
        <View className='detail'>
            <Text className='price'>{price}</Text>
            <View className='message'>
            <Text>{message}</Text>
            </View>
        </View>
        <View className='user'>
            <View className='avater'>
              <Image src={avater} /> {/* 暂时为默认头像，后续接受用户信息 */}
              </View>
              {/* <View className='name'> */}
              <Text>{name}</Text>
             {/*  </View> */}
        </View>
      </View>
    )
  }
}
