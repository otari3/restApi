import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from './shared/http-methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private apiService: HttpMethodsService) {}
  ngOnInit(): void {
    this.apiService.gettingPosts().subscribe((data: any) => {
      console.log(data.posts[0]);
    });
    this.apiService
      .postingPost({
        title: 'this is post from angular',
        content: 'angular is posting this',
      })
      .subscribe({
        next: (v) => {
          console.log(v);
        },
      });
  }
}
