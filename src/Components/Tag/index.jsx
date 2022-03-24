import { Component } from 'react'
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
          {tag_id == 1 || tag_id == 2 || tag_id == 3 ? null :
            <Button onClick={() => this.handleDelete(tag_id)} className='destroy'>删除</Button>}
        </View>
      </View>
    )
  }
}