import {InjectionToken} from '@angular/core';
import {AppInterface} from '../app.interface';


export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: AppInterface = {
  routes: {
    heroes: 'heroes',
    error404: '404'
  },
  endpoints: {
    heroes: 'https://nodejs-example-app.herokuapp.com/heroes'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Ismaestro/angular4-example-app'
};
