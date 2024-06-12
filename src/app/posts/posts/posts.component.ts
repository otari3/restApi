import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  @Input() post: any;
  @Output() editing = new EventEmitter<any>();
  editInfo() {
    this.editing.emit(this.post);
  }
}
