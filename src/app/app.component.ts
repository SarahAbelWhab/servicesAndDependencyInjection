import { AccountService } from './shared/account.service';
import { Component,OnInit } from '@angular/core';
import { Account } from './shared/account.module';
import { LogService } from './shared/Log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 accounts:Account[];
  constructor(private logService:LogService,private accountService:AccountService) {}
  ngOnInit(): void {
    this.accounts = this.accountService.GetAllAccounts();
  }

  // onAddNewAccount(account:Account){
  // //console.log(account);
  // //this.accounts.push(account);
  // this.accountService.AddNewAccount(account)
  // }
  onChangeStatus(status,i){
    //this.accounts[i].status = status;
    this.accountService.ChangeStatus(status,i);
    //this.logService.LogChangeStatusMessage(this.accounts[i].name, status);
    
  }
}
