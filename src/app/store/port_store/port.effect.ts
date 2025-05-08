import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PortService } from "../../service/port.service";
import { catchError, map, mergeMap, of } from "rxjs";
import * as PortActions from "./port.action";

@Injectable()
export class PortEffect {
  action$ = inject(Actions);

  constructor(private portService: PortService) { }

  loadPorts$ = createEffect(() =>
    this.action$.pipe(
      ofType(PortActions.loadPorts),
      mergeMap(() =>
        this.portService.getPorts().pipe(
          map((ports) => PortActions.loadPortsSuccess({ ports })),
          catchError((error) => of(PortActions.loadPortsFailure({ error: error.message })))
        )
      )
    )
  );

  addPort$ = createEffect(() =>
    this.action$.pipe(
      ofType(PortActions.addPort),
      mergeMap((action) =>
        this.portService.addPort(action.port).pipe(
          map((port) => PortActions.addPortSuccess({ port })),
          catchError((error) => of(PortActions.addPortFailure({ error: error.message })))
        )
      )
    )
  );

  updatePort$ = createEffect(() =>
    this.action$.pipe(
      ofType(PortActions.updatePort),
      mergeMap((action) =>
        this.portService.updatePort(action.port).pipe(
          map((port) => PortActions.updatePortSuccess({ port })),
          catchError((error) => of(PortActions.updatePortFailure({ error: error.message })))
        )
      )
    )
  );

  deletePort$ = createEffect(() =>
    this.action$.pipe(
      ofType(PortActions.deletePort),
      mergeMap((action) =>
        this.portService.deletePort(action.id).pipe(
          map(() => PortActions.deletePortSuccess({ id: action.id })),
          catchError((error) => of(PortActions.deletePortFailure({ error: error.message })))
        )
      )
    )
  );
}