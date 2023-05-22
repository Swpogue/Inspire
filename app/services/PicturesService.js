import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
class PicturesService{
  async getPicturesApi(){
    const res = await api.get('/api/images')
    // console.log('[PICTURES]=', res.data);
    AppState.images = new Image(res.data)
    // console.log('NEW PICTURES', AppState.images );
    
  }
}

export const picturesService = new PicturesService()