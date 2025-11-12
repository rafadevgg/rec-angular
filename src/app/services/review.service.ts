import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = '/reviews';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return of(result as T);
    };
  }

  getReviews(contentId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}?contentId=${contentId}`).pipe(
      catchError(this.handleError<Review[]>('getReviews', []))
    );
  }

  getReviewById(reviewId: string): Observable<Review | null> {
    return this.http.get<Review>(`${this.apiUrl}/${reviewId}`).pipe(
      catchError(this.handleError<Review | null>(`getReviewById id=${reviewId}`, null))
    );
  }

  addReview(review: Review): Observable<Review | null> {
    return this.http.post<Review>(this.apiUrl, review).pipe(
      catchError(this.handleError<Review | null>('addReview', null))
    );
  }

  updateReview(reviewId: string, review: Review): Observable<Review | null> {
    return this.http.put<Review>(`${this.apiUrl}/${reviewId}`, review).pipe(
      catchError(this.handleError<Review | null>(`updateReview id=${reviewId}`, null))
    );
  }

  deleteReview(reviewId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${reviewId}`).pipe(
      catchError(this.handleError<void>('deleteReview'))
    );
  }
}