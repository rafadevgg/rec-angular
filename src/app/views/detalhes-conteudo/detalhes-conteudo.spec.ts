import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesConteudo } from './detalhes-conteudo';

describe('DetalhesConteudo', () => {
  let component: DetalhesConteudo;
  let fixture: ComponentFixture<DetalhesConteudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesConteudo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesConteudo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
