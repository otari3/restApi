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
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './logIn/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FeedComponent,
    NavbarComponent,
    PostFormComponent,
    PostsComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
