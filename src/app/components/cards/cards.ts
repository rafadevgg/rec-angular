import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../../shared/models/Content';
import { ContentService } from '../../shared/services/content.service';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards implements OnInit {
  private contentService = inject(ContentService);

  contents: Content[] = [];
  selectedContent: Content | null = null;
  isModalOpen = false;

  ngOnInit() {
    this.loadContents();
  }

  loadContents() {
    this.contents = this.contentService.getContents();
  }

  openModal(content: Content) {
    this.selectedContent = content;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedContent = null;
    document.body.style.overflow = 'auto';
  }

  getRatingStars(rating: number): number[] {
    return Array(5)
      .fill(0)
      .map((_, i) => (i < Math.round(rating / 2) ? 1 : 0));
  }
}
