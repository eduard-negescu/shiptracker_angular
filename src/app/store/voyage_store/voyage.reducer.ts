import { createReducer, on } from "@ngrx/store";
import { VoyageState } from "./voyage.model";
import * as VoyageActions from "./voyage.action";

export const initialState: VoyageState = {
    voyages: [],
    loading: false,
    error: null
};

export const voyageReducer = createReducer(
    initialState,
    // Load
    on(VoyageActions.loadVoyages, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(VoyageActions.loadVoyagesSuccess, (state, { voyages }) => ({
        ...state,
        voyages,
        loading: false,
    })),
    on(VoyageActions.loadVoyagesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // Add
    on(VoyageActions.addVoyage, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(VoyageActions.addVoyageSuccess, (state, { voyage }) => ({
        ...state,
        voyages: [...state.voyages, voyage],
        loading: false
    })),
    on(VoyageActions.addVoyageFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // Update
    on(VoyageActions.updateVoyage, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(VoyageActions.updateVoyageSuccess, (state, { voyage }) => ({
        ...state,
        voyages: state.voyages.map(v => v.id === voyage.id ? voyage : v),
        loading: false
    })),
    on(VoyageActions.updateVoyageFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // Delete
    on(VoyageActions.deleteVoyage, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(VoyageActions.deleteVoyageSuccess, (state, { id }) => ({
        ...state,
        voyages: state.voyages.filter(v => v.id !== id),
        loading: false
    })),
    on(VoyageActions.deleteVoyageFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);