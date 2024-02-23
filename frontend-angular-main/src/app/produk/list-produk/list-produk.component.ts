import { Component, OnInit } from '@angular/core';
import {ProdusenModel} from "../../produsen/produsen.model";
import {ProdusenService} from "../../produsen/produsen.service";
import {ProdukModel} from "../produk.model";
import {ProdukService} from "../produk.service";

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.component.html',
  styleUrls: ['./list-produk.component.css']
})
export class ListProdukComponent implements OnInit {

  listProduk!: ProdukModel[];

  constructor(private produkService: ProdukService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.produkService.list().subscribe({
        next: result => {
          this.listProduk= result;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log("Berhasil Mengambil data");
        }
      }
    )
  }

  delete(i: number) {
    console.log(i);
  }
}
