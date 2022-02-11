import { View,Image,Text } from '@tarojs/components'
import { Component } from 'react'
import './index.css'

export default class Index extends Component {

     render() {
    /* const {price}=this.state */

    return (
      <View className='item'>
        <View className='photo'>
            <Image 
              src='https://bkimg.cdn.bcebos.com/pic/fcfaaf51f3deb48f63030127fe1f3a292cf578e5?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg'
            ></Image>
        </View>
        <View className='detail'>
            <Text className='price'>¥15</Text>
            <Text className='name'>大学生计算机基础</Text>
        </View>
        <Text className='messge'>出一本大学生计算机基础，有圈画，有笔记</Text>
      </View>
    )
  }
}
