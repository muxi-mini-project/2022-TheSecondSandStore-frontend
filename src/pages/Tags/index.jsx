import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import './index.css'
import Fetch from '../../Service/fetch'
import TagList from '../../Components/TagList'

export default class index extends Component {
  state = {
    tags: [],
    content: ''
  }

  componentDidMount() {
    Fetch(`/tag`, {}, 'GET')
      .then(res => {
        if (res.data) {
          this.setState({ tags: res.data })
        }
      })
  }

  addTag = () => {
    const { content } = this.state

    if (content) {
      Fetch('/tag', { content }, 'POST')
        .then(Fetch('/tag', {}, 'GET')
          .then(res => {
            if (res.data) {
              this.setState({ tags: res.data })
            }
          }))
    }
  }

  deleteTag = (tag_id) => {
    const { tags } = this.state
    const newTags = tags.filter((tagObj) => {
      return tagObj.tag_id !== tag_id
    })
    this.setState({ tags: newTags })
    Fetch(`/tag/${tag_id}`, {}, 'DELETE')
  }

  getcontent = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  render() {
    const { tags } = this.state
    return (
      <View>
        <TagList tags={tags} deleteTag={this.deleteTag} content={this.state.content} tag_id={this.state.tag_id} />
        <View className='Tags_input'>
          <Input placeholder='请输入新的标签' onInput={this.getcontent} />
          <View className='Tags_add' onClick={this.addTag}></View>
        </View>
      </View >
    )
  }
}