import { Component, OnInit } from '@angular/core';

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

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

}
