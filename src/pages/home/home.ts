import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AgentsPage } from '../agents/agents';
import { Headers, RequestOptions, Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Déclaration des variables:
  public login;
  public password;
  data: string;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private http: Http,
    public loading: LoadingController) {
      
  }
  formRegister() {
    this.navCtrl.push(RegisterPage);
  }

  SignIn() {
    // Vérifier que les champs login et mot de passe sont remplis
    if (! this.login) {
      let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "Le champ compte matriculaire est vide",
          buttons: ['OK']
      });
      alert.present();

      } else
      if (! this.password) {
          let alert = this.alertCtrl.create({
          title: "Attention",
          subTitle: "Le champ mot de passe est vide",
          buttons: ['OK']
        });
          alert.present();

      }else {

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

        let options = new RequestOptions({ headers: headers });
        let data = {
          login: this.login,
          password: this.password
        };

        let loader = this.loading.create({
          content: 'En cours de traitement, veuillez patienter...',
        });
          loader.present().then(() => {
            
          this.http.post('http://localhost/AppMobile/login.php', data, options)
            .subscribe((res:any) => {
             loader.dismiss();
              console.log(res);

              let data = JSON.parse(res._body);

              if (data.ok) {
                let alert = this.alertCtrl.create({
                    title: "Félicitations",
                    subTitle: "Votre connexion est reussie",
                    buttons: ['OK']
                });
                 alert.present();
                this.navCtrl.push(AgentsPage);

              } else {
                let alert = this.alertCtrl.create({
                    title: "Erreur",
                    subTitle: "Votre 'compte matriculaire' ou 'mot de passe' est invalide",
                    buttons: ['OK']
                });
                alert.present();
              }
            });
        });
      }
  }
}

