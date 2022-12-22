import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {user} from "../user";

const API_URL = '/api/v1/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = window["apiUrl"] + API_URL;

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<Array<user>>(
      this.url + '/find-all',
      {params: {pageNumber: 0, pageSize: 10}}
    );
  }

  getUser(id: number | string) {
    return this.http.get<user>(this.url + '/find' + id);
  }

  createUser(user: user) {
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<user>(this.url + '/save', JSON.stringify(user), {headers: myHeaders});
  }

  updateUser(user: user) {
    const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<user>(this.url + '/update', JSON.stringify(user), {headers: myHeaders});
  }

  deleteUser(id: number | string) {
    return this.http.delete<user>(this.url + '/delete', {params: {id: id}});
  }
}
