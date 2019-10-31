import { Component, OnInit } from '@angular/core';
import { User } from '../types/User';

import { NedbService } from "../nedb.service";

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  public users: User[];

  constructor(private nedbService: NedbService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.nedbService.users;
  }
  // getUsers(): void {
  //   this.nedbService.getUsers()
  //     .subscribe(users => this.users = users);
  // }

}
