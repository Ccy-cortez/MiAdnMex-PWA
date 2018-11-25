import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MatSliderChange } from '@angular/material';
import {MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']

})
export class InputBarComponent implements OnInit {

  indicadores: object[] = [
    {value: 20, viewValue: 'Muy baja'},
    {value: 40, viewValue: 'baja'},
    {value: 60, viewValue: 'Media'},
    {value: 80, viewValue: 'Alta'},
    {value: 100, viewValue: 'Muy Alta'}
  ];

  @Input() index: number;
  @Input() placeholder: String = 'Dato';
  @Input() tipo: String = 'porcentaje';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value: number;
  vertical = false;
  selected: any;
  @Output() change: EventEmitter<MatSliderChange>;
  @Output() valueChange: EventEmitter<number> = new EventEmitter();
  @Output() selectionChange: EventEmitter<MatSelectChange>;

 // optionSelectionChanges: Observable<MatOptionSelectionChange>

cambiarValor() {
  this.valueChange.emit(this.value);
  console.log(this.value);
}

constructor() {
   }

  ngOnInit() {
  }

}
