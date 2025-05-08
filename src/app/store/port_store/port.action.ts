import { createAction, props } from "@ngrx/store";
import { Port } from "./port.model";

// Load Actions
export const loadPorts = createAction("[Ports] Load Ports");
export const loadPortsSuccess = createAction(
  "[Ports] Load Ports Success",
  props<{ ports: Port[] }>()
);
export const loadPortsFailure = createAction(
  "[Ports] Load Ports Failure",
  props<{ error: string }>()
);

// Add Actions
export const addPort = createAction(
  "[Ports] Add Port",
  props<{ port: Omit<Port, 'id'> }>()
);
export const addPortSuccess = createAction(
  "[Ports] Add Port Success",
  props<{ port: Port }>()
);
export const addPortFailure = createAction(
  "[Ports] Add Port Failure",
  props<{ error: string }>()
);

// Update Actions
export const updatePort = createAction(
  "[Ports] Update Port",
  props<{ port: Port }>()
);
export const updatePortSuccess = createAction(
  "[Ports] Update Port Success",
  props<{ port: Port }>()
);
export const updatePortFailure = createAction(
  "[Ports] Update Port Failure",
  props<{ error: string }>()
);

// Delete Actions
export const deletePort = createAction(
  "[Ports] Delete Port",
  props<{ id: number }>()
);
export const deletePortSuccess = createAction(
  "[Ports] Delete Port Success",
  props<{ id: number }>()
);
export const deletePortFailure = createAction(
  "[Ports] Delete Port Failure",
  props<{ error: string }>()
);