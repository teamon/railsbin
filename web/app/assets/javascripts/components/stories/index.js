import React from "react"
import { storiesOf, action, linkTo } from "@kadira/storybook"

import Button         from "../Button"
import Browser        from "../Browser"
import RunToolbar     from "../RunToolbar"
import RunPane        from "../RunPane"

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

storiesOf("Browser", module)
  .add("default", () =>
    <div className="container">
      <Browser endpoint={"httpbin.org"}/>
    </div>
  )

storiesOf("RunToolbar", module)
  .add("initial", () =>
    <div className="container">
      <RunToolbar state="new"/>
    </div>
  )
  .add("running", () =>
    <div className="container">
      <RunToolbar state="running"/>
    </div>
  )


storiesOf("RunPane", module)
  .add("initial", () =>
    <div className="container">
      <RunPane state="new" endpoint="httpbin.org"/>
    </div>
  )
  .add("running", () =>
    <div className="container">
      <RunPane state="running" endpoint="httpbin.org"/>
    </div>
  )
