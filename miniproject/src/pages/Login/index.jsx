import { Component } from 'react'
import { View, Text,Input, Button,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css' 
import image from '../../Images/background.png'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
        userid: '',
        pwd: '',
    }
}
getuserid(e) {
    this.setState({
        userid: e.target.value
    });
    console.log(this.state.userid)
}

getpwd(e) {
    this.setState({
        pwd: e.target.value
    });
    console.log(this.state.pwd)
}

login = () => {
    const userid = this.state.userid;
    const pwd = this.state.pwd;
    console.log(pwd, userid);
      Taro.reLaunch({
        url: '/pages/Square/Square'
      })
      /* Service.Login_ccnu(userid, pwd)  */
    }


  
    /* componentWillMount () { }

    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
 */
  /* login = ()=>{
    Taro.reLaunch({
      url: '/pages/Square/Square'})
  } */
  
    render () {
     

      
      return (
     <View className='Login'>
       <Image src={image}></Image>
        <View className='header'>
         
          <Text>欢迎光临店小贰</Text>
        </View>
         <View className='passWord'>
          <Input type='number' placeholder='请输入您的学号' className='input1' onChange={this.getuserid.bind(this)} />
          <Input type='password' password placeholder='密码' className='input2' onChange={this.getpwd.bind(this)} />
         </View>
         <View>
             <Button className='btn1' onClick={this.login}>登录</Button>
         </View>
     </View>
        )
    }
  }