// service/ship.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../store/ship_store/ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  private apiUrl = 'https://localhost:7167/api/Ships';

  constructor(private http: HttpClient) { }

  getShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(this.apiUrl);
  }

  addShip(ship: Omit<Ship, 'id'>): Observable<Ship> {
    return this.http.post<Ship>(this.apiUrl, ship);
  }

  updateShip(ship: Ship): Observable<Ship> {
    return this.http.put<Ship>(`${this.apiUrl}/${ship.id}`, ship);
  }

  deleteShip(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}/${id}`);
  }
}