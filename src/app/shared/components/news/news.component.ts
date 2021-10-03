import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() data;
  @Input() title;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  goToNewsDetail (news) {
    this.dataService.setData(news)
    window.location.href = news.url
    this.router.navigate(['/news-detail'])
  }

  ngOnInit() {
  }

}
