import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data : Date = new Date();

  date: {year: number, month: number};

  constructor() { }

  ngOnInit() {
  }

}
