import React from "react"
import debounce from "../utils/debounce"

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

  handleContentChange = (event) => {
    let content = event.target.value;
    this.setState({content: content});
    this.onChange(content)
  }

  render(){
    return <textarea value={this.state.content} onChange={this.handleContentChange}/>
  }
}
