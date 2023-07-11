import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from './shared/account.service';
import { LogService } from './shared/Log.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LogService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
