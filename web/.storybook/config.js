import { configure } from "@kadira/storybook"
import "../app/assets/stylesheets/index.css"

function loadStories(){
  require("../app/assets/javascripts/components/stories/")
}

configure(loadStories, module)
