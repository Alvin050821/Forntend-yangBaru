import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { produckModel } from "../Produck.model";
import { ProduckService } from '../Produck.service';

@Component({
  selector: 'app-form-produck',
  templateUrl: './form-produck.component.html',
  styleUrls: ['./form-produck.component.css']
})
export class FormProduckComponent implements OnInit {
  menu: string = 'Tambah';
  formProduck!: FormGroup;
  id!: number;
  showMessage: boolean = false;
  message: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private produckService: ProduckService,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // Menggunakan '+' untuk mengonversi string ke number
      if (this.id) {
        this.findId();
        this.menu = "Edit";
      }
    });

    // Inisialisasi form menggunakan FormBuilder
    this.formProduck = this.formBuilder.group({
      'namaProduk': new FormControl(null),
      'jumlahProduk': new FormControl(null),
      'hargaProduk': new FormControl(null),
      'warna': new FormControl(null),
      'waktu': new FormControl(null),
    });
  }

  findId() {
    this.produckService.findId(this.id).subscribe(response => {
      this.formProduck.patchValue(response);
    });
  }

  save() {
    let produk: produckModel = this.formProduck.value;

    produk.waktu = new Date();

    this.produckService.Insert(produk).subscribe({
      next: () => {
        console.log("Produk berhasil disimpan");
        this.showMessage = true;
        this.message = 'Produk berhasil disimpan';

      },
      error: (err: any) => {
        console.error("Gagal menyimpan produk:", err);
        this.showMessage = true;
        this.message = 'Gagal menyimpan produk: ' + err.message;
      }
    });
  }
}
