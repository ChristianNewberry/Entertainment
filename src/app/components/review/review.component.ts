// review.component.ts
import { Component, OnInit } from '@angular/core';
import {Review} from './review';

@Component({
 selector: 'app-review',
 templateUrl: './review.component.html',
 styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 review: Review = {
     id: 1,
     title: 'Army of Darkness',
     score: 4.5,
     reviewText: `Lorem ipsum dolor sit amet,
     consectetur adipisicing elit. Dolorem commodi dignissimos
     magni dolor autem excepturi voluptate! Quam fugiat architecto distinctio`
 };
 constructor() { }

 ngOnInit() {
 }

}