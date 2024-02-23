import { Component, OnInit, ViewChild } from '@angular/core';
import { produckModel } from "../Produck.model";
import { ProduckService } from "../Produck.service";
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

// import DataTables from 'datatables.net';

@Component({
  selector: 'app-list-produck',
  templateUrl: './list-produck.component.html',
  styleUrls: ['./list-produck.component.css']
})
export class ListProduckComponent implements OnInit {

  formSearch: FormGroup;
  listProduck: produckModel[] = [];
  produkList$!: Observable<produckModel[]>;
  name: string = '';
  table: any;

  constructor(private produckService: ProduckService,
              private _formBuilder: FormBuilder) {
    this.formSearch = this._formBuilder.group({
      'nama': new FormControl(null),
    });

  }


  ngOnInit(): void {
    this.getList();
    this.produkList$ = this.produckService.findByName('');
  }

  getList() {
    this.produckService.list().subscribe({
      next: result => {
        this.listProduck = result;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Berhasil Mengambil data");
      }
    });
  }




  delete(id: number) {
    this.produckService.delete(id).subscribe({
      next: () => {
        console.log("Produk berhasil dihapus");

        this.getList();
      },
      error: err => {
        console.log(err);
      }
    });
  }


  findByName() {
    if (this.name.trim() !== '') {
      this.produckService.findByName(this.name).subscribe(
        (data: produckModel[]) => {
          this.listProduck = data;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.getList();
    }
  }

}
