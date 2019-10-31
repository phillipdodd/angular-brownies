import { Component, OnInit } from '@angular/core';
import { User } from '../types/User';
import { NedbService } from "../nedb.service";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  name: string;
  model: User = { name: null };

  constructor(private nedbService: NedbService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.nedbService.addUser(this.model);
  }

}
