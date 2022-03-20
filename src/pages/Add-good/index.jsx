import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

export default class Index extends Component {

  state={
  images:[
  'http://img.alicdn.com/bao/uploaded/i1/1932014659/O1CN01g5HNPK1kHrxRcq1J4_!!0-item_pic.jpg_210x210.jpg',
  'https://img.alicdn.com/imgextra/i1/1624826013/O1CN01j6p6IL1uI0FHhOCiZ_!!1624826013.jpg_400x400Q50s50.jpg_.webp'
       
  ],
  }
  
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    chooiceImg = () => {
      Taro.chooseMessageFile()
    }
  
    handleMove=()=>{

    }
    render () {
      const images = this.state.images
      return (
        <View className='index'>
        {/* <Text onClick={this.chooiceImg}>Hello world!</Text> */}
        <View className='photo' onCLick={this.handleMove}>
             {images.map((image)=>{
               return (
                <Image src={image} key='image'> </Image>
               )
             })}
        </View>
      </View>
        )
    }
  }