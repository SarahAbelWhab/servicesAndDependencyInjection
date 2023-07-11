import { Component } from '@angular/core';
import { Account } from './shared/account.module';
import { LogService } from './shared/Log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LogService]
})
export class AppComponent {
 
  constructor(private logService:LogService) {}
  accounts:Account[] = [{name:"Mike",status: "Unknown"},new Account("Mike", "Unknown")]

  onAddNewAccount(account:Account){
  //console.log(account);
  this.accounts.push(account);
  }
  onChangeStatus(status,i){
    this.accounts[i].status = status;
    this.logService.LogChangeStatusMessage(this.accounts[i].name, status);
    
  }
}
