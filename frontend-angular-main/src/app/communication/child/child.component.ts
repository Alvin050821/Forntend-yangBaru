import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Pesan} from "../entity.model";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Output() sendMessage = new EventEmitter<Pesan>();

  @Input() pesan!: Pesan;
  listPesan!: Pesan[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.listPesan) {
      this.listPesan.push(this.pesan);
    } else if (!this.listPesan && this.pesan) {
      this.listPesan = [this.pesan];
    }
  }

  ngOnInit(): void {
  }

  edit(i: number) {
    this.sendMessage.emit(this.listPesan[i]);
  }

}
