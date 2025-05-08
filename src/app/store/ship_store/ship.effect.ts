// store/ship_store/ship.effect.ts
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ShipService } from "../../service/ship.service";
import { catchError, map, mergeMap, of } from "rxjs";
import * as ShipActions from "./ship.action";

@Injectable()
export class ShipEffect {
  action$ = inject(Actions);

  constructor(private shipService: ShipService) {}

  loadShips$ = createEffect(() =>
    this.action$.pipe(
      ofType(ShipActions.loadShips),
      mergeMap(() =>
        this.shipService.getShips().pipe(
          map((ships) => ShipActions.loadShipsSuccess({ ships })),
          catchError((error) => of(ShipActions.loadShipsFailure({ error: error.message })))
        )
      )
    )
  );

  addShip$ = createEffect(() =>
    this.action$.pipe(
      ofType(ShipActions.addShip),
      mergeMap((action) =>
        this.shipService.addShip(action.ship).pipe(
          map((ship) => ShipActions.addShipSuccess({ ship })),
          catchError((error) => of(ShipActions.addShipFailure({ error: error.message })))
        )
      )
    )
  );

  updateShip$ = createEffect(() =>
    this.action$.pipe(
      ofType(ShipActions.updateShip),
      mergeMap((action) =>
        this.shipService.updateShip(action.ship).pipe(
          map((ship) => ShipActions.updateShipSuccess({ ship })),
          catchError((error) => of(ShipActions.updateShipFailure({ error: error.message })))
        )
      )
    )
  );

  deleteShip$ = createEffect(() =>
    this.action$.pipe(
      ofType(ShipActions.deleteShip),
      mergeMap((action) =>
        this.shipService.deleteShip(action.id).pipe(
          map(() => ShipActions.deleteShipSuccess({ id: action.id })),
          catchError((error) => of(ShipActions.deleteShipFailure({ error: error.message })))
        )
      )
    )
  );
}