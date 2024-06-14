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
  infoHasPosted(event: any) {
    this.gettingPosts(() => {
      this.hiddingModule = false;
    });
  }
  //doing callbacks if i ever need to look at it again
  gettingPosts(cd?: () => void) {
    this.http.gettingPosts().subscribe((data: any) => {
      this.posts = data.posts;
      if (cd) {
        cd!();
      }
    });
  }
  ngOnInit(): void {
    this.gettingPosts();
  }
}
