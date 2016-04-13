import React from "react"
import { storiesOf, action, linkTo } from "@kadira/storybook"

import Button from "../Button"
import BrowserFrame from "../BrowserFrame"

storiesOf('Button', module)
  .add('default', () =>
    <div className="container">
      <Button label="Click me" onClick={action('click the button')}/>
      {" "}
      <Button label="Click me" className="button button-outline" onClick={action('click the button')}/>
      {" "}
      <Button label="Click me" className="button button-clear" onClick={action('click the button')}/>
    </div>
  )

storiesOf('BrowserFrame', module)
  .add('default', () =>
    <div className="container">
      <BrowserFrame url="http://teamon.eu"/>
    </div>
  )
