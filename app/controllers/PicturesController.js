import { picturesService } from "../services/PicturesService.js";
import { Pop } from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js"

function _drawImage() {
  setHTML('images', AppState.images.ImageTemplate)
  // console.log('Draw IMAGE');

}

export class PicturesController{
  constructor(){
    console.log('Pictures');
    this.getPicturesApi()
    AppState.on('images', _drawImage)
  }

  async getPicturesApi (){
try {
  await picturesService.getPicturesApi()
} catch (error) {
  Pop.error(error)

}


  }
}