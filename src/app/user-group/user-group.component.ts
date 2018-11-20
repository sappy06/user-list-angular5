import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user-group.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  @Input() user: {};
  usergroups = ['male','female'];
  selectedGroup: string = '';
  isDetailLoaded = false;
  public users;
  constructor(private _userService: UserService) { }
  
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedGroup = event.target.value;
  }
  ngOnInit() {
  	this.getUsers();
  }
 
  getUsers() {
   this._userService.getUsers().subscribe(
      data => { this.users = data['results']},
      err => console.error(err),
      () => console.log('done loading users')
    );
  }

  renderDetail(event, userv) {
  	this._userService.setUser(userv);
  	this.user = userv
  	this.isDetailLoaded = true;
  }
}
