import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RegisterPage } from '../pages/register/register';
import { AgentsPage } from '../pages/agents/agents';
import { HttpModule } from '@angular/http';
import { AddagentPage } from '../pages/addagent/addagent';
import { EapPage } from '../pages/eap/eap';
import { PpPage } from '../pages/pp/pp';
import { AcPage } from '../pages/ac/ac';
import { PasswordPage } from '../pages/password/password';
import { GetagentPage } from '../pages/getagent/getagent';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddagentPage,
    RegisterPage,
    AgentsPage,
    EapPage,
    PpPage,
    AcPage,
    PasswordPage,
    GetagentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    AgentsPage,
    AddagentPage,
    EapPage,
    PpPage,
    AcPage,
    PasswordPage,
    GetagentPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
