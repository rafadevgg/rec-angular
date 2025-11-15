// src/app/services/category-service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../shared/models/Category';

/**
 * Service responsável por buscar dados de categorias na API
 */
@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  // Injeta o HttpClient para fazer requisições HTTP
  private http = inject(HttpClient);

  // URL base da API (localhost)
  private apiUrl = 'http://localhost:3000';

  /**
   * Busca todas as categorias disponíveis
   * @returns Observable com array de categorias
   */
  buscarCategorias() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  /**
   * Busca uma categoria específica por ID
   * @param id - ID da categoria
   * @returns Observable com a categoria encontrada
   */
  buscarCategoriaPorId(id: string) {
    return this.http.get<Category>(`${this.apiUrl}/categories/${id}`);
  }
}