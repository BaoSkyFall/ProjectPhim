import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  @Input() gheItem:any;
  @Output() eventDatGhe = new EventEmitter();
  public status:boolean = false;
  constructor() { }
  DatGhe(){
    this.status == false ? this.status = true : this.status = false;
    let emitObject = {
      TrangThaiGhe: this.status,
      DoiTuongGhe: this.gheItem
    }
    this.eventDatGhe.emit(emitObject);
  }
  ngOnInit() {
  }

}
