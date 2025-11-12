import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Content } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = '/contents';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return of(result as T);
    };
  }

  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiUrl).pipe(
      catchError(this.handleError<Content[]>('getContents', []))
    );
  }

  getContentById(id: string): Observable<Content | null> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<Content | null>(`getContentById id=${id}`, null))
    );
  }

  searchContents(query: string): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}?search=${query}`).pipe(
      catchError(this.handleError<Content[]>('searchContents', []))
    );
  }

  getFeaturedContents(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}?featured=true`).pipe(
      catchError(this.handleError<Content[]>('getFeaturedContents', []))
    );
  }
}