import { Component } from 'react';
import { View, Text, Image, Button } from '@tarojs/components'
import './index.css'
import Modal2 from '../../Components/Modal2'


export default class Goods extends Component {

  state = {
    hidden: true,
  }

  todetail = (id) => {
    this.props.todetail(id)
  }

  delgood = (id) => {
    this.props.delgood(id)
  }

  sellgood = (id) => {
    this.props.sellgood(id)
  }

  changeHidden = () => {
    const ifHidden = this.state.hidden
    const Hidden = !ifHidden
    this.setState({ hidden: Hidden })
  }

  render() {
    const { id, goods_images_videos, content, if_sell, if_del, hide, user_nickname } = this.props
    return (
      <View className='goods_container' >
        <View className='goods_name'>{user_nickname}</View>

        <Image className='goods_img' src={`http://${goods_images_videos[0]}`} onClick={() => this.todetail(id)} />
        <View className='goods_box'>
          <Text className='goods_introduction'>{content}</Text>
          <View className='goods_state'>
            {if_sell ?
              '商品已卖出' :
              if_del ?
                '商品已删除' :
                hide ? '' :
                  <View className='goods_sel'>
                    <Button className='goods_sell' onClick={this.changeHidden}>已卖出</Button>
                    <Button className='goods_del' onClick={() => this.delgood(id)} >删除</Button>
                  </View>}
          </View>
        </View>
        <Modal2 hidden={this.state.hidden} changeHidden={this.changeHidden} sellgood={this.sellgood} text='确定商品已卖出？确定后商品将不在出现在首页。' id={this.props.id} />
      </View>
    )
  }
}