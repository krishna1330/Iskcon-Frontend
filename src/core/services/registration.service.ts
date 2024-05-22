import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegistration } from '../interfaces/registration';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private _http: HttpClient) {}
  private baseUrl = 'https://localhost:44388/api/Registration/';
  NewRegistration(payload: IRegistration): Observable<IRegistration> {
    console.log(payload);
    return this._http.post<IRegistration>(this.baseUrl + 'NewRegistration', payload);
  }
}
