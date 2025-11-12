import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent {
  @Input() reviews: Review[] = [];

  getFilledStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0).map((_, i) => i);
  }
}