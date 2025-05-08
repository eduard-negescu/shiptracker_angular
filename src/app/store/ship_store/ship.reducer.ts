import { createReducer, on } from "@ngrx/store";  
import { ShipState } from "./ship.model";  
import * as ShipActions from "./ship.action";  

export const initialState: ShipState = {  
  ships: [],  
  loading: false,  
  error: null
};  

export const shipReducer = createReducer(  
  initialState,  
  // Load
  on(ShipActions.loadShips, (state) => ({  
    ...state,  
    loading: true,  
    error: null
  })),  
  on(ShipActions.loadShipsSuccess, (state, { ships }) => ({  
    ...state,  
    ships,  
    loading: false,  
  })),
  on(ShipActions.loadShipsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Add
  on(ShipActions.addShip, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ShipActions.addShipSuccess, (state, { ship }) => ({
    ...state,
    ships: [...state.ships, ship],
    loading: false
  })),
  on(ShipActions.addShipFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Update
  on(ShipActions.updateShip, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ShipActions.updateShipSuccess, (state, { ship }) => ({
    ...state,
    ships: state.ships.map(s => s.id === ship.id ? ship : s),
    loading: false
  })),
  on(ShipActions.updateShipFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Delete
  on(ShipActions.deleteShip, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ShipActions.deleteShipSuccess, (state, { id }) => ({
    ...state,
    ships: state.ships.filter(s => s.id !== id),
    loading: false
  })),
  on(ShipActions.deleteShipFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);