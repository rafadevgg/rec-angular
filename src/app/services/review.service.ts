import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = '/reviews';

  constructor(private http: HttpClient) {}

  getReviews(contentId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}?contentId=${contentId}`);
  }

  getReviewById(reviewId: string): Observable<Review> {
    return this.http.get<Review>(`${this.apiUrl}/${reviewId}`);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review);
  }

  updateReview(reviewId: string, review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.apiUrl}/${reviewId}`, review);
  }

  deleteReview(reviewId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${reviewId}`);
  }
}