import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchoolWorkComponent } from './school-work/school-work.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SchoolNavComponent } from './school-work/school-nav/school-nav.component';
import { PortfolioNavComponent } from './portfolio/portfolio-nav/portfolio-nav.component';
import { PhasesComponent } from './school-work/phases/phases.component';
import { PhaseOneComponent } from './school-work/phases/phase-one/phase-one.component';
import { NavPhasesComponent } from './school-work/phases/nav-phases/nav-phases.component';
import { PhasesCardComponent } from './school-work/phases/phases-card/phases-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchoolWorkComponent,
    NavComponent,
    PortfolioComponent,
    SchoolNavComponent,
    PortfolioNavComponent,
    PhasesComponent,
    PhaseOneComponent,
    NavPhasesComponent,
    PhasesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
