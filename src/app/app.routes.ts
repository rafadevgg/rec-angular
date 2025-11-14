// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { ListaConteudos } from './views/lista-conteudos/lista-conteudos';
import { DetalhesConteudo } from './views/detalhes-conteudo/detalhes-conteudo';
import { AvaliacoesConteudo } from './views/avaliacoes-conteudo/avaliacoes-conteudo';

/**
 * Configuração das rotas da aplicação
 * 
 * Rotas disponíveis:
 * - / : Lista todos os filmes/séries
 * - /categoria/:id : Lista filmes/séries de uma categoria específica
 * - /conteudo/:id : Detalhes de um filme/série
 * - /conteudo/:id/avaliacoes : Avaliações de um filme/série
 */
export const routes: Routes = [
    
    { path: '', component: ListaConteudos },
    { path: 'categoria/:id', component: ListaConteudos },
    { path: 'conteudo/:id', component: DetalhesConteudo },
    { path: 'conteudo/:id/avaliacoes', component: AvaliacoesConteudo }

];