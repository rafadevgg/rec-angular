import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Review } from '../shared/models/Review';
import { AVATARS, DEFAULT_IMAGES } from '../shared/config/image.config';

@Injectable({
  providedIn: 'root',
})

export class ReviewService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000';

  buscarPorConteudo(contentId: string) {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews?contentId=${contentId}`).pipe(
      map(reviews => reviews.map(review => ({
        ...review,
        authorAvatar: review.authorAvatar || this.getAvatar(review.authorName)
      })))
    );
  }

  cadastrarAvaliacao(review: Review) {
    const reviewComAvatar = {
      ...review,
      authorAvatar: review.authorAvatar || this.getAvatar(review.authorName)
    };

    return this.http.post<Review>(`${this.apiUrl}/reviews`, reviewComAvatar);
  }

  private getAvatar(authorName: string): string {

    if (!authorName || AVATARS.length === 0) {
      return DEFAULT_IMAGES.avatar;
    }

    const hash = authorName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % AVATARS.length;

    return AVATARS[index];
  }
}