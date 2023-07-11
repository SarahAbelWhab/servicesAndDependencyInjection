import { Component, OnChanges,Output,EventEmitter } from '@angular/core';
import { Account } from '../shared/account.module';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnChanges {
  name: string
  status: string;
  @Output() onAddedAccount = new EventEmitter<Account>();

  ngOnChanges(){

  }
  onAddAccount(){
    //console.log(this.name + this.status);
    this.onAddedAccount.emit({name:this.name,status:this.status});
    this.name=''
    this.status=''
  }
}
