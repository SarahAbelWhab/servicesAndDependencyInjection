import { Component } from '@angular/core';
import { Account } from './shared/account.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-dependency-injection';
  accounts:Account[] = [{name:"Mike",status: "Unknown"},new Account("Mike", "Unknown")]

  onAddNewAccount(account:Account){
  //console.log(account);
  this.accounts.push(account);
  }
  onChangeStatus(status,i){
    this.accounts[i].status = status;
    console.log(`Change status of account ${this.accounts[i].name} to ${status}`);
  }
}
