import {Component, Inject} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

import {NavigationEnd, Router} from '@angular/router';
import {APP_CONFIG, AppConfig} from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    changeLanguage(language: string): void {
      console.log('language change requested.');
    }
}
