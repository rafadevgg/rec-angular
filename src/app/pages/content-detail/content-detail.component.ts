import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { ReviewService } from '../../services/review.service';
import { CategoryService } from '../../services/category.service';
import { Content } from '../../models/content.model';
import { Review } from '../../models/review.model';
import { Category } from '../../models/category.model';
import { ReviewListComponent } from '../../components/review-list/review-list.component';

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ReviewListComponent],
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  contentId: string = '';
  content: Content | null = null;
  reviews: Review[] = [];
  category: Category | null = null;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private reviewService: ReviewService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contentId = id;
      this.fetchContentDetail();
      this.fetchReviews();
    }
  }

  fetchContentDetail(): void {
    this.contentService.getContentById(this.contentId).subscribe({
      next: (data: Content) => {
        this.content = data;
        if (data.categoryId) {
          this.fetchCategory(data.categoryId);
        }
      },
      error: (error: any) => {
        console.error('Error fetching content details:', error);
      }
    });
  }

  fetchCategory(categoryId: number): void {
    this.categoryService.getCategoryById(categoryId.toString()).subscribe({
      next: (data: Category) => {
        this.category = data;
      },
      error: (error: any) => {
        console.error('Error fetching category:', error);
      }
    });
  }

  fetchReviews(): void {
    const contentIdNumber = parseInt(this.contentId, 10);
    if (!isNaN(contentIdNumber)) {
      this.reviewService.getReviews(contentIdNumber).subscribe({
        next: (data: Review[]) => {
          this.reviews = data;
        },
        error: (error: any) => {
          console.error('Error fetching reviews:', error);
        }
      });
    }
  }

  getContentType(): string {
    return this.content?.type === 'movie' ? 'Filme' : 'Série';
  }
}