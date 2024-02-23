import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  counted: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  tambah(){
    this.counted++;
  }

  kurang(){
    if(this.counted === 0){
      alert("Batas pengurangan adalah angka 0!")
    }else{
      this.counted--;
    }
  }

}
