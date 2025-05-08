// store/voyage_store/voyage.action.ts
import { createAction, props } from "@ngrx/store";
import { Voyage } from "./voyage.model";

// Load Actions
export const loadVoyages = createAction("[Voyages] Load Voyages");
export const loadVoyagesSuccess = createAction(
  "[Voyages] Load Voyages Success",
  props<{ voyages: Voyage[] }>()
);
export const loadVoyagesFailure = createAction(
  "[Voyages] Load Voyages Failure",
  props<{ error: string }>()
);

// Add Actions
export const addVoyage = createAction(
  "[Voyages] Add Voyage",
  props<{ voyage: Omit<Voyage, 'id'> }>()
);
export const addVoyageSuccess = createAction(
  "[Voyages] Add Voyage Success",
  props<{ voyage: Voyage }>()
);
export const addVoyageFailure = createAction(
  "[Voyages] Add Voyage Failure",
  props<{ error: string }>()
);

// Update Actions
export const updateVoyage = createAction(
  "[Voyages] Update Voyage",
  props<{ voyage: Voyage }>()
);
export const updateVoyageSuccess = createAction(
  "[Voyages] Update Voyage Success",
  props<{ voyage: Voyage }>()
);
export const updateVoyageFailure = createAction(
  "[Voyages] Update Voyage Failure",
  props<{ error: string }>()
);

// Delete Actions
export const deleteVoyage = createAction(
  "[Voyages] Delete Voyage",
  props<{ id: number }>()
);
export const deleteVoyageSuccess = createAction(
  "[Voyages] Delete Voyage Success",
  props<{ id: number }>()
);
export const deleteVoyageFailure = createAction(
  "[Voyages] Delete Voyage Failure",
  props<{ error: string }>()
);