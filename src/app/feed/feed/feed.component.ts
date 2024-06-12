import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from '../../shared/http-methods.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  constructor(private http: HttpMethodsService) {}
  hiddingModule = false;
  posts: any;
  newPost() {
    this.hiddingModule = !this.hiddingModule;
  }
  ngOnInit(): void {
    this.http.gettingPosts().subscribe((data: any) => {
      this.posts = data.posts;
    });
  }
}
