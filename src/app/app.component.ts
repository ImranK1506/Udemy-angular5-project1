import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadMenu = 'recipe';
  loadMenu2 = 'shopping-list';

  navigateTo(dataType: string) {
    this.loadMenu = dataType;
    this.loadMenu2 = dataType;
  }
}
