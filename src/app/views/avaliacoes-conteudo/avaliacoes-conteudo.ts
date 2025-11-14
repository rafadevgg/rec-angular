// src/app/views/avaliacoes-conteudo/avaliacoes-conteudo.ts

import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReviewService } from '../../services/review-service';
import { ContentService } from '../../services/content-service';
import { Review } from '../../shared/models/Review';
import { Content } from '../../shared/models/Content';

/**
 * Componente que exibe avaliações e permite cadastrar novas
 */
@Component({
  selector: 'app-avaliacoes-conteudo',
  imports: [RouterLink, FormsModule],
  templateUrl: './avaliacoes-conteudo.html',
  styleUrl: './avaliacoes-conteudo.scss',
})
export class AvaliacoesConteudo implements OnInit {
  
  // Injeta os services necessários
  private reviewService = inject(ReviewService);
  private contentService = inject(ContentService);
  private route = inject(ActivatedRoute);
  
  // Armazena as avaliações existentes
  protected avaliacoes: Review[] = [];
  
  // Armazena o conteúdo que está sendo avaliado
  protected conteudo: Content | null = null;
  
  // Nova avaliação sendo criada
  protected novaAvaliacao = new Review();
  
  // Controla se está mostrando o formulário
  protected mostrarFormulario = false;

  /**
   * Método executado quando o componente é inicializado
   * Busca o conteúdo e suas avaliações
   */
  ngOnInit(): void {
    // Pega o ID da URL
    const id = this.route.snapshot.params['id'];
    
    // Salva o ID no objeto de nova avaliação
    this.novaAvaliacao.contentId = Number(id);
    
    // Busca informações do conteúdo
    this.contentService.buscarPorId(id).subscribe(
      response => {
        this.conteudo = response;
      }
    );
    
    // Busca as avaliações existentes
    this.carregarAvaliacoes(id);
  }

  /**
   * Carrega as avaliações de um conteúdo
   */
  carregarAvaliacoes(contentId: number) {
    this.reviewService.buscarPorConteudo(contentId).subscribe(
      response => {
        this.avaliacoes = response;
      }
    );
  }

  /**
   * Cadastra uma nova avaliação
   */
  salvarAvaliacao() {
    // Define a data atual
    this.novaAvaliacao.date = new Date().toISOString().split('T')[0];
    
    // Envia para a API
    this.reviewService.cadastrarAvaliacao(this.novaAvaliacao).subscribe(
      response => {
        // Mostra mensagem de sucesso
        alert('Avaliação cadastrada com sucesso!');
        
        // Recarrega as avaliações
        this.carregarAvaliacoes(this.novaAvaliacao.contentId);
        
        // Limpa o formulário
        this.novaAvaliacao = new Review();
        this.novaAvaliacao.contentId = Number(this.route.snapshot.params['id']);
        
        // Esconde o formulário
        this.mostrarFormulario = false;
      }
    );
  }

  /**
   * Gera array de estrelas para exibição visual da nota
   */
  getEstrelas(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

}