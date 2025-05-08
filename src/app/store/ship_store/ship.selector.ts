// store/ship_store/ship.selector.ts
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShipState } from "./ship.model";

export const selectShipState = createFeatureSelector<ShipState>('ships');

export const selectShips = createSelector(
  selectShipState,
  (state: ShipState) => state.ships
);

export const selectLoading = createSelector(
  selectShipState,
  (state: ShipState) => state.loading
);

export const selectError = createSelector(
  selectShipState,
  (state: ShipState) => state.error
);