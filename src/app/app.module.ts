import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth/auth.component';
import { FeedComponent } from './feed/feed/feed.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PostFormComponent } from './postForm/post-form/post-form.component';
import { PostsComponent } from './posts/posts/posts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FeedComponent,
    NavbarComponent,
    PostFormComponent,
    PostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
