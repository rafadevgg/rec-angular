// src/app/services/content-service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Content } from '../shared/models/Content';

/**
 * Service responsável por buscar dados de filmes/séries na API
 */
@Injectable({
  providedIn: 'root',
})
export class ContentService {

  // Injeta o HttpClient para fazer requisições HTTP
  private http = inject(HttpClient);

  // URL base da API
  private apiUrl = 'http://senai-streams.ddns.net';

  /**
   * Busca todos os filmes e séries
   * @returns Observable com array de conteúdos
   */
  buscarTodos() {
    return this.http.get<Content[]>(`${this.apiUrl}/contents`);
  }

  /**
   * Busca conteúdos de uma categoria específica
   * @param categoryId - ID da categoria
   * @returns Observable com array de conteúdos filtrados
   */
  buscarPorCategoria(categoryId: number) {
    return this.http.get<Content[]>(`${this.apiUrl}/contents?categoryId=${categoryId}`);
  }

  /**
   * Busca um filme/série específico por ID
   * @param id - ID do conteúdo
   * @returns Observable com o conteúdo encontrado
   */
  buscarPorId(id: number) {
    return this.http.get<Content>(`${this.apiUrl}/contents/${id}`);
  }
}