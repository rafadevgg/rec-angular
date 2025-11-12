import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private apiUrl = '/categories';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return of(result as T);
    };
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl).pipe(
      catchError(this.handleError<Category[]>('getCategories', []))
    );
  }

  getCategoryById(id: string): Observable<Category | null> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<Category | null>(`getCategoryById id=${id}`, null))
    );
  }
}