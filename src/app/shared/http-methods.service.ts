import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpMethodsService {
  gettingPosts() {
    return this.http.get('http://localhost:8080/feed/posts');
  }
  postingPost(post: any) {
    return this.http.post('http://localhost:8080/feed/post', post);
  }
  signup(user: any) {
    return this.http.post('http://localhost:8080/signup', user);
  }
  constructor(private http: HttpClient) {}
}

// headers: new HttpHeaders({
//   'Content-Type': 'application/json',
// }),
