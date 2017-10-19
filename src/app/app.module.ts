import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import {APP_CONFIG, AppConfig} from './config/app.config';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpLoaderFactory} from './app.translate.factory';

import { AppComponent } from './app.component';
import { ThreeColumnComponent } from './component/layout/three-column/three-column.component';
import { TwoColumnComponent } from './component/layout/two-column/two-column.component';
import { HeaderComponent } from './component/share/header/header.component';
import { FooterComponent } from './component/share/footer/footer.component';
import { LeftPanelComponent } from './component/share/left-panel/left-panel.component';
import { RightPanelComponent } from './component/share/right-panel/right-panel.component';
import { ScreenComponent } from './component/share/screen/screen.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeColumnComponent,
    TwoColumnComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    RightPanelComponent,
    ScreenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
