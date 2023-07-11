import { Account } from './../shared/account.module';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

 @Input() account:Account;
 @Output() changeStatus = new EventEmitter<string>();

 onChangeStatus(status:string){
  //console.log(status);
  this.changeStatus.emit(status);  
 }
}
