// src/app/views/detalhes-conteudo/detalhes-conteudo.ts

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentService } from '../../services/content-service';
import { Content } from '../../shared/models/Content';

/**
 * Componente que exibe os detalhes completos de um filme/série
 */
@Component({
  selector: 'app-detalhes-conteudo',
  imports: [RouterLink],
  templateUrl: './detalhes-conteudo.html',
  styleUrl: './detalhes-conteudo.scss',
})
export class DetalhesConteudo implements OnInit {
  
  // Injeta os services necessários
  private contentService = inject(ContentService);
  private route = inject(ActivatedRoute);
  
  // Armazena o conteúdo que será exibido
  protected conteudo: Content | null = null;

  /**
   * Método executado quando o componente é inicializado
   * Busca o conteúdo específico usando o ID da URL
   */
  ngOnInit(): void {
    // Pega o ID da URL
    // Ex: /conteudo/5 -> id = 5
    const id = this.route.snapshot.params['id'];
    
    // Busca o conteúdo na API
    this.contentService.buscarPorId(id).subscribe(
      response => {
        // Quando a resposta chegar, salva no conteudo
        this.conteudo = response;
      }
    );
  }

}