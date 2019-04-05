import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Populars } from '../list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  populars: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit(){
    this.populars
  }

}
