import {Component} from '@angular/core';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes.service";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private quoteService: QuotesService) {
  }

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Do you want to favorite this quote?',
      buttons: [{
        text: 'Yes, go ahead',
        handler: () => {
          this.quoteService.addQuoteToFavorites(quote);
        }
      }, {
        text: 'No, I change my mind',
        role: 'cancel'
      }]
    });
    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }

}
