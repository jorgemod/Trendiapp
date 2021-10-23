import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabankService {

  constructor(private http: HttpClient) { }


  data(){
    const url = "http://127.0.0.1:3000/getNews?countries=mx&keywords=bbva";
    return this.http.get(url);

  }


}
