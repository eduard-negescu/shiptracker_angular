// components/ship/ship.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ship } from '../../store/ship_store/ship.model';
import * as ShipActions from '../../store/ship_store/ship.action';
import { selectShips, selectLoading, selectError } from '../../store/ship_store/ship.selector';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent {
  ships$: Observable<Ship[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  
  newShip: Omit<Ship, 'id'> = { name: '', maximumSpeed: 0 };
  editingShip: Ship | null = null;
  editedName = '';
  editedMaxSpeed = 0;

  constructor(private store: Store) {
    this.store.dispatch(ShipActions.loadShips());
    this.ships$ = this.store.select(selectShips);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  addShip() {
    if (this.newShip.name.trim() && this.newShip.maximumSpeed > 0) {
      this.store.dispatch(ShipActions.addShip({ ship: this.newShip }));
      this.newShip = { name: '', maximumSpeed: 0 };
    }
  }

  startEdit(ship: Ship) {
    this.editingShip = ship;
    this.editedName = ship.name;
    this.editedMaxSpeed = ship.maximumSpeed;
  }

  updateShip() {
    if (this.editingShip && this.editedName.trim() && this.editedMaxSpeed > 0) {
      const updatedShip = {
        ...this.editingShip,
        name: this.editedName,
        maximumSpeed: this.editedMaxSpeed
      };
      this.store.dispatch(ShipActions.updateShip({ ship: updatedShip }));
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingShip = null;
    this.editedName = '';
    this.editedMaxSpeed = 0;
  }

  deleteShip(id: number) {
    if (confirm('Are you sure you want to delete this ship?')) {
      this.store.dispatch(ShipActions.deleteShip({ id }));
    }
  }
}