import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() content: any;

  getContentType(): string {
    return this.content.type === 'movie' ? 'Filme' : 'Série';
  }
}