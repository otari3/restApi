import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from './shared/http-methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private apiService: HttpMethodsService) {}
  ngOnInit(): void {}
}
