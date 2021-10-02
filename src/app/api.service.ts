import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { environment } from '../environments/environment';
import { _throw } from 'rxjs/observable/throw'

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any>{
    const url = environment.api_url + '/' + path + "&apiKey=" + environment.api_key;
    return this.http.get(url).pipe(map((res: Response) => res), catchError((error: Response) => _throw(error)));
  }

}
