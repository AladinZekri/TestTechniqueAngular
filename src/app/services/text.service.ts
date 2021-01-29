import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private baseUrl = 'http://localhost:8080/test';

  constructor(
    private http: HttpClient
  ) { }



  countSymbols(text : string){
    return this.http.post(this.baseUrl+'/calculer',text)
  }
}
