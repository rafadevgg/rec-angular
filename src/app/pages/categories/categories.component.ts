import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.isLoading = true;
    this.hasError = false;

    this.categoryService.getCategories().subscribe({
      next: (data: Category[]) => {
        this.categories = data || [];
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error fetching categories', error);
        this.hasError = true;
        this.isLoading = false;
        this.categories = [];
      }
    });
  }
}