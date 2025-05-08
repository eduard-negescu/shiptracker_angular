// store/port_store/port.selector.ts
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PortState } from "./port.model";

export const selectPortState = createFeatureSelector<PortState>('ports');

export const selectPorts = createSelector(
  selectPortState,
  (state: PortState) => state.ports
);

export const selectLoading = createSelector(
  selectPortState,
  (state: PortState) => state.loading
);

export const selectError = createSelector(
  selectPortState,
  (state: PortState) => state.error
);