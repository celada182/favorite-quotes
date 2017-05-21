import {Quote} from "../data/quote.interface";
/**
 * Created by Javier on 19/05/2017.
 */
export class QuotesService {
  private favorteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favorteQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote) {
    const position = this.favorteQuotes.findIndex((quoteElement: Quote) => {
      return quoteElement.id = quote.id;
    });
    this.favorteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    //Make a copy of the array
    return this.favorteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favorteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
