import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category-service';
import { Category } from '../../shared/models/Category';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {

  private categoryService = inject(CategoryService);

  protected categorias: Category[] = [];

  ngOnInit(): void {
    this.categoryService.buscarCategorias().subscribe(
      response => {
        this.categorias = response;
      }
    );
  }

}