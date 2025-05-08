import { createAction, props } from "@ngrx/store";
import { Country } from "./country.model";

// Load Actions
export const loadCountries = createAction("[Countries] Load Countries");
export const loadCountriesSuccess = createAction(
  "[Countries] Load Countries Success",
  props<{ countries: Country[] }>()
);
export const loadCountriesFailure = createAction(
  "[Countries] Load Countries Failure",
  props<{ error: string }>()
);

// Add Actions
export const addCountry = createAction(
  "[Countries] Add Country",
  props<{ country: Omit<Country, 'id'> }>()
);
export const addCountrySuccess = createAction(
  "[Countries] Add Country Success",
  props<{ country: Country }>()
);
export const addCountryFailure = createAction(
  "[Countries] Add Country Failure",
  props<{ error: string }>()
);

// Update Actions
export const updateCountry = createAction(
  "[Countries] Update Country",
  props<{ country: Country }>()
);
export const updateCountrySuccess = createAction(
  "[Countries] Update Country Success",
  props<{ country: Country }>()
);
export const updateCountryFailure = createAction(
  "[Countries] Update Country Failure",
  props<{ error: string }>()
);

// Delete Actions
export const deleteCountry = createAction(
  "[Countries] Delete Country",
  props<{ id: number }>()
);
export const deleteCountrySuccess = createAction(
  "[Countries] Delete Country Success",
  props<{ id: number }>()
);
export const deleteCountryFailure = createAction(
  "[Countries] Delete Country Failure",
  props<{ error: string }>()
);