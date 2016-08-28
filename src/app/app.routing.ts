import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { heroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail';
const appRoutes: Routes = [
  {
    path: 'heroes',
    component: heroesComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent 
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
      path:'detail/:id',
      component: HeroDetailComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);