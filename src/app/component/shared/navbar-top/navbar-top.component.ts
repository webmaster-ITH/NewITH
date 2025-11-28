import { Component, EventEmitter, OnInit, Output } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {
  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() navbarToggled = new EventEmitter<boolean>();
  @Output() navbarHeightChanged = new EventEmitter<number>();
  
  isNavbarOpen = false;

  ngAfterViewInit() {
    // Detectar cuando se abre/cierra el collapse principal
    $('#topNavCollapse').on('shown.bs.collapse', () => {
      this.isNavbarOpen = true;
      this.navbarToggled.emit(true);
      this.emitHeight();
    });

    $('#topNavCollapse').on('hidden.bs.collapse', () => {
      this.isNavbarOpen = false;
      this.navbarToggled.emit(false);
      this.emitHeight();
    });

    // Detectar cuando se abre/cierra un dropdown
    $('.navbar-top .dropdown').on('shown.bs.dropdown', () => {
      setTimeout(() => this.emitHeight(), 100);
    });

    $('.navbar-top .dropdown').on('hidden.bs.dropdown', () => {
      setTimeout(() => this.emitHeight(), 100);
    });
  }

  emitHeight() {
    setTimeout(() => {
      const navbarElement = document.querySelector('app-navbar-top .navbar-container');
      if (navbarElement) {
        const height = navbarElement.clientHeight;
        this.navbarHeightChanged.emit(height);
      }
    }, 50);
  }

  onNavbarToggle() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.navbarToggled.emit(this.isNavbarOpen);
  }
}
