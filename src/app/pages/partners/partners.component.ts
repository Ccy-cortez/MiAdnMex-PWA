import { Component, OnInit, Input, EventEmitter, Inject } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})

export class PartnersComponent implements OnInit {

  aux: number;
  contador: number = 0;
  arrayDiferencias: number [] = [];
  compartio: boolean;

  arrayStats: object[] = [
    {value: 'Respuesta de Fuerza', tipo: 'porcentaje'},
    {value: 'Respuesta de Resistencia', tipo: 'porcentaje'},
    {value: 'Respuesta Máxima de Vo2 ', tipo: 'cantidad'},
    {value: 'Riesgo de Lesiones', tipo: 'cantidad'},
    {value: 'Velocidad de Recuperación', tipo: 'cantidad'}
  ];
  /*
  arrayStats: string[] = ['Respuesta de Fuerza', 'Respuesta de Resistencia', 'Respuesta Máxima de Vo2 ',
  'Riesgo de Lesiones', 'Velocidad de Recuperación'];*/

  @Input() arrayGrafico: any = [{
  0: [{data: [48.4, 51.6, 60, 80, 80], dif: [0, 0, 0, 0, 0],  label: 'Gerald Capuozzo', 
  description: 'Caracas',
  occupation: 'Asesor Deportivo',
  imgurl: '/assets/gerald.jpg'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  // tslint:disable-next-line:max-line-length
  1: [{data: [25.7, 74.3, 60, 80, 40], dif: [0, 0, 0, 0, 0], 
    label: 'Luis Omar Mora', description: 'Puerto Vallarta',
    occupation: 'Professional Crossfit Atlethe',
    imgurl: '/assets/descarga.jpeg'},
    {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  2: [{data: [52.2, 47.8, 80, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Alan García Díaz', description: 'Lugar',
  occupation: 'ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  3: [{data: [52.2, 47.8, 60, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Alvaro Sepulveda', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  4: [{data: [48, 52, 80, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Ana G. López', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  5: [{data: [51.2, 48.8, 60, 100, 80], dif: [0, 0, 0, 0, 0],
  label: 'Andrea T. Hutt', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  6: [{data: [52.9, 47.1, 40, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Carleen Mathews', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  7: [{data: [22.0, 78.0, 80, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Cecilia Ramírez', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  8: [{data: [57.1, 42.9, 60, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Dairo Davila', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  9: [{data: [45.8, 54.2, 100, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Daniela Campuzano', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  10: [{data: [55.6, 44.4, 60, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Daniela Rodríguez', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  11: [{data: [10.3, 89.7, 60, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Edna G. Carrillo', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  12: [{data: [57.4, 42.6, 60, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'E. Laura Monroy', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  13: [{data: [53.8, 46.2, 60, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Eduardo Herrera', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  14: [{data: [44.4, 55.6, 80, 100, 80], dif: [0, 0, 0, 0, 0],
  label: 'Estefania Ahumada', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  15: [{data: [60, 40, 60, 80, 100], dif: [0, 0, 0, 0, 0],
  label: 'Fer Sagreeb', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  16: [{data: [54.5, 45.5, 60, 60, 60], dif: [0, 0, 0, 0, 0],
  label: 'Gustavo O. Farril', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  17: [{data: [48.4, 51.6, 60, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Haydee Navarra', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  18: [{data: [32.7, 67.9, 100, 60, 80], dif: [0, 0, 0, 0, 0],
  label: 'Ignacio Prado', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  } , {
  19: [{data: [48.4, 51.6, 60, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Ingrid Martz', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  20: [{data: [25.7, 74.3, 80, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Jimena Becerra', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  21: [{data: [38.5, 61.5, 60, 60, 80], dif: [0, 0, 0, 0, 0],
  label: 'Jimenez Ferez', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  22: [{data: [42.9, 57.1, 100, 100, 80], dif: [0, 0, 0, 0, 0],
  label: 'Juan Covarrubias', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  23: [{data: [50, 50, 60, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Lissette Gutierrez', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
    }, {
  24: [{data: [33.3, 66.7, 100, 100, 100], dif: [0, 0, 0, 0, 0],
  label: 'Luis A. Vildosola', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  25: [{data: [30, 70, 60, 80, 100], dif: [0, 0, 0, 0, 0],
  label: 'Mar Contreras', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  26: [{data: [24.3, 75.7, 80, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Mariano Garces', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  27: [{data: [40.5, 59.5, 80, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Maya Hill', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  28: [{data: [40, 60, 40, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Sergio Fernandez', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  29: [{data: [40, 60, 60, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Triana Paganoni', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  30: [{data: [38.5, 61.5, 60, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Vanesa Zambotti', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  31: [{data: [42.9, 57.1, 60, 80, 80], dif: [0, 0, 0, 0, 0],
  label: 'Victor Andoni', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  32: [{data: [66.7, 33.33, 60, 80, 40], dif: [0, 0, 0, 0, 0],
  label: 'Yazmin Arroyo', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }, {
  33: [{data: [31, 69, 60, 80, 60], dif: [0, 0, 0, 0, 0],
  label: 'Zeke Grove', description: 'Lugar',
  occupation: 'Ocupación',
  imgurl: '/assets/user.png'},
  {data: [0, 0, 0, 0, 0 ], label: 'Usuario'}]
  }
];


@Input() graphChange: EventEmitter<ArrayType> = new EventEmitter();

  actualizar(event) {
    console.log('this is ok' + event);
  }

  cambiarCard(side: String) {
    if (side === 'right') {
      if (this.contador === (this.arrayGrafico.length - 1 )) {
        this.contador = 0;
      } else {this.contador++; }
    } else {
      if (this.contador === 0) {
        this.contador = this.arrayGrafico.length;
      }
      this.contador--;
    }
  }

  analizar() {

    for (const {item, index} of this.arrayGrafico.map((item: any, index) => ({ item, index }))) {
      let diferencia: number = 0;

      for (const {itemArray, indexArray} of this.arrayStats.map((itemArray: any, indexArray) =>
      ({ itemArray, indexArray }))) {
        let datoPartner = this.arrayGrafico[index][index][0].data[indexArray];
        let datoUsuario = this.arrayGrafico[index][index][1].data[indexArray];
          if (datoPartner > datoUsuario ) {
            this.arrayGrafico[index][index][0].dif[indexArray] = Math.ceil( ((datoUsuario * 100) / datoPartner) * 100) / 100;
          } else {
            this.arrayGrafico[index][index][0].dif[indexArray] = Math.ceil( ((datoPartner * 100) / datoUsuario) * 100) / 100;
          }
/*  proceso general?  */
        let resta;
        resta = (this.arrayGrafico[index][index][1].data[indexArray]) -
          (this.arrayGrafico[index][index][0].data[indexArray]);
        if (resta > 0) {
          //this.arrayGrafico[index][index][0].dif[indexArray] = this.arrayGrafico[index][index][0].data[indexArray] / resta;
          diferencia = diferencia + resta;
          console.log(diferencia);
        } else {
          diferencia = diferencia + (resta * -1);
          //this.arrayGrafico[index][index][0].dif[indexArray] = this.arrayGrafico[index][index][0].data[indexArray] / (resta * -1);
          console.log(diferencia * -1);
        }
    /*  */

        // console.log('diferencia' + diferencia);
      }
      this.arrayGrafico[index][index][0].diferencia = diferencia;
      if (index === 0) {
        this.aux = index;
        this.contador = index;
      } else if (index > 0) {
        if (this.arrayGrafico[index][index][0].diferencia <= this.arrayGrafico[this.aux][this.aux][0].diferencia ) {
          this.aux = index;
          this.contador = index;
        }
      }
    }
    console.log('aux' + this.aux);
  }

  cambiarGrafica(event: number, i: number) {
    for (const {item, index} of this.arrayGrafico.map((item: any, index) => ({ item, index }))) {
        this.arrayGrafico[index][index][1].data[i] = event;
    }
  }

  enableCompara(){

  }

  constructor() {}

  ngOnInit() {
  }
}
