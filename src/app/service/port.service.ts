import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Port } from '../store/port_store/port.model';
import { API_URL } from './api';

@Injectable({
  providedIn: 'root'
})
export class PortService {
  private apiUrl = `${API_URL}/Ports`;

  constructor(private http: HttpClient) { }

  getPorts(): Observable<Port[]> {
    return this.http.get<Port[]>(this.apiUrl);
  }

  addPort(port: Omit<Port, 'id'>): Observable<Port> {
    return this.http.post<Port>(this.apiUrl, port);
  }

  updatePort(port: Port): Observable<Port> {
    return this.http.put<Port>(`${this.apiUrl}/${port.id}`, port);
  }

  deletePort(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}/${id}`);
  }
}