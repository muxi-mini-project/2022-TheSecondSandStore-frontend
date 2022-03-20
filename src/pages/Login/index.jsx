import { Component } from 'react'
import { View, Input, Button,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css' 
import image from '../../Images/background.png'
import ziti from '../../Images/字体1.png'
import Fetch from '../../Service/fetch'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
        account: '',
        password: '',
    }
}
getuserid(e) {
    this.setState({
        account: e.target.value
    });
}

getpwd(e) {
    this.setState({
        password: e.target.value
    });
}

/* login = async () => {
    const {account,password} = this.state;
    if (account && password ) {
      const res = await login(account, password)
      switch (res)
    } */
  login=()=>{
      const {account,password} = this.state;
      if (account && password ) {
       Fetch(
         '/api/v1/auth',
         {
           account,
           password
         },
         'POST'
       ).then(res => {
         switch (res.code) {
           case 200:
             Taro.setStorage({
               key: 'account',
               data: account
             });
             Taro.setStorage({
               key: 'password',
               data: password
             });
             Taro.setStorage({
               key: 'token',
               data: res.data,
           });
           Taro.reLaunch({
             url:'/pages/Square/Square'
           });
           break;
         }
      }).catch(() => {
        Taro.showToast({
          icon: 'none',
          title: '账号或者密码错误'
        });
      })
    }
    if (!account || !password) {
      Taro.showToast({
        icon: 'none',
        title: '账号或密码不能为空'
      });
    }
  }

    render () {
      
      return (
     <View className='Login'>
       <Image src={image}></Image>
        <View className='header'>
         <Image src={ziti}></Image>
        </View>
         <View className='passWord'>
          <Input type='number' placeholder='请输入您的学号' className='input1' onInput={this.getuserid.bind(this)} />
          <Input type='password' password placeholder='密码' className='input2' onInput={this.getpwd.bind(this)} />
         </View>
         <View>
             <Button className='btn1' onClick={this.login}>登录</Button>
         </View>
     </View>
        )
    }
  }