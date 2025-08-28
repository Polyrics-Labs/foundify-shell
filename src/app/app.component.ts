import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonHeader, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonToolbar, IonHeader, IonTitle],
})
export class AppComponent {
  constructor() {}
}
