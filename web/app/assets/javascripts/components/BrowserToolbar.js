import React from "react"

import Button from "./Button"

export default class BrowserToolbar extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="column column-10">
          <label>URL:</label>
        </div>
        <div className="column column-80">
          <input type="text" placeholder="/"/>
        </div>
        <div className="column column-10">
          <Button label="Go"/>
        </div>
      </div>
    )
  }
}
