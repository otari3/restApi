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
  infoAboutEdit: any;
  newPost() {
    this.infoAboutEdit = undefined;
    this.hiddingModule = !this.hiddingModule;
  }
  onEdit(event: any) {
    this.infoAboutEdit = event;
    this.hiddingModule = true;
  }
  ngOnInit(): void {
    this.http.gettingPosts().subscribe((data: any) => {
      this.posts = data.posts;
    });
  }
}
