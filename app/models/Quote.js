import { AppState } from "../AppState.js"
export class Quote{
constructor(data){
this._id = data._id
this.content = data.content || ''
this.author = data.author || ''


}

get QuoteTemplate(){
  return `
  <div id="content">
  <span>${this.content}</span>
  <p id="author" style="font-style: italic" >-${this.author}</p>
  </div>
  
  `
}

}