// src/app/services/content-service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Content } from '../shared/models/Content';
import { CONTENT_IMAGES, DEFAULT_IMAGES } from '../shared/config/image.config';

/**
 * Service responsável por buscar dados de filmes/séries na API
 */
@Injectable({
  providedIn: 'root',
})
export class ContentService {

  // Injeta o HttpClient para fazer requisições HTTP
  private http = inject(HttpClient);

  // URL base da API (localhost)
  private apiUrl = 'http://localhost:3000';

  /**
   * Busca todos os filmes e séries
   * @returns Observable com array de conteúdos
   */
  buscarTodos() {
    return this.http.get<Content[]>(`${this.apiUrl}/contents`).pipe(
      map(contents => contents.map(c => this.addImages(c)))
    );
  }

  /**
   * Busca conteúdos de uma categoria específica
   * @param categoryId - ID da categoria
   * @returns Observable com array de conteúdos filtrados
   */
  buscarPorCategoria(categoryId: string) {
    return this.http.get<Content[]>(`${this.apiUrl}/contents?categoryId=${categoryId}`).pipe(
      map(contents => contents.map(c => this.addImages(c)))
    );
  }

  /**
   * Busca um filme/série específico por ID
   * @param id - ID do conteúdo
   * @returns Observable com o conteúdo encontrado
   */
  buscarPorId(id: string) {
    return this.http.get<Content>(`${this.apiUrl}/contents/${id}`).pipe(
      map(c => this.addImages(c))
    );
  }

  /**
   * Adiciona imagens locais ao conteúdo
   */
  private addImages(content: Content): Content {
    const images = CONTENT_IMAGES[content.id] || DEFAULT_IMAGES;
    return {
      ...content,
      thumbnail: images.thumbnail,
      banner: images.banner,
      image: images.thumbnail
    };
  }
}