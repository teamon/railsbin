export function browserLoad(url){
  return { type: "BROWSER_LOAD", url }
}

export function gistStart(uid){
  return { type: "GIST_START", uid }
}
export function gistStop(uid){
  return { type: "GIST_STOP", uid }
}
export function gistRestart(uid){
  return { type: "GIST_RESTART", uid }
}

export function gistUpdate(uid, data){
  return { type: "GIST_UPDATE", uid, data }
}
