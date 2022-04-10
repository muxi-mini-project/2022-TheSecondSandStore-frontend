import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import './index.css'


export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }


    render() {
        const { hidden, place } = this.props
        return (
            <View>
                {hidden ? null : <View class='toast-box' >
                    <View class='toastbg'></View>
                    <View class='showToast'>
                        <View class='toast-main'>
                            <View class='toast-show'>{place}</View>
                        </View>
                        <View class='toast-button'>
                            <View class='button1'>
                                <Button catchtap='cancel' onClick={this.props.changeHid} >取消</Button>
                            </View>
                            <View class='button2'>
                                <Button catchtap='confirm' onClick={this.props.relogin}>确定</Button>
                            </View>
                        </View>
                    </View>
                </View>}
            </View>
        )
    }
}