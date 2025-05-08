import { createAction, props } from "@ngrx/store";
import { Ship } from "./ship.model";

// Load Actions
export const loadShips = createAction("[Ships] Load Ships");
export const loadShipsSuccess = createAction(
  "[Ships] Load Ships Success",
  props<{ ships: Ship[] }>()
);
export const loadShipsFailure = createAction(
  "[Ships] Load Ships Failure",
  props<{ error: string }>()
);

// Add Actions
export const addShip = createAction(
  "[Ships] Add Ship",
  props<{ ship: Omit<Ship, 'id'> }>()
);
export const addShipSuccess = createAction(
  "[Ships] Add Ship Success",
  props<{ ship: Ship }>()
);
export const addShipFailure = createAction(
  "[Ships] Add Ship Failure",
  props<{ error: string }>()
);

// Update Actions
export const updateShip = createAction(
  "[Ships] Update Ship",
  props<{ ship: Ship }>()
);
export const updateShipSuccess = createAction(
  "[Ships] Update Ship Success",
  props<{ ship: Ship }>()
);
export const updateShipFailure = createAction(
  "[Ships] Update Ship Failure",
  props<{ error: string }>()
);

// Delete Actions
export const deleteShip = createAction(
  "[Ships] Delete Ship",
  props<{ id: number }>()
);
export const deleteShipSuccess = createAction(
  "[Ships] Delete Ship Success",
  props<{ id: number }>()
);
export const deleteShipFailure = createAction(
  "[Ships] Delete Ship Failure",
  props<{ error: string }>()
);