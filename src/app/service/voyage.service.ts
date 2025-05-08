import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voyage } from '../store/voyage_store/voyage.model';
import { API_URL } from './api';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private apiUrl = `${API_URL}/Voyages`;

  constructor(private http: HttpClient) { }

  getVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.apiUrl);
  }

  addVoyage(voyage: Omit<Voyage, 'id'>): Observable<Voyage> {
    return this.http.post<Voyage>(this.apiUrl, voyage);
  }

  updateVoyage(voyage: Voyage): Observable<Voyage> {
    return this.http.put<Voyage>(`${this.apiUrl}/${voyage.id}`, voyage);
  }

  deleteVoyage(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}/${id}`);
  }
}