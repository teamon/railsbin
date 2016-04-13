import React from "react"

export default class Editor extends React.Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired
  }

  handleContentChange = () => {
    // TODO: Update gist data
  }

  render(){
    return <textarea value={this.props.content} onChange={this.handleContentChange}/>
  }
}
