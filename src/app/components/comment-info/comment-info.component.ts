import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/interfaces/comment.model';
import { CommentsService } from 'src/app/services/comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.scss']
})
export class CommentInfoComponent implements OnInit {
  public comment: IComment;

  constructor(
    private route: ActivatedRoute,
    public commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.getCommentData();
  }

  private getCommentData(): void {
    const commentId = +this.route.snapshot.paramMap.get('id');
    this.commentsService.getCommentById(commentId);

    this.commentsService.currentComment$.subscribe(result => {
      this.comment = result;

      console.log(this.comment)
    })
  }
}
