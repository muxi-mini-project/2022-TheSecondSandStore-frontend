import { Component } from 'react'
import { View,Input,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './square.css'
import image from '../../Images/搜索.png'
import Item from '../../Components/Item'

export default class Square extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  Toresearch=()=>{
    Taro.redirectTo({
      url:'/pages/Search/index'
    })
  }
  render () {
    return (
      <View className='ground'>
        <View className='header'>
           <Input type='text' placeholder='' onClick={this.Toresearch} />
           <Image src={image} style={{width:32,height:32,marginTop:20}} /> 
        </View>
        <View className='show'>
          <Item />
          <Item />
          <Item />
          <Item />
        </View>
      </View>
     
      
      )
  }
}
    