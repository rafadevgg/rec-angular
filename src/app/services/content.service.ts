import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = '/contents';

  constructor(private http: HttpClient) {}

  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiUrl);
  }

  getContentById(id: string): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`);
  }

  searchContents(query: string): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}?search=${query}`);
  }

  getFeaturedContents(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}?featured=true`);
  }
}