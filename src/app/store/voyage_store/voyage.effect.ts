import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VoyageService } from "../../service/voyage.service";
import { catchError, map, mergeMap, of } from "rxjs";
import * as VoyageActions from "./voyage.action";

@Injectable()
export class VoyageEffect {
    action$ = inject(Actions);

    constructor(private voyageService: VoyageService) { }

    loadVoyages$ = createEffect(() =>
        this.action$.pipe(
            ofType(VoyageActions.loadVoyages),
            mergeMap(() =>
                this.voyageService.getVoyages().pipe(
                    map((voyages) => VoyageActions.loadVoyagesSuccess({ voyages })),
                    catchError((error) => of(VoyageActions.loadVoyagesFailure({ error: error.message })))
                )
            )
        )
    );

    addVoyage$ = createEffect(() =>
        this.action$.pipe(
            ofType(VoyageActions.addVoyage),
            mergeMap((action) =>
                this.voyageService.addVoyage(action.voyage).pipe(
                    map((voyage) => VoyageActions.addVoyageSuccess({ voyage })),
                    catchError((error) => of(VoyageActions.addVoyageFailure({ error: error.message })))
                )
            )
        )
    );

    updateVoyage$ = createEffect(() =>
        this.action$.pipe(
            ofType(VoyageActions.updateVoyage),
            mergeMap((action) =>
                this.voyageService.updateVoyage(action.voyage).pipe(
                    map((voyage) => VoyageActions.updateVoyageSuccess({ voyage })),
                    catchError((error) => of(VoyageActions.updateVoyageFailure({ error: error.message })))
                )
            )
        )
    );

    deleteVoyage$ = createEffect(() =>
        this.action$.pipe(
            ofType(VoyageActions.deleteVoyage),
            mergeMap((action) =>
                this.voyageService.deleteVoyage(action.id).pipe(
                    map(() => VoyageActions.deleteVoyageSuccess({ id: action.id })),
                    catchError((error) => of(VoyageActions.deleteVoyageFailure({ error: error.message })))
                )
            )
        )
    );
}