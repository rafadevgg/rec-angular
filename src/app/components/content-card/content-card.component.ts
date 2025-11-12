import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content!: Content;

  getContentType(): string {
    return this.content.type === 'movie' ? 'Filme' : 'Série';
  }
}