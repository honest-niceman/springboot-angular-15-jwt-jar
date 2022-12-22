import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {newsfeed} from "../newsfeed";

const API_URL = '/api/v1/newsfeed';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  private url = window["apiUrl"] + API_URL;

  constructor(private http: HttpClient) {
  }

  getNewsFeed() {
    return this.http.get<Array<newsfeed>>(
      this.url
    );
  }
}
