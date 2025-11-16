import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardContent } from '../../components/card-content/card-content';
import { ContentService } from '../../services/content-service';
import { Content } from '../../shared/models/Content';

@Component({
  selector: 'app-lista-conteudos',
  imports: [CardContent],
  templateUrl: './lista-conteudos.html',
  styleUrl: './lista-conteudos.scss',
})
export class ListaConteudos implements OnInit {

  private contentService = inject(ContentService);
  private route = inject(ActivatedRoute);

  protected conteudos: Content[] = [];

  protected titulo = 'Todos os Filmes e Séries';

  ngOnInit(): void {

    const idCategoria = this.route.snapshot.params['id'];

    if (idCategoria) {
      this.titulo = 'Filmes e Séries da Categoria';

      this.contentService.buscarPorCategoria(idCategoria).subscribe(
        response => {
          this.conteudos = response;
        }
      );
    } else {
      this.contentService.buscarTodos().subscribe(
        response => {
          this.conteudos = response;
        }
      );
    }
  }

}