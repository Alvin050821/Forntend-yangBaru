import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {  produckModel } from "./Produck.model";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduckService {
  save(produk: produckModel) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<produckModel[]>(`${environment.baseUrl}Produk/findAll`);
  }

  findId(id: number) {
    return this.http.get<produckModel>(`${environment.baseUrl}Produk/findbyid/${id}`);
  }
  findByName(name: string): Observable<produckModel[]> {
    return this.http.get<produckModel[]>(`${environment.baseUrl}Produk/findbyname/${name}`);
  }

  Insert(value: produckModel) {
    return this.http.post(`${environment.baseUrl}Produk/save`, value, { observe: "response" });
  }


  update(value: produckModel) {
    return this.http.post(`${environment.baseUrl}Produk/Update/${value.id}`, value, { observe: "response" });
  }

  delete(id: number) {
    return this.http.delete(`${environment.baseUrl}Produk/Delete/${id}`, { observe: "response" });
  }
}
