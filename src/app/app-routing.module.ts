import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SchoolWorkComponent } from 'src/app/school-work/school-work.component';
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component';
import { PhasesComponent } from './school-work/phases/phases.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio/queens-college', component: SchoolWorkComponent},
  {path: 'portfolio/queens-college/phases', component: PhasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
