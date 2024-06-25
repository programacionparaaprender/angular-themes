import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputSwitchModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-themes';
  themeSelection: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document){
    let theme = window.localStorage.getItem('theme');
    if(theme){
      this.themeSelection = theme == 'dark' ? true:false;
    }
  }
  changeTheme(state: boolean){
    let theme = state ? 'dark': 'light';
    window.localStorage.setItem('theme', theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-blue.css';
  }
}
