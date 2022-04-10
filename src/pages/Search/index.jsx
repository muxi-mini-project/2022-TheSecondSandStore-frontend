import { Component } from 'react'
import { View, Input, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import Item from '../../Components/Item'
import image from '../../Images/搜索.png'
import back from '../../Images/back.png'
import Delete from '../../Images/delete.png'
import Fetch from '../../Service/fetch'


export default class Index extends Component {
  state = {
    historys: [
    ],
    goods: [],
    inputVal: '',
    condition: '',
    hidden: false,
    show: true,
    ifdelete: true //初始状态不显示x号
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    let historys = Taro.getStorageSync('history') || [];
    this.setState({
      historys: historys
    });
  }

  componentDidHide() { }

  /* //focus 
      handleFocus=()=> {
        let historys = Taro.getStorageSync('history') || [];
        this.setState({
        historys: historys
        });
      } */
  //oninput
  onInput(e) {
    const value = e.detail.value
    this.setState({
      inputVal: value,
      condition: value
    })
  }

  //confirm of Input
  handleConfirm = () => {
    const inputVal = this.state.inputVal
    const { historys, condition } = this.state
    if (inputVal.trim() !== '') {
      // console.log(inputVal)
      if (historys.length < 8) {
        const history = { id: historys.length, name: inputVal }
        const newhistorys = [history, ...historys]

        this.setState({
          hidden: true,
          historys: newhistorys,
        });
        Taro.setStorageSync('history', newhistorys);
        this.getsearch(condition)
      }
    }
  }
  //清除历史记录
  clearHistory = () => {
    const ifdelete = this.state.ifdelete
    const ifDelete = !ifdelete
    this.setState({
      ifdelete: ifDelete
    })
    /* this.setState({
      historys: []
    });
    Taro.setStorageSync('history', []); */
  }

  handleDelete = (id) => {
    const { historys } = this.state
    const newHistorys = historys.filter((history) => {
      return history.id !== id
    })
    this.setState({ historys: newHistorys });
    Taro.setStorageSync('history', newHistorys)
  }

  //返回主页
  handleBack = () => {
    Taro.reLaunch({
      url: '/pages/Square/Square'
    })
  }

  //搜索结果
  getsearch = (condition) => {
    Fetch(
      `/goods/details/all/condition/${condition}`,
      {},
      'GET'
    ).then(data => {
      // console.log(data);
      this.setState({ goods: [] })
      let newGoods = this.state.goods;
      if (data.data !== null) {
        newGoods = newGoods.concat(data.data);
        Taro.stopPullDownRefresh();
        Taro.hideNavigationBarLoading();
        this.setState({
          goods: newGoods,
          show: false
        });
      } else {
        Taro.showToast({
          title: '没有搜到哦！',
          duration: 2000
        });
        Taro.stopPullDownRefresh();
        Taro.hideNavigationBarLoading();
      }
    })
      .catch(
        () => {
          Taro.showToast({
            icon: 'none',
            title: '出错啦！'
          })
        }
      )
  }
  //click历史记录
  handleClickContent = (name) => {
    this.getsearch(name)
    this.setState({ hidden: true })
  }


  render() {
    const { historys, hidden, goods, show, ifdelete } = this.state
    const inputVal = this.state.inputVal
    return (
      <View>
        <View className='search-header'>
          {/* <Image src={back} style={{ width: 20, height: 20, marginLeft: 10 }} onClick={this.handleBack} /> */}
          <Input type='text' placeholder='' value={inputVal} onInput={this.onInput.bind(this)} focus />
          <Image src={image} style={{ width: 32, height: 32 }} onClick={this.handleConfirm} />
        </View>
        {/* 搜索历史 */}
        {hidden ? null : <View className='box'>
          <View className='History'>
            {historys.map((history) => {
              return (
                <View className='search-history' style={{ display: historys.length ? 'block' : 'none' }} key='Search' >
                  <Text key={history.id} onClick={() => this.handleClickContent(history.name)} >{history.name}</Text>
                  {/* x号 */}
                  {ifdelete ? null : <Text onClick={() => this.handleDelete(history.id)} style={{ marginLeft: 7 }} >×</Text>}
                </View>
              )
            })}
          </View>
          <Image src={Delete} style={{ width: 25, height: 25, marginLeft: 15 }} onClick={this.clearHistory} ></Image>
        </View>}

        {/* 商品 */}
        {show ? null : <View className='show'>
          {goods.map((good) => {
            return (
              <Item content={good.content} price={good.price} iffavorite={good.if_collected} username={good.user_nickname} QQ={good.qq_account} user_image={good.user_image} item_image={good.goods_images_videos} goods_id={good.id} key='item' />
            )
          })}
        </View>
        }
      </View>
    )
  }
}