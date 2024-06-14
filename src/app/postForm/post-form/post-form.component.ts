import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpMethodsService } from '../../shared/http-methods.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent implements OnInit {
  constructor(private http: HttpMethodsService) {}
  post: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });
  @Input() editInfo: any;
  @Output() postedInfo = new EventEmitter<void>();
  gettingPostsInfor() {
    if (!this.editInfo) {
      this.http
        .postingPost({
          title: this.post.get('title')?.value,
          content: this.post.get('content')?.value,
        })
        .subscribe({
          next: (v) => {
            this.postedInfo.emit();
          },
        });
    }
  }
  ngOnInit(): void {
    if (this.editInfo) {
      this.post.patchValue({
        title: this.editInfo.title,
        content: this.editInfo.content,
      });
    }
  }
}
