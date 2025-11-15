// src/app/services/review-service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Review } from '../shared/models/Review';
import { AVATARS, DEFAULT_IMAGES } from '../shared/config/image.config';

/**
 * Service responsável por gerenciar avaliações na API
 */
@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  // Injeta o HttpClient para fazer requisições HTTP
  private http = inject(HttpClient);

  // URL base da API (localhost)
  private apiUrl = 'http://localhost:3000';

  /**
   * Busca todas as avaliações de um filme/série específico
   * @param contentId - ID do conteúdo
   * @returns Observable com array de avaliações
   */
  buscarPorConteudo(contentId: string) {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews?contentId=${contentId}`).pipe(
      map(reviews => reviews.map(review => ({
        ...review,
        authorAvatar: review.authorAvatar || this.getAvatar(review.authorName)
      })))
    );
  }

  /**
   * Cadastra uma nova avaliação
   * @param review - Objeto com dados da avaliação
   * @returns Observable com a avaliação criada
   */
  cadastrarAvaliacao(review: Review) {
    const reviewComAvatar = {
      ...review,
      authorAvatar: review.authorAvatar || this.getAvatar(review.authorName)
    };
    
    return this.http.post<Review>(`${this.apiUrl}/reviews`, reviewComAvatar);
  }

  /**
   * Retorna um avatar baseado no nome (sempre o mesmo para o mesmo nome)
   */
  private getAvatar(authorName: string): string {
    if (!authorName || AVATARS.length === 0) {
      return DEFAULT_IMAGES.avatar;
    }
    
    // Gera índice baseado no nome para consistência
    const hash = authorName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % AVATARS.length;
    
    return AVATARS[index];
  }
}