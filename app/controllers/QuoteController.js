import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuote() {
  console.log('draw quote');
  setHTML('quote', AppState.quotes.QuoteTemplate)
  
}

export class QuoteController{
constructor(){
this.getQuoteApi()
AppState.on('quotes',_drawQuote)
}

async getQuoteApi(){
  try {
    await quoteService.getQuoteApi()
  } catch (error) {
    Pop.error(error)
  }
}

}