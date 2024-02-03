import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicule } from './model/vehicule.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root', // Cela enregistre le service au niveau du module racine (AppModule)
})

export class CrudVehicule {
  private apiUrl = 'https://node-back-test-10sn20es6-valisoa411.vercel.app/api/vehicules';

  constructor(private http: HttpClient) {}

  createVehicule(vehiculeData: any): Observable<any> {
    return this.http.post(this.apiUrl, vehiculeData);
  }

  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(this.apiUrl);
  }

  getVehicule(id: string): Observable<Vehicule> {
    return this.http.get<Vehicule>(`${this.apiUrl}/${id}`);
  }

  updateVehicule(id: string, vehiculeData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, vehiculeData);
  }

  deleteVehicule(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
