
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { ModalController } from 'ionic-angular';
import { ListPage } from '../pages/list/list';
import { CategoriaPage } from '../pages/categoria/categoria';
import { MiscursosPage } from '../pages/miscursos/miscursos';
import { QrasistenciaPage } from '../pages/qrasistencia/qrasistencia';
import { DestacadosPage } from '../pages/destacados/destacados';
import { ContactenosPage } from '../pages/contactenos/contactenos';
import { HorarioPage } from '../pages/horario/horario';
import { RegistroPage } from '../pages/registro/registro';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html',
  // styleUrls: ['app.scss']
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{name: string ,title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { name:'home', title: 'Inicio', component: HomePage },
      { name:'checkmark', title: 'Confirmar Asistencia', component: QrasistenciaPage },
      { name:'star',title: 'Destacados', component: DestacadosPage },
      { name:'folder',title: 'Mis cursos y eventos', component: MiscursosPage },
      { name:'folder',title: 'perfil y eventos', component: PerfilPage },
      { name:'chatbubbles',title: 'Horario', component: HorarioPage },
      { name:'calendar',title: 'Contactenos', component: ContactenosPage },
      { name:'help',title: 'Ayuda', component: RegistroPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
