import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BoldLinkDirective } from './directives/bold-link.directive';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { PlanetComponent } from './planet/planet.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BoldLinkDirective,
    AboutComponent,
    LogoutComponent,
    HomeComponent,
    PersonComponent,
    PlanetComponent,
    SpeciesComponent,
    StarshipComponent,
    VehicleComponent,
    BackButtonComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesListComponent,
    StarshipsComponent,
    VehiclesComponent,
    PersonDetailsComponent,
    PlanetDetailsComponent,
    SpeciesDetailsComponent,
    StarshipDetailsComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
