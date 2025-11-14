// src/app/views/lista-conteudos/lista-conteudos.ts

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardContent } from '../../components/card-content/card-content';
import { ContentService } from '../../services/content-service';
import { Content } from '../../shared/models/Content';

/**
 * Componente que lista filmes/séries
 * Pode listar todos ou filtrar por categoria
 */
@Component({
  selector: 'app-lista-conteudos',
  imports: [CardContent],
  templateUrl: './lista-conteudos.html',
  styleUrl: './lista-conteudos.scss',
})
export class ListaConteudos implements OnInit {
  
  // Injeta os services necessários
  private contentService = inject(ContentService);
  private route = inject(ActivatedRoute);
  
  // Array que armazena os conteúdos para exibir
  protected conteudos: Content[] = [];
  
  // Armazena o título da página (muda se estiver filtrando por categoria)
  protected titulo = 'Todos os Filmes e Séries';

  /**
   * Método executado quando o componente é inicializado
   * Verifica se tem um ID de categoria na URL e busca os conteúdos
   */
  ngOnInit(): void {
    // Pega o parâmetro 'id' da URL (se existir)
    // Ex: /categoria/1 -> idCategoria = 1
    const idCategoria = this.route.snapshot.params['id'];
    
    // Se tem ID de categoria, busca apenas daquela categoria
    if (idCategoria) {
      this.titulo = 'Filmes e Séries da Categoria';
      
      this.contentService.buscarPorCategoria(idCategoria).subscribe(
        response => {
          this.conteudos = response;
        }
      );
    } else {
      // Se não tem ID, busca todos
      this.contentService.buscarTodos().subscribe(
        response => {
          this.conteudos = response;
        }
      );
    }
  }

}