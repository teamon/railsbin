import React from "react"
import { storiesOf, action, linkTo } from "@kadira/storybook"

import Button         from "../Button"
import BrowserFrame   from "../BrowserFrame"
import BrowserToolbar from "../BrowserToolbar"
import Browser        from "../Browser"

storiesOf("Button", module)
  .add("default", () =>
    <div className="container">
      <Button label="Click me" onClick={action('click the button')}/>
      {" "}
      <Button label="Click me" className="button button-outline" onClick={action('click the button')}/>
      {" "}
      <Button label="Click me" className="button button-clear" onClick={action('click the button')}/>
    </div>
  )

storiesOf("BrowserFrame", module)
  .add("default", () =>
    <div className="container">
      <BrowserFrame url="http://httpbin.org"/>
    </div>
  )

storiesOf("BrowserToolbar", module)
  .add("default", () =>
    <div className="container">
      <BrowserToolbar
        endpoint="httpbin.org"
        path="api/v1/uers.json"
        onPathChange={action('path changed')}/>
    </div>
  )

storiesOf("Browser", module)
  .add("default", () =>
    <div className="container">
      <Browser endpoint={"httpbin.org"}/>
    </div>
  )
