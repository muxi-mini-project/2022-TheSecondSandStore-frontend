import { Component } from 'react'
import { View, Text,Input,Button} from '@tarojs/components'
import './index.css'


export default class Index extends Component {
        
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
    
    handleCancle=()=>{
        this.props.changeHidden()
    }

    handleConfirm=()=>{
        /* const {QQ} =e.target.value */
        //传输数据
        this.props.changeHidden()
    }

    render () {
    const{hidden}=this.props
      return (
     <View>
        { hidden ? null : <View class='toast-box' >
        <View class='toastbg'></View>
        <View class='showToast'>
            <View class='toast-title'>
                <Text>客官</Text>
            </View>
            <View class='toast-main'>
                <View class='toast-input'>
                    <Input placeholder='请留下你的QQ号' bindinput='setValue' data-name='stuEidtName'></Input>
                </View>
            </View>
            <View class='toast-button'>
                <View class='button1'>
                    <Button catchtap='cancel' onClick={this.handleCancle} >取消</Button>
                </View>
                <View class='button2'>
                    <Button catchtap='confirm' onClick={this.handleConfirm}>确定</Button>
                </View>
            </View>
        </View>
        </View>}
      </View>
      )
    }
  }