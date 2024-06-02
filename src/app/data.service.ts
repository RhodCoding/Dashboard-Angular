import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  
  base_url = "http://localhost/Makkus/AngularAPI/"
  
  
  getSend(endpoint: string){
      const result = this.http.get(this.base_url + endpoint)
      return result
    }

    postSend(endpoint: string, body: any) {
      const result = this.http.post(this.base_url + endpoint, JSON.stringify(body))
      return result
    }
  }