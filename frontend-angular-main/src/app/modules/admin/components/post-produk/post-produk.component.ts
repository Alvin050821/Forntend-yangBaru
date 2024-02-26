import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-produk',
  templateUrl: './post-produk.component.html',
  styleUrls: ['./post-produk.component.css']
})
export class PostProdukComponent implements OnInit {

  isSpinning: boolean = false;
  produkForm: FormGroup;
  isAdminLoggedIn: boolean = true;

  constructor() {
    this.produkForm = new FormGroup({
      namaProduk: new FormControl(''),
      tanggalProduk: new FormControl(''),
      jumlahProduk: new FormControl(''),
      hargaProduk: new FormControl(''),
      warna: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    // Logika untuk menyimpan data produk
    console.log(this.produkForm.value);
  }

  onFileSelected(event: any): void {
    // Logika untuk menangani pemilihan file
    console.log(event.target.files[0]);
  }

  logout() {
    // Logika logout Anda di sini
    console.log('Logout berhasil');
  }
}
