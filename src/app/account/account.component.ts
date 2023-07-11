import { AccountService } from './../shared/account.service';
import { Account } from './../shared/account.module';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {  
 
  @Input() account:Account;
  
  constructor(private accountService:AccountService) {} 

 onChangeStatus(status:string){
  this.accountService.ChangeStatus(status,this.account.id); 
 }

}
