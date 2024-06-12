import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent implements OnInit {
  post: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });
  @Input() editInfo: any;
  gettingPostsInfor() {
    console.log(this.post);
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
