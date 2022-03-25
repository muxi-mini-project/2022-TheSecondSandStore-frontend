import { View,Image,Text } from '@tarojs/components'
import { Component } from 'react'
import Taro  from '@tarojs/taro'
import './index.css'

export default class Index extends Component {
      

      Todetail=(goods_id)=>{
        Taro.redirectTo({
          url:'/pages/Goods-details/index?goods_id='+goods_id
        })
        return 1
      }

     render() {
    const {price,content,username,user_image,item_image,goods_id,if_sell,if_del}=this.props
   
    return (
      <View>
      {if_sell||if_del ? null : <View className='item' onClick={() => this.Todetail(goods_id)}>
        <View className='photo'>
            <Image 
              src={`http://${item_image[0]}`}
            ></Image>
        </View>
        <View className='detail'>
            <Text className='price'>{price}</Text>
            <View className='message'>
            <Text>{content}</Text>
            </View>
        </View>
        <View className='user'>
            <View className='avater'>
              <Image src={`http://${user_image}`} /> {/* 暂时为默认头像，后续接受用户信息 */}
            </View>
              {/* <View className='name'> */}
              <Text>{username}</Text>
             {/*  </View> */}
        </View>
      </View>
    }
    </View>
    )
  }
}
