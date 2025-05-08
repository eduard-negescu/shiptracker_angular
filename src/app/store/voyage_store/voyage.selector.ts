// store/voyage_store/voyage.selector.ts
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VoyageState } from "./voyage.model";

export const selectVoyageState = createFeatureSelector<VoyageState>('voyages');

export const selectVoyages = createSelector(
    selectVoyageState,
    (state: VoyageState) => state.voyages
);

export const selectLoading = createSelector(
    selectVoyageState,
    (state: VoyageState) => state.loading
);

export const selectError = createSelector(
    selectVoyageState,
    (state: VoyageState) => state.error
);