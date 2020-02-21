import { Component, OnInit } from '@angular/core';
import { CommentsService } from './services/comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.getComments();
  }
}
