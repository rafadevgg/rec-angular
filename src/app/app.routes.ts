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
    // Rota inicial - mostra todos os conteúdos
    { path: '', component: ListaConteudos },
    
    // Rota para listar conteúdos de uma categoria específica
    // :id é um parâmetro dinâmico (ex: /categoria/1)
    { path: 'categoria/:id', component: ListaConteudos },
    
    // Rota para ver detalhes de um conteúdo específico
    { path: 'conteudo/:id', component: DetalhesConteudo },
    
    // Rota para ver/adicionar avaliações de um conteúdo
    { path: 'conteudo/:id/avaliacoes', component: AvaliacoesConteudo }
];