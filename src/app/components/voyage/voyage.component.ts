import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Voyage } from '../../store/voyage_store/voyage.model';
import { Port } from '../../store/port_store/port.model';
import { Ship } from '../../store/ship_store/ship.model';
import * as VoyageActions from '../../store/voyage_store/voyage.action';
import { selectVoyages, selectLoading, selectError } from '../../store/voyage_store/voyage.selector';
import { selectPorts } from '../../store/port_store/port.selector';
import { selectShips } from '../../store/ship_store/ship.selector';
import { loadPorts } from '../../store/port_store/port.action';
import { loadShips } from '../../store/ship_store/ship.action';

@Component({
  selector: 'app-voyage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class VoyageComponent {
  voyages$: Observable<Voyage[]>;
  ports$: Observable<Port[]>;
  ships$: Observable<Ship[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  newVoyage: Omit<Voyage, 'id'> = {
    name: '',
    voyageDate: new Date().toISOString().split('T')[0],
    voyageStart: new Date().toISOString().split('T')[0],
    voyageEnd: new Date().toISOString().split('T')[0],
    departurePortId: 0,
    arrivalPortId: 0,
    shipId: 0
  };

  editingVoyage: Voyage | null = null;
  editData = {
    name: '',
    voyageDate: '',
    voyageStart: '',
    voyageEnd: '',
    departurePortId: 0,
    arrivalPortId: 0,
    shipId: 0
  };

  constructor(private store: Store) {
    this.store.dispatch(VoyageActions.loadVoyages());
    this.store.dispatch(loadPorts());
    this.store.dispatch(loadShips());

    this.voyages$ = this.store.select(selectVoyages);
    this.ports$ = this.store.select(selectPorts);
    this.ships$ = this.store.select(selectShips);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  addVoyage() {
    if (this.validateVoyage(this.newVoyage)) {
      this.store.dispatch(VoyageActions.addVoyage({ voyage: this.newVoyage }));
      this.resetNewVoyageForm();
    }
  }

  startEdit(voyage: Voyage) {
    this.editingVoyage = voyage;
    this.editData = {
      name: voyage.name,
      voyageDate: voyage.voyageDate,
      voyageStart: voyage.voyageStart,
      voyageEnd: voyage.voyageEnd,
      departurePortId: voyage.departurePortId,
      arrivalPortId: voyage.arrivalPortId,
      shipId: voyage.shipId
    };
  }

  updateVoyage() {
    if (this.editingVoyage && this.validateVoyage(this.editData)) {
      const updatedVoyage = {
        ...this.editingVoyage,
        ...this.editData
      };
      this.store.dispatch(VoyageActions.updateVoyage({ voyage: updatedVoyage }));
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingVoyage = null;
    this.resetEditForm();
  }

  deleteVoyage(id: number) {
    if (confirm('Are you sure you want to delete this voyage?')) {
      this.store.dispatch(VoyageActions.deleteVoyage({ id }));
    }
  }

  private validateVoyage(voyage: any): boolean {
    return voyage.name.trim() &&
      voyage.departurePortId > 0 &&
      voyage.arrivalPortId > 0 &&
      voyage.shipId > 0 &&
      voyage.voyageDate &&
      voyage.voyageStart &&
      voyage.voyageEnd;
  }

  private resetNewVoyageForm() {
    this.newVoyage = {
      name: '',
      voyageDate: new Date().toISOString().split('T')[0],
      voyageStart: new Date().toISOString().split('T')[0],
      voyageEnd: new Date().toISOString().split('T')[0],
      departurePortId: 0,
      arrivalPortId: 0,
      shipId: 0
    };
  }

  private resetEditForm() {
    this.editData = {
      name: '',
      voyageDate: '',
      voyageStart: '',
      voyageEnd: '',
      departurePortId: 0,
      arrivalPortId: 0,
      shipId: 0
    };
  }
}