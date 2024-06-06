import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  hiddingModule = false;
  newPost() {
    this.hiddingModule = !this.hiddingModule;
  }
}
