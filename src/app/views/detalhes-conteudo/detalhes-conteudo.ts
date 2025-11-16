import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentService } from '../../services/content-service';
import { Content } from '../../shared/models/Content';

@Component({
  selector: 'app-detalhes-conteudo',
  imports: [RouterLink],
  templateUrl: './detalhes-conteudo.html',
  styleUrl: './detalhes-conteudo.scss',
})
export class DetalhesConteudo implements OnInit {

  private contentService = inject(ContentService);
  private route = inject(ActivatedRoute);

  protected conteudo: Content | null = null;

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];

    this.contentService.buscarPorId(id).subscribe(
      response => {
        this.conteudo = response;
      }
    );
  }

}