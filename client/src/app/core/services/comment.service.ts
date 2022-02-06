import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerResponse } from '../models/server-response.model';
import { BookService } from './book.service';

const baseUrl = 'comment';
const addCommentEndpoint = '/add/';
const editCommentEndpoint = '/edit/';
const deleteCommentEndpoint = '/delete/';
const getLatestFiveEndpont = '/getLatestFiveByUser/';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) { }

  getComments(id: string, page: string): Observable<ServerResponse<Comment[]>> {
    return this.http.get<ServerResponse<Comment[]>>(`${baseUrl}/${id}/${page}`);
  }

  getLatestFiveComments(id: string): Observable<ServerResponse<Comment[]>> {
    return this.http.get<ServerResponse<Comment[]>>(baseUrl + getLatestFiveEndpont + id);
  }

  addComment(id: string, payload: Comment): Observable<ServerResponse<Comment>> {
    return this.http.post<ServerResponse<Comment>>(baseUrl + addCommentEndpoint + id, payload);
  }

  editComment(id: string, payload: Comment): Observable<ServerResponse<Comment>> {
    return this.http.put<ServerResponse<Comment>>(baseUrl + editCommentEndpoint + id, payload);
  }

  deleteComment(id: string): Observable<ServerResponse<object>> {
    return this.http.delete<ServerResponse<object>>(baseUrl + deleteCommentEndpoint + id);
  }
}
