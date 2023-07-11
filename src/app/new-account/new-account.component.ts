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
  
  constructor(private accountService:AccountService){  }

  onAddAccount(){    
    this.accountService.AddNewAccount( this.name,this.status)
    this.name=''
    this.status=''
  }
}
