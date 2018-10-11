import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoriaPage } from '../pages/categoria/categoria';

@Component({
  templateUrl: 'app.html',
  // styleUrls: ['app.scss']
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{name: string ,title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { name:'home', title: 'Inicio', component: HomePage },
      { name:'checkmark', title: 'Confirmar Asistencia', component: HomePage },
      { name:'star',title: 'Destacados', component: CategoriaPage },
      { name:'folder',title: 'Mis cursos y eventos', component: ListPage },
      { name:'chatbubbles',title: 'Horario', component: ListPage },
      { name:'calendar',title: 'Contactenos', component: ListPage },
      { name:'help',title: 'Ayuda', component: ListPage }
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
