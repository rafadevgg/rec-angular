import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConteudos } from './lista-conteudos';

describe('ListaConteudos', () => {
  let component: ListaConteudos;
  let fixture: ComponentFixture<ListaConteudos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaConteudos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaConteudos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
