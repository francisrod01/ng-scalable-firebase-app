import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-scalable-firebase-app';

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs.collection('test').snapshotChanges().subscribe(items => {
      console.log('[DEBUG] firestore: ', items.map(x => x.payload.doc.data()));
    });
  }
}
