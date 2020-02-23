import { IComment } from './../../interfaces/comment.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.scss']
})
export class CommentInfoComponent implements OnInit, OnDestroy {
  public comment: IComment;
  private getCommentsEndSourceSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    public commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.getCommentData();
    this.getCommentsEndSourceSubs = this.commentsService.getCommentsEnd$.subscribe(result => {
      this.getCommentData();
    });
  }

  private getCommentData(): void {
    const commentId = +this.route.snapshot.paramMap.get('id');
    this.commentsService.getCommentById(commentId);
  }

  ngOnDestroy() {
    this.getCommentsEndSourceSubs.unsubscribe();
  }
}
