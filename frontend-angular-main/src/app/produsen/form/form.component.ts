import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProdusenService} from "../produsen.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProdusenModel} from "../produsen.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  menu: string = 'Tambah';
  formProdusen!: FormGroup;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private produsenService: ProdusenService,
              private router: Router) {
    this.formProdusen = formBuilder.group({
      'nama': new FormControl(null),
      'kode': new FormControl(null),
      'alamat': new FormControl(null)
    })
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      this.id = route['id'];
    })
    if (this.id) {
      this.findId();
      this.menu = "Edit";
    }
  }

  findId() {
    this.produsenService.findId(this.id).subscribe(response => {
      this.formProdusen.patchValue(response);
    })
  }

  save() {
    let produsen: ProdusenModel = this.formProdusen.value;
    if (this.id) {
      produsen.id = this.id;
      this.produsenService.update(produsen).subscribe(response => {
        if (response.status === 200) {
          this.router.navigate(['/','produsen']);
        } else {
          alert("Gagal Mengedit!")
          console.log(response.body);
        }
      })
    } else {
      this.produsenService.insert(produsen).subscribe(response => {
        if (response.status === 200) {
          this.router.navigate(['/','produsen']);
        } else {
          alert("Gagal Menyimpan!")
          console.log(response.body);
        }
      })
    }
  }
}
