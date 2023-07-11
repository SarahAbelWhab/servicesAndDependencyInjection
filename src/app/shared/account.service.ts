import { LogService } from './Log.service';
import { Injectable } from '@angular/core';
import { Account } from './account.module';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private logService:LogService) { }

  accounts:Account[] = [{id:1, name:"Mike", status: "Unknown"},new Account(2, "Maro", "Unknown")]

  GetAllAccounts(){
    return this.accounts;
  }

  AddNewAccount(name:string, status:string){
    //console.log(account);
    let newAcc = new Account(this.accounts.length+1, name,status);
    this.accounts.push(newAcc);
    this.logService.LogNewAccount(name, status);

    }

  ChangeStatus(status,accountNo){
      //this.accounts[accountNo].status = status;
      let acc = this.accounts.filter(c=>c.id == accountNo)[0]
      acc.status = status;
      this.logService.LogChangeStatusMessage(acc.name, status);      
    }

}
