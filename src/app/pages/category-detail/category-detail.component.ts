import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  categoryId: string;
  category: Category | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.fetchCategoryDetails();
  }

  fetchCategoryDetails(): void {
    this.categoryService.getCategoryById(this.categoryId).subscribe(
      (data: Category) => {
        this.category = data;
      },
      (error) => {
        console.error('Error fetching category details:', error);
      }
    );
  }
}