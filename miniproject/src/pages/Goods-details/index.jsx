import { Component } from 'react'
import { View, Text,Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import avater from '../../Images/picture.png'
import favorite from '../../Images/favorite.png'
import back from '../../Images/back.png'
import Modal from '../../Components/Modal'

export default class Index extends Component {
    state={
       name:'昵称', 
       hidden:true
} 
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    handleBack=()=>{
      Taro.reLaunch({
        url:'/pages/Square/Square'
      })
    }

    showModal=()=>{
      const ifHidden=this.state.hidden
      const Hidden=!ifHidden
      this.setState({hidden:Hidden})
    }

    changeHidden=()=>{
      const ifHidden=this.state.hidden
      const Hidden=!ifHidden
      this.setState({hidden:Hidden})
    }



    render () {
      const {name,hidden} =this.state
      return (
      <View>
        <Image src={back} style={{width:20,height:20,marginLeft:20,marginBottom:20}} onClick={this.handleBack} />
        <View className='header'>
             <View className='avater'>
              <Image src={avater} /> {/* 暂时为默认头像，后续接受用户信息 */}
              </View>
              <Text>{name}</Text>
              <Image src={favorite} className='favorite'></Image>
        </View>
        <View className='description'>
            <Text className='price'>¥15</Text>
            <Text className='message'>出一本大学生计算机基础，有圈画，有笔记</Text>
            <View className='photo'>
              <Image 
                src='https://static.easyhaitao.com/uploaded/https://img.alicdn.com/bao/uploaded/i1/1932014659/O1CN01g5HNPK1kHrxRcq1J4_!!0-item_pic.jpg_210x210.jpg'
              ></Image>
            </View>
            <Button onClick={this.showModal} >我想要</Button>
            <Modal hidden={hidden} changeHidden={this.changeHidden} />
        </View>
      </View>
        )
    }
  }