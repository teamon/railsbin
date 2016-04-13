import React from "react"
import Button from "../Button"
import { storiesOf, action } from "@kadira/storybook"

storiesOf('Button', module)
  .add('basic', () => {
    const handleOnClick = function(){
      alert("It works!")
    }

    return (
      <Button label="Click me" onClick={handleOnClick}/>
    )
  })
