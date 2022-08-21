import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';

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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'people/:id', component: PersonDetailsComponent },

      { path: 'planets', component: PlanetsComponent },
      { path: 'planets/:id', component: PlanetDetailsComponent },

      { path: 'species', component: SpeciesListComponent },
      { path: 'species/:id', component: SpeciesDetailsComponent },

      { path: 'starships', component: StarshipsComponent },
      { path: 'starships/:id', component: StarshipDetailsComponent },

      { path: 'vehicles', component: VehiclesComponent },
      { path: 'vehicles/:id', component: VehicleDetailsComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
