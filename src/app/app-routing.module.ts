import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/characters/characters.component').then(m => m.CharactersComponent),
      },
      {
        path: 'character/:id',
        loadComponent: () => import('./pages/character/character.component').then(m => m.CharacterComponent),
      },
      {
        path: 'arena',
        loadComponent: () => import('./pages/arena/arena.component').then(m => m.ArenaComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
