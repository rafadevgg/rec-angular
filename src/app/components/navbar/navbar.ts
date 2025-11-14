// src/app/components/navbar/navbar.ts

import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category-service';
import { Category } from '../../shared/models/Category';

/**
 * Componente da barra de navegação
 * Exibe o menu com links para home e categorias
 */
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  
  // Injeta o service de categorias
  private categoryService = inject(CategoryService);
  
  // Array que armazena as categorias para exibir no menu
  protected categorias: Category[] = [];

  /**
   * Método executado quando o componente é inicializado
   * Busca as categorias da API
   */
  ngOnInit(): void {
    // Faz a requisição para buscar categorias
    this.categoryService.buscarCategorias().subscribe(
      response => {
        // Quando a resposta chegar, salva no array
        this.categorias = response;
      }
    );
  }

}