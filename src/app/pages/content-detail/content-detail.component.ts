import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  contentId: string;
  content: Content | null = null;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.contentId = this.route.snapshot.paramMap.get('id')!;
    this.fetchContentDetail();
  }

  fetchContentDetail(): void {
    this.contentService.getContentById(this.contentId).subscribe(
      (data: Content) => {
        this.content = data;
      },
      (error) => {
        console.error('Error fetching content details:', error);
      }
    );
  }
}