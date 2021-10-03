import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private news_data;

  constructor() { }

  setData (data) {
    this.news_data = data
  }

  getData () {
    return this.news_data
  }

}
