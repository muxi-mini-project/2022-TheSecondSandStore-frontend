import { Component } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import './index.css'
import Fetch from '../../Service/fetch'
import favorite from '../../Images/favorite.png'
import favorited from '../../Images/favorited.png'
import back from '../../Images/back.png'
import Modal1 from '../../Components/Modal1'

export default class Index extends Component {

  state = {
    good: {},
    images: [],
    /* name:'昵称', */
    hidden: true,
    place: '客官，请联系这个QQ号',
    iffavorite: false,
    startX: 0,
    move: 0,
    t: 2
  }

  //在组件在装载发生前被立刻调用
  componentWillMount() {
    const params = getCurrentInstance()
    const id = params.router.params
    const goods_id = id.goods_id
    Fetch(
      `/goods/details/one/${goods_id}`,
      {},
      'GET'
    )
      .then(res => {
        // console.log(res.data.goods_images_videos)
        this.setState({
          images: res.data.goods_images_videos,
          good: res.data,
          iffavorite: res.data.if_collected
        });
      })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }


  componentDidHide() { }

  handleBack = () => {
    Taro.reLaunch({
      url: '/pages/Square/Square'
    })
  }

  showModal = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ hidden: Hidden })
  }

  changeHidden = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ hidden: Hidden })
  }

  handlefavorite = () => {
    const collect = this.state.iffavorite
    const Favorite = !collect
    const collection_id = this.state.good.id
    this.setState({ iffavorite: Favorite });
    if (Favorite) {
      Fetch(
        `/collection`,
        {
          goods_id: collection_id
        },
        'POST'
      )
      // .then(res => {
      //   console.log(res);
      // })
    }
    else {
      Fetch(
        `/collection/${collection_id}`,
        {},
        'DELETE'
      )
      // .then(res => {
      //   console.log(res);
      // })

    }
  }

  //showphoto
  chooiceImg = () => {
    Taro.chooseMessageFile()
  }

  handleMove = (e) => {
    if (e.touches[0].pageX - this.state.startX < -100) {
      this.leftMove()
    }
    if (e.touches[0].pageX - this.state.startX > 100) {
      this.rightMove()
    }
  }

  leftMove = () => {
    this.setState({
      move: -50
    })
  }


  rightMove = () => {
    this.setState({
      move: 0
    })
  }

  handleStart = (e) => {
    this.setState({ startX: e.touches[0].pageX })
  }

  render() {
    const { good, place, hidden, iffavorite, move, t } = this.state
    const name = good.user_nickname//
    const avater = good.user_image
    const QQ = good.qq_account//
    const price = good.price
    const content = good.content
    const images = this.state.images//
    const time = good.time
    return (
      <View>
        <View className='top'>
          {/* <Image src={back} style={{ width: 20, height: 20, marginLeft: 20 }} onClick={this.handleBack} /> */}
          <Image src={iffavorite ? favorited : favorite} className='favorite' style={{ width: 22, height: 22, marginLeft: 320 }} onClick={this.handlefavorite} ></Image>
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

          {/*   <Showphoto item_image={item_image} / */}
          <View className='photo' onTouchStart={this.handleStart} onTouchMove={this.handleMove}>
            <View className='row'>
              {/*photo里直接包image不能实现overflow：hidden，图片会缩放 */}
              {/* map函数不能直接遍历good.goods_images_videos,只能是state里的 */}
              {images.map((image) => {
                return (
                  <View key='pic' className='pic' /* style={{ transform :`translateX(${move}vw)`, transition: `transform ${t}s`}} */ >
                    <Image src={`http://${image}`} key='image' className='image' style={{ transform: `translateX(${move}vw)`, transition: `transform ${t}s` }} > </Image>
                  </View>
                )
              })}
            </View>
          </View>
          {/* <View className='photo'>
              <Image 
                src={`http://${item_image ? item_image[0] : null}`}
              ></Image>
            </View> */}
          <Button onClick={this.showModal} >我想要</Button>
          <Modal1 hidden={hidden} place={place} QQ={QQ} changeHidden={this.changeHidden} />
        </View>
      </View>
    )
  }
}