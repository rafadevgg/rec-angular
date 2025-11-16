import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from '../shared/models/Category';
import { CATEGORY_IMAGES, DEFAULT_IMAGES } from '../shared/config/image.config';

@Injectable({
  providedIn: 'root',
})

export class CategoryService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000';

  buscarCategorias() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`).pipe(
      map(categories => categories.map(cat => ({
        ...cat,
        image: CATEGORY_IMAGES[cat.id] || DEFAULT_IMAGES.category
      })))
    );
  }

  buscarCategoriaPorId(id: string) {
    return this.http.get<Category>(`${this.apiUrl}/categories/${id}`).pipe(
      map(cat => ({
        ...cat,
        image: CATEGORY_IMAGES[cat.id] || DEFAULT_IMAGES.category
      }))
    );
  }
}