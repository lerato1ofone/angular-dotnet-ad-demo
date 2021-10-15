import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  //GET: Users
  getUsers() {
    return this.http.get<user[]>(`${environment.apiUrl}/users`);
  }
}
