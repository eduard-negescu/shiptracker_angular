// store/country_store/country.effect.ts
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CountryService } from "../../service/country.service";
import { catchError, map, mergeMap, of } from "rxjs";
import * as CountryActions from "./country.action";

@Injectable()
export class CountryEffect {
  action$ = inject(Actions);

  constructor(private countryService: CountryService) {}

  loadCountries$ = createEffect(() =>
    this.action$.pipe(
      ofType(CountryActions.loadCountries),
      mergeMap(() =>
        this.countryService.getCountries().pipe(
          map((countries) => CountryActions.loadCountriesSuccess({ countries })),
          catchError((error) => of(CountryActions.loadCountriesFailure({ error: error.message })))
        )
      )
    )
  );

  addCountry$ = createEffect(() =>
    this.action$.pipe(
      ofType(CountryActions.addCountry),
      mergeMap((action) =>
        this.countryService.addCountry(action.country).pipe(
          map((country) => CountryActions.addCountrySuccess({ country })),
          catchError((error) => of(CountryActions.addCountryFailure({ error: error.message })))
        )
      )
    )
  );

  updateCountry$ = createEffect(() =>
    this.action$.pipe(
      ofType(CountryActions.updateCountry),
      mergeMap((action) =>
        this.countryService.updateCountry(action.country).pipe(
          map((country) => CountryActions.updateCountrySuccess({ country })),
          catchError((error) => of(CountryActions.updateCountryFailure({ error: error.message })))
        )
      )
    )
  );

  deleteCountry$ = createEffect(() =>
    this.action$.pipe(
      ofType(CountryActions.deleteCountry),
      mergeMap((action) =>
        this.countryService.deleteCountry(action.id).pipe(
          map(() => CountryActions.deleteCountrySuccess({ id: action.id })),
          catchError((error) => of(CountryActions.deleteCountryFailure({ error: error.message })))
        )
      )
    )
  );
}