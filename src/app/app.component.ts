import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newITH';
  isTopNavbarOpen = false;
  topNavbarHeight = 0;

  onNavbarToggled(isOpen: boolean) {
    this.isTopNavbarOpen = isOpen;
  }

  onNavbarHeightChanged(height: number) {
    this.topNavbarHeight = height;
  }
}
