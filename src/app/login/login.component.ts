import { Component, OnInit } from '@angular/core';
import { loginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService : loginService) { }
  userEmail :  string;
  userPassword : string;
  rememberMe :boolean;
  

  ngOnInit() {
  }

  submit() {
          this.loginService.findAll('grant_type=password&username=' + encodeURIComponent(this.userEmail) + '&password=' + this.userPassword).subscribe(
                Response => {console.log("Res" , Response );
            }
          );
            
          
  }
}
