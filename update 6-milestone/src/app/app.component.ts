import { AdminHomeBodyService, Id } from '../providers/admin-home-body.service';
import { Component, OnInit } from '@angular/core';
import { Authenticate } from "../providers/authenticate";
import { AdalService } from "ng2-adal/services/adal.service";
import {MyApp} from './home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  adminId;
  flag:boolean=true;
  public rootPage;
   public AuthenticationContext;
  constructor(private AdminHomeBodyService: AdminHomeBodyService, public adalService:AdalService,
    private Authentication: Authenticate) {
    this.adalService.init(this.Authentication.adalConfig);
    console.log(this.adalService);
   this.adalService.handleWindowCallback();
    this.adalService.getUser();
    
    if(this.adalService.userInfo.isAuthenticated==true)
    {
      console.log(this.adalService.userInfo);
      //  console.log("admin-id:",response);
      console.log(this.adalService.getCachedToken(this.adalService.config.loginResource));
     
    }
    else
    {
      this.adalService.login();
    }
}
}

