import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutes } from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EconthHeaderComponent } from './_directives/econth-header/econth-header.component';
import { EconthSidebarComponent } from './_directives/econth-sidebar/econth-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EconthHeaderComponent,
    EconthSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
