import { AppState } from "../AppState.js"
export class Image{
  constructor(data){
    this.query = data.query
    this.url = data.url
    // this.tags = data.tags

  }

get ImageTemplate(){
  return `
  <div>
  <img class="imgUrl" "imgUrl src="${this.url}" alt="">
  </div>`
}


}