import { Component } from 'react'
import { View, Text,Input, Button,Image} from '@tarojs/components'
import './index.css'
import image from '../../Images/background.png'

export default class Index extends Component {
  
    componentWillMount () { }

    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
      return (
     <View className='Login'>
       <Image src={image}></Image>
        <View className='header'>
         
          <Text>欢迎光临店小贰</Text>
        </View>
         <View className='passWord'>
          <Input type='number' placeholder='请输入您的学号' className='input1' />
          <Input type='password' password placeholder='密码' className='input2' />
         </View>
         <View>
             <Button className='btn1'>登录</Button>
         </View>
     </View>
        )
    }
  }