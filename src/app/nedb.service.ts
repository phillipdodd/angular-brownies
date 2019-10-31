import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './types/User';
import * as Datastore from 'nedb';

class Database {
  users: Datastore;
}

function getAllDocs(db: Datastore): Promise<any[]> {
  return new Promise((resolve, reject) => {
    db.find({}, (err, docs) => {
      if (err) console.error(err);
      resolve(docs);
    });
  });  
}

@Injectable({
  providedIn: 'root'
})
export class NedbService {

  db: Database;
  users: User[];

  constructor() {
    this.db = {
      users: new Datastore({
        filename: '../../datastores/users.db',
        autoload: true
      }),
    };
    this.db.users.loadDatabase();
  }
  
  ngOnInit() {
    getAllDocs(this.db.users).then(users => this.users = users);
  }

  // getUsers(): Observable<any> {
  //   let docs = async (): Promise<User[]> => await getAllDocs(this.db.users);
  //   return of(docs);
  // }

  addUser(user: User): void {
    console.log(`trying to add User: ${JSON.stringify(user)}`)
    this.db.users.insert(user, (err, doc) => {
      if (err) console.error(err);
      console.log(`Added doc: ${doc}`);
    });
  }

}

