import {Component, OnInit} from '@angular/core';
import {Pesan} from "../entity.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  pesan!: Pesan;
  formPesan!: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.formPesan = this.formBuild.group({
      'nama': new FormControl(null, [Validators.required]),
      'pesan': new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  kirimPesan() {
    let pesanBaru: Pesan = new Pesan();
    pesanBaru.nama = this.formPesan.controls['nama'].value;
    pesanBaru.pesan = this.formPesan.controls['pesan'].value;
    this.pesan = pesanBaru;
  }

  acceptChild($event: Pesan):void{
    console.log($event);
    this.formPesan.controls["nama"].setValue($event.nama);
    this.formPesan.controls["pesan"].setValue($event.pesan);
  }
}
