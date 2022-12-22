import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommentInterface} from '../types/comment.interface';
import {HttpClient} from '@angular/common/http';

const API_URL = '/api/v1/comment';

@Injectable()
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  getComments(postId: string): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(
      window["apiUrl"] + API_URL +'/find-all',
      {params: {pageNumber: 0, pageSize: 5, postId: postId}}
    );
  }

  createComment(
    text: string,
    parentId: string | null = null,
    postId: string
  ): Observable<CommentInterface> {
    return this.httpClient.post<CommentInterface>(
      window["apiUrl"] + API_URL +'/save',
      {
        body: text,
        parentId: parentId,
        postId: postId
      }
    );
  }
}
