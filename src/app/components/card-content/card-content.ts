// src/app/components/card-content/card-content.ts

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../shared/models/Content';

/**
 * Componente reutilizável que exibe um card com informações de um filme/série
 * 
 * Como usar:
 * <app-card-content [content]="meuFilme" />
 */
@Component({
  selector: 'app-card-content',
  imports: [RouterLink],
  templateUrl: './card-content.html',
  styleUrl: './card-content.scss',
})
export class CardContent {
  
  /**
   * Propriedade de entrada (input) que recebe o conteúdo a ser exibido
   * @required - é obrigatório passar um conteúdo para o componente
   */
  @Input({ required: true }) content: Content = new Content();

}