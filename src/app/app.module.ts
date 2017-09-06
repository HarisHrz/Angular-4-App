import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { loginService } from "./login/login.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent 
     
  ],
  imports: [
    BrowserModule , FormsModule , HttpModule , 
    NgbModule.forRoot()
  ],
  providers: [loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
