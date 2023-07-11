import { AccountService } from './../shared/account.service';
import { Component, OnChanges,Output,EventEmitter } from '@angular/core';
import { Account } from '../shared/account.module';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  name: string
  status: string;
  @Output() onAddedAccount = new EventEmitter<Account>();

  constructor(private accountService:AccountService){

  }
  onAddAccount(){
    //console.log(this.name + this.status);
    //this.onAddedAccount.emit({id:3, name:this.name,status:this.status});
    this.accountService.AddNewAccount( this.name,this.status)
    this.name=''
    this.status=''
  }
}
