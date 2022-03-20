import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Tag from '../Tag/index.jsx'
import './index.css'

export default class index extends Component {

  render() {
    const { deleteTag, tags } = this.props
    return (
      <View>
        {tags.map((tag) => {
          return <Tag key={tag.tag_id} {...tag} deleteTag={deleteTag} />
        })}
      </View>
    )
  }
}