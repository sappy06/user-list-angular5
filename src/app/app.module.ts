import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserService} from './user-group/user-group.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './app.constants';
import { FilterPipe } from './user-group/filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserGroupComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, HttpClient, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
