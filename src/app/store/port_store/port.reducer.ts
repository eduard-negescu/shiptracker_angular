import { createReducer, on } from "@ngrx/store";  
import { PortState } from "./port.model";  
import * as PortActions from "./port.action";  

export const initialState: PortState = {  
  ports: [],  
  loading: false,  
  error: null
};  

export const portReducer = createReducer(  
  initialState,  
  // Load
  on(PortActions.loadPorts, (state) => ({  
    ...state,  
    loading: true,  
    error: null
  })),  
  on(PortActions.loadPortsSuccess, (state, { ports }) => ({  
    ...state,  
    ports,  
    loading: false,  
  })),
  on(PortActions.loadPortsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Add
  on(PortActions.addPort, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(PortActions.addPortSuccess, (state, { port }) => ({
    ...state,
    ports: [...state.ports, port],
    loading: false
  })),
  on(PortActions.addPortFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Update
  on(PortActions.updatePort, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(PortActions.updatePortSuccess, (state, { port }) => ({
    ...state,
    ports: state.ports.map(p => p.id === port.id ? port : p),
    loading: false
  })),
  on(PortActions.updatePortFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Delete
  on(PortActions.deletePort, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(PortActions.deletePortSuccess, (state, { id }) => ({
    ...state,
    ports: state.ports.filter(p => p.id !== id),
    loading: false
  })),
  on(PortActions.deletePortFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);