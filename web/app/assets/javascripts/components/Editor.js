import React from "react"
import debounce from "../utils/debounce"

import AceEditor from "react-ace"
import brace from 'brace';
import "brace/mode/ruby"
import "brace/theme/xcode"

export default class Editor extends React.Component {
  static propTypes = {
    content:  React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  }

  constructor(props){
    super(props);

    this.state = { content: props.content }
    this.makeDebouncedOnChange(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.makeDebouncedOnChange(nextProps)
  }

  makeDebouncedOnChange(props){
    this.onChange = debounce(props.onChange, 300)
  }

  handleContentChange = (content) => {
    this.setState({content: content});
    this.onChange(content)
  }

  render(){
    return <AceEditor
      name="editor-ace"
      mode="ruby"
      theme="xcode"
      tabSize={2}
      value={this.state.content}
      onChange={this.handleContentChange}
      editorProps={{$blockScrolling: true}}
    />
  }
}
