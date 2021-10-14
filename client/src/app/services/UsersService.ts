import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  //GET: Users
  getUsers() {
    return this.http.get<user[]>('https://localhost:5001/api/users');
  }
}
