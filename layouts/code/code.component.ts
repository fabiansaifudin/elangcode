import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../config/config.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  posts: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getSilabus().subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); });
  }

}
