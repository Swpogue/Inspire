import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";

class QuoteService {
  async getQuoteApi() {
    const res = await api.get('/api/quotes')
    console.log('QUOTES!', res.data);
    AppState.quotes = new Quote(res.data)
    console.log("[NEW QUOTE!]", AppState.quotes);
  }
}

export const quoteService = new QuoteService()