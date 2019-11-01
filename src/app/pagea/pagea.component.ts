import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from "rxjs";
@Component({
  selector: 'app-pagea',
  templateUrl: './pagea.component.html',
  styleUrls: ['./pagea.component.css']
})
export class PageaComponent implements OnInit {
  items: Observable<any[]>
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
  }

}
