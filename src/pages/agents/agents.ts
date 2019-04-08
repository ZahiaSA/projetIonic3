import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-agents',
  templateUrl: 'agents.html',
})
export class AgentsPage {

  agents: String;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentsPage');
  }


}
