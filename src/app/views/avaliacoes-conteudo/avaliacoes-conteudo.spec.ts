import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesConteudo } from './avaliacoes-conteudo';

describe('AvaliacoesConteudo', () => {
  let component: AvaliacoesConteudo;
  let fixture: ComponentFixture<AvaliacoesConteudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacoesConteudo]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesConteudo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
