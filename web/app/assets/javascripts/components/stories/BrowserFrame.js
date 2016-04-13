import React from "react"
import BrowserFrame from "../BrowserFrame"
import { storiesOf, action, linkTo } from "@kadira/storybook"

storiesOf('BrowserFrame', module)
  .add('default', () =>
    <div className="container">
      <BrowserFrame url="http://teamon.eu"/>
    </div>
  )
