import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProdukModel} from "./produk.model";

@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<ProdukModel[]>(`${environment.baseUrl}/produk`);
  }

  findId(id: number) {
    return this.http.get<ProdukModel>(`${environment.baseUrl}/produk/${id}`);
  }

  insert(value: ProdukModel) {
    return this.http.post(`${environment.baseUrl}/produk/save`, value, {observe: "response"});
  }

  update(value: ProdukModel) {
    return this.http.put(`${environment.baseUrl}/produk/update`, value, {observe: "response"});
  }

  delete(id: number) {
    return this.http.delete(`${environment.baseUrl}/produk/delete/${id}`, {observe: "response"});
  }
}
