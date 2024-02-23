import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdusenService} from "../../produsen/produsen.service";
import {ProdusenModel} from "../../produsen/produsen.model";
import {ProdukModel} from "../produk.model";
import {ProdukService} from "../produk.service";
import {FormComponent} from "../../produsen/form/form.component";

@Component({
  selector: 'app-form-produk',
  templateUrl: './form-produk.component.html',
  styleUrls: ['./form-produk.component.css']
})
export class FormProdukComponent implements OnInit {

  menu: string = 'Tambah';
  formProduk!: FormGroup;
  formProdusen!: FormGroup;
  id!: number;

  listProdusen!: ProdusenModel[];

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private produkService: ProdukService,
              private produsenService: ProdusenService,
              private router: Router) {
    this.formProduk = formBuilder.group({
      'produsen': new FormControl(null),
      'nama': new FormControl(null),
      'jenis': new FormControl(null),
      'alamat': new FormControl(null),
      'berat': new FormControl(null)
    })
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      this.id = route['id'];
    })
    this.getListProdusen();
    if (this.id) {
      this.findId();
      this.menu = "Edit";
    }
  }

  getListProdusen() {
    this.produsenService.list().subscribe(response => {
      this.listProdusen = response;
    })
  }

  findId() {
    this.produkService.findId(this.id).subscribe(response => {
      this.formProduk.patchValue(response);
      this.formProduk.controls['produsen'].setValue(response.produsen.id);
    })
  }

  save() {
    let produk: ProdukModel = this.formProduk.value;
    produk.produsen = new ProdusenModel();
    produk.produsen.id = this.formProduk.controls['produsen'].value;
    console.log(produk);
    if (this.id) {
      produk.id = this.id;
      this.produkService.update(produk).subscribe(response => {
        if (response.status === 200) {
          this.router.navigate(['/', 'produk']);
        } else {
          alert("Gagal Mengedit!")
          console.log(response.body);
        }
      })
    } else {
      this.produkService.insert(produk).subscribe(response => {
        if (response.status === 200) {
          this.router.navigate(['/', 'produk']);
        } else {
          alert("Gagal Menyimpan!")
          console.log(response.body);
        }
      })
    }
  }
}
