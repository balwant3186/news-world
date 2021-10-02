import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  today_news = []
  breaking_news = []
  national_news = []
  international_news = []

  constructor (private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.get('').subscribe(data => {
      console.log('data', data)
    }, err => console.log(err)
    )
  }
  
}
