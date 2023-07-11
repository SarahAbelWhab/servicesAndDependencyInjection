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

  constructor(private accountService:AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.GetAllAccounts();
  }
  
}
