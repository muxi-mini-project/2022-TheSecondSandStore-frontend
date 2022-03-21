import { Component } from 'react'
import { View, Text,Image, Button } from '@tarojs/components'
import Taro,{getCurrentInstance} from '@tarojs/taro'
import './index.css'
import Fetch from '../../Service/fetch'
import Showphoto from '../../Components/Showphoto'
import favorite from '../../Images/favorite.png'
import favorited from '../../Images/favorited.png'
import back from '../../Images/back.png'
import Modal from '../../Components/Modal1'

export default class Index extends Component {
  
    state={
      good:{},
       /* name:'昵称', */ 
       hidden:true,
       place:'客官，请联系这个QQ号',
       iffavorite:false,
       /* QQ:'123456', */
       /* iffavorite:false */
    } 
    componentWillMount () { }
  
    componentDidMount () {}
  
    componentWillUnmount () { }
     
   
    componentDidShow () { 
      console.log(111)
      const params = getCurrentInstance()
      const id = params.router.params
      const goods_id = id.goods_id
      Fetch(
        `/api/v1/goods/details/one/${goods_id}`,
        {},
        'GET'
      )
    .then(res => {
      this.setState({
        good : res.data,
        iffavorite: res.data.if_collected
      });
    })

  }


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

    handlefavorite=()=>{
      const collect = this.state.iffavorite
      const Favorite = !collect
      const collection_id = this.state.good.id
      this.setState({iffavorite:Favorite}); 
      if(Favorite)
      {
        Fetch(
        `/api/v1/collection`,
          {
            goods_id:collection_id
          },
          'GET'
        )
        .then(res => {
          console.log(res);
        })
      }
      else
      {
        Fetch(
          `/api/v1/collection/${collection_id}`,
          {},
          'DELETE'
        )
        .then(res => {
          console.log(res);
        })
        
      }
    }



    render () {
      console.log(222)
      const {good,place,hidden,iffavorite} =this.state
      const name= good.user_nickname//
      const avater = good.user_image 
      const QQ = good.qq_account//
      const price = good.price
      const content = good.content
      const item_image = good.goods_images_videos//
      const time = good.time

      return (
      <View>
        <View className='top'>
        <Image src={back} style={{width:20,height:20,marginLeft:20}} onClick={this.handleBack} />
        <Image src={iffavorite?favorited:favorite} className='favorite'style={{ width: 22,height: 22,marginLeft:290}} onClick={this.handlefavorite} ></Image>
        </View>
        <View className='header'>
             <View className='avater'>
              <Image src={`http://${avater}`} /> {/* 暂时为默认头像，后续接受用户信息 */}
              </View>
              <Text className='name'>{name}</Text>
              <Text className='time'>{time}</Text>
        </View>
        <View className='description'>
            <Text className='price'>{price}</Text>
            <Text className='message'>{content}</Text>

            <Showphoto item_image={item_image} />

           {/*  <View className='photo'>
              <Image 
                src={`http://${item_image ? item_image[0] : null}`}
              ></Image>
            </View> */}
            <Button onClick={this.showModal} >我想要</Button>
            <Modal hidden={hidden} place={place} QQ={QQ} changeHidden={this.changeHidden} />
        </View>
      </View>
        )
    }
  }