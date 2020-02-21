import { Component, OnInit, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: IComment;

  constructor() { }

  ngOnInit() {}

  showName() {
    return this.comment.name.length <= 20 ? this.comment.name : `${this.comment.name.substring(0, 20)}...`;
  }

  showBody() {
    return this.comment.body.length <= 30 ? this.comment.body : `${this.comment.body.substring(0, 30)}...`;
  }
}
