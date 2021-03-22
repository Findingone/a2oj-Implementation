import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SolvedFinderService {
  handle = "Crazy_lazy.95"

  constructor(private http: HttpClient) { }
  apiUrl = 'https://codeforces.com/api/user.status?handle=' + this.handle + '&from=1';

  getConfig() {
    this.apiUrl = 'https://codeforces.com/api/user.status?handle=' + this.handle + '&from=1';
    console.log(this.apiUrl)
    return this.http.get(this.apiUrl);
  }
}
