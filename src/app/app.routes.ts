import { Routes } from '@angular/router';
import { ListaConteudos } from './views/lista-conteudos/lista-conteudos';
import { DetalhesConteudo } from './views/detalhes-conteudo/detalhes-conteudo';
import { AvaliacoesConteudo } from './views/avaliacoes-conteudo/avaliacoes-conteudo';

export const routes: Routes = [

    { path: '', component: ListaConteudos },
    { path: 'categoria/:id', component: ListaConteudos },
    { path: 'conteudo/:id', component: DetalhesConteudo },
    { path: 'conteudo/:id/avaliacoes', component: AvaliacoesConteudo }

];