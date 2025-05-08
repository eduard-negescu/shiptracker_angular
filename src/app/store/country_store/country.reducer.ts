// store/country_store/country.reducer.ts
import { createReducer, on } from "@ngrx/store";  
import { Country } from "./country.model";  
import * as CountryActions from "./country.action";  

export interface CountryState {  
  countries: Country[];  
  loading: boolean;  
  error: string | null;
}  

export const initialState: CountryState = {  
  countries: [],  
  loading: false,  
  error: null
};  

export const countryReducer = createReducer(  
  initialState,  
  // Load
  on(CountryActions.loadCountries, (state) => ({  
    ...state,  
    loading: true,  
    error: null
  })),  
  on(CountryActions.loadCountriesSuccess, (state, { countries }) => ({  
    ...state,  
    countries,  
    loading: false,  
  })),
  on(CountryActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Add
  on(CountryActions.addCountry, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CountryActions.addCountrySuccess, (state, { country }) => ({
    ...state,
    countries: [...state.countries, country],
    loading: false
  })),
  on(CountryActions.addCountryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Update
  on(CountryActions.updateCountry, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CountryActions.updateCountrySuccess, (state, { country }) => ({
    ...state,
    countries: state.countries.map(c => c.id === country.id ? country : c),
    loading: false
  })),
  on(CountryActions.updateCountryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Delete
  on(CountryActions.deleteCountry, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CountryActions.deleteCountrySuccess, (state, { id }) => ({
    ...state,
    countries: state.countries.filter(c => c.id !== id),
    loading: false
  })),
  on(CountryActions.deleteCountryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);