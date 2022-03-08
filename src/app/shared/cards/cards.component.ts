import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../config/config.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  judul = 'materi_pembelajaran';
  page = 'halaman_web';
  platform = 'target_platform';
  posts: any;

  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.judul = params.judul;
        this.page = params.page;
        this.platform = params.usera;
        if (this.platform != null) {
          this.judul = this.platform;
        }
      }
    );
    this.http.getSilabus().subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); });
  }

}
