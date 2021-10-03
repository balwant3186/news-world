import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  isLoading: boolean = true;
  news_data;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.news_data = this.dataService.getData()
    this.isLoading = false
  }

}
