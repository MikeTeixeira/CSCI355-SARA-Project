import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FileSelectDirective} from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
import { PhaseResultComponent } from './school-work/phases/phase-result/phase-result.component';
import { BrowserComponent } from './browser/browser.component';
import { WindowComponent } from './browser/window/window.component';
import { ScreenComponent } from './browser/screen/screen.component';
import { LocationComponent } from './browser/location/location.component';
import { GeolocationComponent } from './browser/geolocation/geolocation.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopersComponent } from './developers/developers.component';
import { NavigatorComponent } from './browser/navigator/navigator.component';
import { PhaseThreeComponent } from './school-work/phases/phase-three/phase-three.component';
import { PhaseThreeResultsComponent } from './school-work/phases/phase-three/phase-three-results/phase-three-results.component';
import { SavedResultsComponent } from './school-work/phases/saved-results/saved-results.component';
import { DropdownModalComponent } from './accessory-comp/dropdown-modal/dropdown-modal.component';
import { PhaseFourComponent } from './school-work/phases/phase-four/phase-four.component';
import { PhaseFiveComponent } from './school-work/phases/phase-five/phase-five.component';
import { DummyPageOneComponent } from './school-work/dummy-page-one/dummy-page-one.component';
import { DummyPageTwoComponent } from './school-work/dummy-page-two/dummy-page-two.component';

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
    PhasesCardComponent,
    PhaseResultComponent,
    BrowserComponent,
    WindowComponent,
    ScreenComponent,
    LocationComponent,
    GeolocationComponent,
    ContactComponent,
    DevelopersComponent,
    NavigatorComponent,
    PhaseThreeComponent,
    PhaseThreeResultsComponent,
    FileSelectDirective,
    SavedResultsComponent,
    DropdownModalComponent,
    PhaseFourComponent,
    PhaseFiveComponent,
    DummyPageOneComponent,
    DummyPageTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
