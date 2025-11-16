import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Content } from '../shared/models/Content';
import { CONTENT_IMAGES, DEFAULT_IMAGES } from '../shared/config/image.config';

@Injectable({
  providedIn: 'root',
})

export class ContentService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000';

  buscarTodos() {
    return this.http.get<Content[]>(`${this.apiUrl}/contents`).pipe(
      map(contents => contents.map(c => this.addImages(c)))
    );
  }

  buscarPorCategoria(categoryId: string) {
    return this.http.get<Content[]>(`${this.apiUrl}/contents?categoryId=${categoryId}`).pipe(
      map(contents => contents.map(c => this.addImages(c)))
    );
  }

  buscarPorId(id: string) {
    return this.http.get<Content>(`${this.apiUrl}/contents/${id}`).pipe(
      map(c => this.addImages(c))
    );
  }

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