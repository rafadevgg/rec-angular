import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReviewService } from '../../services/review-service';
import { ContentService } from '../../services/content-service';
import { Review } from '../../shared/models/Review';
import { Content } from '../../shared/models/Content';

@Component({
  selector: 'app-avaliacoes-conteudo',
  imports: [RouterLink, FormsModule],
  templateUrl: './avaliacoes-conteudo.html',
  styleUrl: './avaliacoes-conteudo.scss',
})
export class AvaliacoesConteudo implements OnInit {

  private reviewService = inject(ReviewService);
  private contentService = inject(ContentService);
  private route = inject(ActivatedRoute);

  protected avaliacoes: Review[] = [];
  protected conteudo: Content | null = null;
  protected novaAvaliacao = new Review();
  protected mostrarFormulario = false;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.novaAvaliacao.contentId = id;

    this.contentService.buscarPorId(id).subscribe(
      response => {
        this.conteudo = response;
      }
    );

    this.carregarAvaliacoes(id);
  }

  carregarAvaliacoes(contentId: string) {
    this.reviewService.buscarPorConteudo(contentId).subscribe(
      (response: any[]) => {
        this.avaliacoes = response.map(r => {
          const review = new Review();
          review.authorAvatar = r.authorAvatar ?? review.authorAvatar;
          review.id = r.id ?? review.id;
          review.contentId = r.contentId ?? review.contentId;
          review.authorName = r.authorName ?? review.authorName;
          review.rating = r.rating ?? review.rating;
          review.title = r.title ?? review.title;
          review.comment = r.comment ?? review.comment;
          review.author = r.author ?? r.authorName ?? '';
          return review;
        });
      }
    );
  }

  salvarAvaliacao() {
    this.reviewService.cadastrarAvaliacao(this.novaAvaliacao).subscribe(
      response => {
        alert('Avaliação cadastrada com sucesso!');

        this.carregarAvaliacoes(this.novaAvaliacao.contentId);

        this.novaAvaliacao = new Review();
        this.novaAvaliacao.contentId = this.route.snapshot.params['id'];

        this.mostrarFormulario = false;
      }
    );
  }

  getEstrelas(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

}