import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showingMobileMenu : boolean = false;

  showMobileMenu() {
    this.showingMobileMenu = this.showingMobileMenu ? false : true;
  }

}
