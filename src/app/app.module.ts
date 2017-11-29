import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { EconthHeaderComponent } from './_directives/econth-header/econth-header.component';
import { EconthSidebarComponent } from './_directives/econth-sidebar/econth-sidebar.component';

import { AuthenticationService } from './_service/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EconthHeaderComponent,
    EconthSidebarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
