import React from "react"

export default function BrowserFrame({url}) {
  return <iframe src={url}/>
}

BrowserFrame.propTypes = {
  url: React.PropTypes.string.isRequired
}
