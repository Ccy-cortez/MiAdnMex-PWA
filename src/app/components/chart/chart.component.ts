import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

   // Radar
   @Input() radarChartLabels: string[] = ['Fuerza', 'Resistencia', 'Vo2 ',
   'Lesiones', 'Recuperación'];
  
   @Input() radarChartData: any = [
     {data: [0, 0, 0, 0, 0], label: 'Atleta'},
     {data: [0, 0, 0, 0, 0], label: 'Usuario'}
   ];
   public radarChartType: string = 'radar';
  
   public radarChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(190, 13, 131,0.2)',
      borderColor: 'rgba(190, 13, 131,1)',
      pointBackgroundColor: 'rgba(190, 13, 131,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(190, 13, 131,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }];
   // events
   public chartClicked(e: any): void {
     console.log(e);
     console.log(this.radarChartData[0].data[0]);
   } public chartHovered(e: any): void {
     console.log(e);
   }


   actualizar(event) {
     console.log('this is ok' + event);
   }

  constructor() { }

  ngOnInit() {
  }

}
