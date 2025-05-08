import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, CountryPortsData } from '../store/country_store/country.model';
import { API_URL } from './api';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = `${API_URL}/Countries`;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  addCountry(country: Omit<Country, 'id'>): Observable<Country> {
    return this.http.post<Country>(this.apiUrl, country);
  }

  updateCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/${country.id}`, country);
  }

  deleteCountry(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}/${id}`);
  }

  getCountriesByPortCount(): Observable<CountryPortsData[]> {
    return this.http.get<CountryPortsData[]>(`${this.apiUrl}/get_by_num_ports`);
  }
}