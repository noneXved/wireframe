import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MiniSidebarComponent } from './components/mini-sidebar/mini-sidebar.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    SidebarComponent,
    MiniSidebarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
