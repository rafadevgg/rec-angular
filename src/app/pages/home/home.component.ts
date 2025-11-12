import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { ContentCardComponent } from '../../components/content-card/content-card.component';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredContents: Content[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.fetchFeaturedContents();
  }

  fetchFeaturedContents(): void {
    this.isLoading = true;
    this.hasError = false;
    
    this.contentService.getFeaturedContents().subscribe({
      next: (data: Content[]) => {
        this.featuredContents = data || [];
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error fetching featured contents', error);
        this.hasError = true;
        this.isLoading = false;
        this.featuredContents = [];
      }
    });
  }
}