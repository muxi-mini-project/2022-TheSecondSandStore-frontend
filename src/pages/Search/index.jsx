import { Component } from 'react'
import { View,Input, Text,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import {nanoid} from 'nanoid'
import './index.css'
import image from '../../Images/搜索.png'
import back from '../../Images/back.png'

export default class Index extends Component {
    state={
      historys:[{id:1,name:'教科书',done:false},
                {id:2,name:'教辅书',done:false},
                {id:3,name:'文具',done:false},
                {id:4,name:'手办',done:false},
                {id:5,name:'高数试卷',done:false}]
    }
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

      handleKeyUp=(event)=>{
        const history={id:nanoid(),name: event.detail.value,done:false}
        const {historys}=this.state
        const newhistorys=[history,...historys]
        this.setState({historys:newhistorys})
      }

      handleBack=()=>{
        Taro.reLaunch({
          url:'/pages/Square/Square'
        })
      }
      searchResult=()=>{

      }
    render () {
      const {historys}= this.state 
      return (
      <View>
        <View className='search-header'> 
            <Image src={back} style={{width:20,height:20,marginLeft:10}} onClick={this.handleBack} />
            <Input type='text' placeholder='' onchange={this.handleKeyUp} />
            <Image src={image} style={{width:32,height:32}} onClick={this.searchResult} />
        </View>  
        <View className='History'>
         {historys.map((history) => {
                return  (
            <View className='search-history' style={{display: historys.length ? 'block' : 'none'}} key='Search' >
               <Text key={history.id}>{history.name}</Text>
            </View>
               )})}
        </View>
      </View>
      )
    }
  }