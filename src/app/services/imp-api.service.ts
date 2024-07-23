import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImpApiService {

  constructor(private http: HttpClient) { }
  get(api:any): Observable<any> {return this.http.get<any>(api);}
  post(api, data): Observable<any> { return this.http.post<any>(api, data);}
  put(api, data): Observable<any> {return this.http.put<any>(api, data);}
  delete(api) {return this.http.delete<any>(api);}

}
