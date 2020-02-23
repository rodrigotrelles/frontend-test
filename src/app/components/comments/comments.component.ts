import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {

  constructor(
    public commentsService: CommentsService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
