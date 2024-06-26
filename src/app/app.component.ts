import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MenuItem} from 'primeng/api';   
import { PrimeNGConfig } from 'primeng/api';   //api
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-themes';
  isTrue:boolean = false;
  themeSelection: boolean = false;
  constructor(
    private primengConfig: PrimeNGConfig,
    @Inject(DOCUMENT) private document: Document){
      this.primengConfig.ripple = true;
      let theme = window.localStorage.getItem('theme');
    if(theme){
      this.themeSelection = theme == 'dark' ? true:false;
    }
  }
  changeTheme2(){
    this.isTrue = !this.isTrue;
  }
  changeTheme(state: boolean){
    let theme = state ? 'dark': 'light';
    window.localStorage.setItem('theme', theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-blue.css';
  }
  checkValue(){
    this.changeTheme(this.themeSelection);
    this.themeSelection = !this.themeSelection;
  }
}
