import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionFrontEndService {
  readonly inspectionApiUrl = "https://localhost:7251/api";
  constructor(private http: HttpClient) { }

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/inspection');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionApiUrl + '/inspection', data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/inspection/${id}`, data);
  }

  deleteInspection(id: number | string, data: any) {
    return this.http.delete(this.inspectionApiUrl + `/inspection/${id}`);
  }

  //inspection type
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/inspectiontypes');
  }

  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionApiUrl + '/inspectiontypes', data);
  }

  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/inspectiontypes/${id}`, data);
  }

  deleteInspectionTypes(id: number | string, data: any) {
    return this.http.delete(this.inspectionApiUrl + `/inspectiontypes/${id}`);
  }

  //status
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionApiUrl + '/status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/status/${id}`, data);
  }

  deleteStatus(id: number | string, data: any) {
    return this.http.delete(this.inspectionApiUrl + `/status/${id}`);
  }
}
