import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../shared/models/Content';

@Component({
  selector: 'app-card-content',
  imports: [RouterLink],
  templateUrl: './card-content.html',
  styleUrl: './card-content.scss',
})
export class CardContent {
  
  @Input({ required: true }) content: Content = new Content();

}