import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AgentsPage } from '../agents/agents';

/**
 * Generated class for the AddagentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-addagent',
  templateUrl: 'addagent.html',
})
export class AddagentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddagentPage');
  }

  addAgent(){
    this.navCtrl.push(AgentsPage);
  }

}
