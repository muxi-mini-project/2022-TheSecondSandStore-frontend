import { Component } from 'react'
import { View, Text} from '@tarojs/components'
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

    /* handleConfirm=()=>{
        
        this.props.changeHidden()
    } */

    render () {
    const{hidden,place,QQ}=this.props
      return (
     <View>
        { hidden ? null : <View class='toast-box' >
        <View class='toastbg'></View>
        <View class='showToast'>
            <View class='toast-title'>
                <Text onClick={this.handleCancle}>×</Text>
            </View>
            <View class='toast-main'>
                <View class='toast-show'>{place}</View>
                <Text>{QQ}</Text>
            </View>
            {/* <View class='toast-button'>
                <View class='button1'>
                    <Button catchtap='cancel' onClick={this.handleCancle} >取消</Button>
                </View>
                <View class='button2'>
                    <Button catchtap='confirm' onClick={this.handleConfirm}>确定</Button>
                </View>
            </View> */}
        </View>
        </View>}
      </View>
      )
    }
  }