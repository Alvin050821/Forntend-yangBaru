import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ProdusenModel} from "./produsen.model";

@Injectable({
  providedIn: 'root'
})
export class ProdusenService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<ProdusenModel[]>(`${environment.baseUrl}/produsen`);
  }

  findId(id: number) {
    return this.http.get<ProdusenModel>(`${environment.baseUrl}/produsen/${id}`);
  }

  insert(value: ProdusenModel) {
    return this.http.post(`${environment.baseUrl}/produsen/save`, value, {observe: "response"});
  }

  update(value: ProdusenModel) {
    return this.http.put(`${environment.baseUrl}/produsen/update`, value, {observe: "response"});
  }

  delete(id: number) {
    return this.http.delete(`${environment.baseUrl}/produsen/delete/${id}`, {observe: "response"});
  }
}
