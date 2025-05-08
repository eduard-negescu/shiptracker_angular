import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PortActions from '../../store/port_store/port.action';
import { selectPorts, selectLoading, selectError } from '../../store/port_store/port.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Port } from '../../store/port_store/port.model';
import { Country } from '../../store/country_store/country.model';
import { selectCountries } from '../../store/country_store/country.selector';
import { loadCountries } from '../../store/country_store/country.action';



@Component({
  selector: 'app-port',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {
  ports$: Observable<Port[]>;
  countries$: Observable<Country[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  
  newPort: Omit<Port, 'id'> = { name: '', countryId: 0 };
  editingPort: Port | null = null;
  editedName = '';
  editedCountryId = 0;

  constructor(private store: Store) {
    this.ports$ = this.store.select(selectPorts);
    this.countries$ = this.store.select(selectCountries);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit() {
    this.store.dispatch(PortActions.loadPorts());
    this.store.dispatch(loadCountries());
  }

  addPort() {
    if (this.newPort.name.trim() && this.newPort.countryId) {
      this.store.dispatch(PortActions.addPort({ port: this.newPort }));
      this.newPort = { name: '', countryId: 0 };
    }
  }

  startEdit(port: Port) {
    this.editingPort = port;
    this.editedName = port.name;
    this.editedCountryId = port.countryId;
  }

  updatePort() {
    if (this.editingPort && this.editedName.trim() && this.editedCountryId) {
      const updatedPort = {
        ...this.editingPort,
        name: this.editedName,
        countryId: this.editedCountryId
      };
      this.store.dispatch(PortActions.updatePort({ port: updatedPort }));
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingPort = null;
    this.editedName = '';
    this.editedCountryId = 0;
  }

  deletePort(id: number) {
    if (confirm('Are you sure you want to delete this port?')) {
      this.store.dispatch(PortActions.deletePort({ id }));
    }
  }
}