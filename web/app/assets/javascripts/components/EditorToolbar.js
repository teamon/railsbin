import React from "react"

import Button from "./Button"

export default class EditorToolbar extends React.Component {
  static propTypes = {
    gistUpdate: React.PropTypes.func.isRequired
  }

  render(){
    return <Button label="Save" onClick={this.props.gistUpdate}/>
  }
}
