import {Component, OnInit} from '@angular/core';
import {ProdusenService} from "../produsen.service";
import {ProdusenModel} from "../produsen.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listProdusen!: ProdusenModel[];

  constructor(private produsenService: ProdusenService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.produsenService.list().subscribe({
        next: result => {
          this.listProdusen= result;
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
