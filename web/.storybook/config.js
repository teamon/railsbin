import { configure } from "@kadira/storybook"

function loadStories(){
  require("../app/assets/javascripts/components/stories/")
}

configure(loadStories, module)
