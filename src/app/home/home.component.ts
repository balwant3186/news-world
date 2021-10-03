import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today_news = []
  breaking_news = []
  national_news = []
  international_news = []

  isLoading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchHeadlines("us")
    this.fetchHeadlines("in")
  }

  fetchHeadlines (country) {
    this.isLoading = true
    this.apiService.get('top-headlines?country=' + country)
      .subscribe(
        data => {
          console.log(data)
          switch(country) {
            case "us":
              this.international_news = data.articles
              this.isLoading = false
              return
            case "in":
              this.national_news = data.articles
              this.isLoading = false
              return
          }
        }, 
        err => console.log(err)
      )
    }

}
