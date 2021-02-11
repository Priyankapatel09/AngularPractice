import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }
}
