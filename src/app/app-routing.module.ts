import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommentInfoComponent } from './components/comment-info/comment-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'comments', pathMatch: 'full' },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/:id', component: CommentInfoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
