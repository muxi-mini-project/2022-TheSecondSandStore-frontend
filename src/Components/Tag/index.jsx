import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.css'

export default class index extends Component {

  handleDelete = (Tag_id) => {
    this.props.deleteTag(Tag_id)
  }

  render() {
    const { content, tag_id } = this.props
    return (
      <View>
        <View className='Tag_text'>{content}
          <Button onClick={() => this.handleDelete(tag_id)} className='destroy'>删除</Button>
        </View>
      </View>
    )
  }
}