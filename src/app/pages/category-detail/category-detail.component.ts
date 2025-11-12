import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ContentService } from '../../services/content.service';
import { Category } from '../../models/category.model';
import { Content } from '../../models/content.model';
import { ContentCardComponent } from '../../components/content-card/content-card.component';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  categoryId: string = '';
  category: Category | null = null;
  contents: Content[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoryId = id;
      this.fetchCategoryDetails();
      this.fetchCategoryContents();
    }
  }

  fetchCategoryDetails(): void {
    this.categoryService.getCategoryById(this.categoryId).subscribe({
      next: (data: Category | null) => {
        this.category = data;
      }
    });
  }

  fetchCategoryContents(): void {
    const categoryIdNumber = parseInt(this.categoryId, 10);
    if (!isNaN(categoryIdNumber)) {
      this.contentService.getContents().subscribe({
        next: (data: Content[]) => {
          this.contents = (data || []).filter(content => content.categoryId === categoryIdNumber);
        }
      });
    }
  }
}