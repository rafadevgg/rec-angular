import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { ContentDetailComponent } from './pages/content-detail/content-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ContentDetailComponent,
    HeaderComponent,
    FooterComponent,
    ContentCardComponent,
    CategoryCardComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }