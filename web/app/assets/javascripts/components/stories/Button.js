import React from "react"
import Button from "../Button"
import { storiesOf, action, linkTo } from "@kadira/storybook"

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
