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
import { NavigatorComponent } from './browser/navigator/navigator.component';
import { PhaseThreeComponent } from 'src/app/school-work/phases/phase-three/phase-three.component';
import { PhaseFourComponent } from 'src/app/school-work/phases/phase-four/phase-four.component';
import { PhaseFiveComponent } from 'src/app/school-work/phases/phase-five/phase-five.component';
import { DummyPageOneComponent } from './school-work/dummy-page-one/dummy-page-one.component';
import { DummyPageTwoComponent } from './school-work/dummy-page-two/dummy-page-two.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio/queens-college', component: SchoolWorkComponent},
  {path: 'portfolio/queens-college/phases', component: PhasesComponent},
  {path: 'portfolio/queens-college/phases/1', component: PhaseOneComponent},
  {path: 'portfolio/queens-college/phases/3', component: PhaseThreeComponent},
  {path: 'portfolio/queens-college/phases/4', component: PhaseFourComponent},
  {path: 'portfolio/queens-college/phases/5', component: PhaseFiveComponent},
  {path: 'portfolio/queens-college/admin', component: AdminComponent},
  {path: 'portfolio/queens-college/phases/5/dummy-page-one', component: DummyPageOneComponent},
  {path: 'portfolio/queens-college/phases/5/dummy-page-two', component: DummyPageTwoComponent},
  {path: 'browser/queens-college/browser', component: BrowserComponent},
  {path: 'browser/queens-college/browser/navigator-info', component: NavigatorComponent},
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
