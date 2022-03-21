import { Component } from 'react'
import { View ,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'

export default class Index extends Component {

  state={
    startX: 0,
   /* images:[
   'http://img.alicdn.com/bao/uploaded/i1/1932014659/O1CN01g5HNPK1kHrxRcq1J4_!!0-item_pic.jpg_210x210.jpg',
   'https://img.alicdn.com/imgextra/i1/1624826013/O1CN01j6p6IL1uI0FHhOCiZ_!!1624826013.jpg_400x400Q50s50.jpg_.webp'
       
   ], */
   move:0
  }
  
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    chooiceImg = () => {
      Taro.chooseMessageFile()
    }
  
    handleMove=(e)=>{
      if (e.touches[0].pageX - this.state.startX < -100) {
        console.log(111)
          this.leftMove()
      }
      if (e.touches[0].pageX - this.state.startX > 100){
        this.rightMove()
      }
    }

    leftMove = () => {
      this.setState({
        move: -50
      })}

    
    rightMove = ()=>{
      this.setState({
        move: 0
      })
    }
    
      /*   let query = Taro.createSelectorQuery();
      query.select('.image').fields({
          computedStyle: ['transform']
      }, (res) => {
          console.log(res);

        

      }).exec()
       */
    

    handleStart = (e) => {
      this.setState({startX: e.touches[0].pageX})
    }
    render () {
     /*  const images = this.state.images */
     const images = this.props.item_image
      const move = this.state.move
      return (
        
        
        <View className='photo' onTouchStart={this.handleStart} onTouchMove={this.handleMove}>
          <View className='row'>
            {/*photo里直接包image不能实现overflow：hidden，图片会缩放 */}
             {images.map((image)=>{
               return (
                 <View key='pic' className='pic'>
                <Image src={image} key='image' className='image' style={{ transform :`translateX(${move}vw)` }} > </Image>
                </View>
               )
             })} 
            </View>
        </View>
       
      
        )
    }
  }