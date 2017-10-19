import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

import {NavigationEnd, Router} from '@angular/router';
import {APP_CONFIG, AppConfig} from './config/app.config';
import {AppInterface} from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appConfig: any;
    //private translateServices: TranslateService;

    constructor(@Inject(APP_CONFIG) appConfig: AppInterface,
                private translateService: TranslateService,
                private title: Title,
                private meta: Meta,
                private router: Router) {
      this.translateService = translateService;
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
    }

    changeLanguage(language: string): void {
      this.translateService.use(language).subscribe(() => {
        //this.loadMenus();
        console.log('language change requested.');
      });
    }
}
