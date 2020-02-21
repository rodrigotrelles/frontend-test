import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../interfaces/comment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  // private getCommentsEndSource = new Subject<void>();
  // public getCommentsEnd$ = this.getCommentsEndSource.asObservable();

  private commentsSource = new BehaviorSubject<IComment[]>([]);
  public comments$ = this.commentsSource.asObservable();

  private currentCommentSource = new BehaviorSubject<IComment>(null);
  public currentComment$ = this.currentCommentSource.asObservable();

  private currentCommentSourceNum = new BehaviorSubject<number>(0);
  public currentCommentNum$ = this.currentCommentSourceNum.asObservable();

  constructor(private http: HttpClient) { }

  public getComments(): void {
    this.http.get<IComment[]>(environment.api).subscribe((comments: IComment[]) => {

      this.commentsSource.next(comments);
      setTimeout(() => {

      }, 4000);


      // this.getCommentsEndSource.next();
    });
  }

  public getCommentById(id: number): void {
    const currentComment = this.commentsSource.getValue().find(comment => comment.id === id);
    this.currentCommentSource.next(currentComment);
  }
}
