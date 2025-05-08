import { Routes } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { PortComponent } from './components/port/port.component';
import { ShipComponent } from './components/ship/ship.component';
import { VoyageComponent } from './components/voyage/voyage.component';
import { CountryPortsChartComponent } from './components/country-ports-chart/country-ports-chart.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'countries', component: CountryComponent },
    { path: 'ports', component: PortComponent },
    { path: 'ships', component: ShipComponent },
    { path: 'voyages', component: VoyageComponent },
    { path: 'charts', component: CountryPortsChartComponent }
];
