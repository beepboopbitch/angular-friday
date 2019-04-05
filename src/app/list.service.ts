import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListService{
  populars: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.populars = database.list('populars');
  }

  getPopulars() {
    return this.populars;
  }
}
