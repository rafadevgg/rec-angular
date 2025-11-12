import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'content/:id',
    loadComponent: () => import('./pages/content-detail/content-detail.component').then(m => m.ContentDetailComponent)
  },
  {
    path: 'categories',
    loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent)
  },
  {
    path: 'category/:id',
    loadComponent: () => import('./pages/category-detail/category-detail.component').then(m => m.CategoryDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];