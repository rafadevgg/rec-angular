// src/app/services/review-service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Review } from '../shared/models/Review';

/**
 * Service responsável por gerenciar avaliações na API
 */
@Injectable({
  providedIn: 'root',
})
export class ReviewService {

  // Injeta o HttpClient para fazer requisições HTTP
  private http = inject(HttpClient);

  // URL base da API
  private apiUrl = 'http://senai-streams.ddns.net';

  /**
   * Busca todas as avaliações de um filme/série específico
   * @param contentId - ID do conteúdo
   * @returns Observable com array de avaliações
   */
  buscarPorConteudo(contentId: number) {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews?contentId=${contentId}`);
  }

  /**
   * Cadastra uma nova avaliação
   * @param review - Objeto com dados da avaliação
   * @returns Observable com a avaliação criada
   */
  cadastrarAvaliacao(review: Review) {
    return this.http.post<Review>(`${this.apiUrl}/reviews`, review);
  }
}