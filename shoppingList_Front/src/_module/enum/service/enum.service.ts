//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region Model
import { Enum } from '@enum/model/enum.model';
//#endregion

// Api Info
import { envBusinessAPI } from '@env/environment';
const baseUrl = `${envBusinessAPI.apiUrl}/enum`;

@Injectable({ providedIn: 'root' })
export class EnumService {

  constructor(private http: HttpClient) { }

  /** Get Enum Names */
  getNames():Observable<Enum> {
    return this.http.get<Enum>(`${baseUrl}/names`);
  }

  /** For one enum, get values */
  getValuesOf(enumName: string|undefined) : Observable<Enum> {
    return this.http.get<Enum>(`${baseUrl}/values-of/${enumName}`);
  }
}
