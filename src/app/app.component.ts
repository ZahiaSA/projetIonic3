import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { AddagentPage } from '../pages/addagent/addagent';

import { ListPage } from '../pages/list/list';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RegisterPage } from '../pages/register/register';
import { AgentsPage} from '../pages/agents/agents';
import { EapPage } from '../pages/eap/eap';
import { PpPage } from '../pages/pp/pp';
import { AcPage } from '../pages/ac/ac';
import { PasswordPage } from '../pages/password/password';
import { GetagentPage } from '../pages/getagent/getagent';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    //Uliliser un exemple de ngFor et de navigation
    this.pages = [
      { title: 'Ajouter un agent', component: AddagentPage, icon:"person-add" },
      { title: 'Ajouter un suivi', component: ListPage, icon:"clipboard" },
      { title: 'Ajouter un EAP', component: EapPage, icon:"paper" },
      { title: 'Ajouter PP', component: PpPage, icon:"trending-up" },
      { title: 'Ajouter une AC', component: AcPage, icon:"logo-reddit" },
      { title: 'Récupérer un agent', component: GetagentPage, icon:"contacts" },
      { title: 'Modifier le mot de passe', component: PasswordPage, icon:"create" },
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
   openPage(page) {
    this.nav.setRoot(page.component);
  }
}
