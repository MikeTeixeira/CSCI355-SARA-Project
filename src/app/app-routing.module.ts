import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SchoolWorkComponent } from 'src/app/school-work/school-work.component';
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component';
import { PhasesComponent } from './school-work/phases/phases.component';
import { PhaseOneComponent } from './school-work/phases/phase-one/phase-one.component';
import { BrowserComponent } from 'src/app/browser/browser.component';
import { WindowComponent } from 'src/app/browser/window/window.component';
import { ScreenComponent } from './browser/screen/screen.component';
import { LocationComponent } from 'src/app/browser/location/location.component';
import { GeolocationComponent } from 'src/app/browser/geolocation/geolocation.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopersComponent } from 'src/app/developers/developers.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio/queens-college', component: SchoolWorkComponent},
  {path: 'portfolio/queens-college/phases', component: PhasesComponent},
  {path: 'portfolio/queens-college/phases/1', component: PhaseOneComponent},
  {path: 'browser/queens-college/browser', component: BrowserComponent},
  {path: 'browser/queens-college/browser/window-info', component: WindowComponent},
  {path: 'browser/queens-college/browser/screen-info', component: ScreenComponent},
  {path: 'browser/queens-college/browser/location-info', component: LocationComponent},
  {path: 'browser/queens-college/browser/geolocation', component: GeolocationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about-me', component: DevelopersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
