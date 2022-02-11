import { Component } from 'react'
import { View,Input,Image} from '@tarojs/components'
import './index.css'
import image from '../../Images/搜索.png'
import Item from '../../Components/Item'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='ground'>
        <View className='header'>
           <Input type='text' placeholder='' />
           <Image src={image} style={{width:32,height:32,marginTop:20}} /> 
        </View>
        <View className='show'>
          <Item />
        </View>
      </View>
     
      
      )
  }
}
    