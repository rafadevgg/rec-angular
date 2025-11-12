import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredContents: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.fetchFeaturedContents();
  }

  fetchFeaturedContents(): void {
    this.contentService.getFeaturedContents().subscribe(
      (data: any[]) => {
        this.featuredContents = data;
      },
      (error) => {
        console.error('Error fetching featured contents', error);
      }
    );
  }
}