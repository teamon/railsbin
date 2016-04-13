import React from "react"

export default class Button extends React.Component {
  static propTypes = {
    label: React.PropTypes.string.isRequired
  }

  constructor(props){
    super(props)
  }

  render(){
    const {label, ...rest} = this.props

      return (
      <button className="button" {...rest}>{label}</button>
    )
  }
}
