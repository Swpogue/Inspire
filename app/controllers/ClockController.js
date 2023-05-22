import { setHTML } from "../utils/Writer.js"
function _drawClock() {
  let date = new Date();
  setHTML('clock', date.toLocaleTimeString())
  
  
}
export class ClockController{
  
  constructor(){
_drawClock()
setInterval(_drawClock, 1000)
  }
  getClock(){
    ClockService.getClock()
  }
}