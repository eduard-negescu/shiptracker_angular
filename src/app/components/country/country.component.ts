import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CountryActions from '../../store/country_store/country.action';
import { selectCountries, selectLoading, selectError } from '../../store/country_store/country.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Country } from '../../store/country_store/country.model';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  countries$: Observable<Country[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  
  newCountry: Omit<Country, 'id'> = { name: '' };
  editingCountry: Country | null = null;
  editedName = '';

  constructor(private store: Store) {
    this.store.dispatch(CountryActions.loadCountries());
    this.countries$ = this.store.select(selectCountries);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  addCountry() {
    if (this.newCountry.name.trim()) {
      this.store.dispatch(CountryActions.addCountry({ country: this.newCountry }));
      this.newCountry = { name: '' };
    }
  }

  startEdit(country: Country) {
    this.editingCountry = country;
    this.editedName = country.name;
  }

  updateCountry() {
    if (this.editingCountry && this.editedName.trim()) {
      const updatedCountry = {
        ...this.editingCountry,
        name: this.editedName
      };
      this.store.dispatch(CountryActions.updateCountry({ country: updatedCountry }));
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingCountry = null;
    this.editedName = '';
  }

  deleteCountry(id: number) {
    if (confirm('Are you sure you want to delete this country?')) {
      this.store.dispatch(CountryActions.deleteCountry({ id }));
    }
  }
}