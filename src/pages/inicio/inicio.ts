import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { MapaPage } from '../mapa/mapa';
import { Nav, Platform } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  rootPage: any = MapaPage;

  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Home temporal', component: HomePage },
      { title: 'Mapa', component: MapaPage },
      {title:"exit",component:null }
    ];
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component == null)
    
    {
      this.navCtrl.setRoot(HomePage);

    }else{ 
    this.nav.setRoot(page.component);
  }

}

  rightMenuClick(text) {
    //this.text = text;
  }
  
}
