// import { Component, OnInit, NgModule } from '@angular/core';
// import { BitcoinService } from '../../services/bitcoin.service';
// import { Observable, BehaviorSubject, of, throwError, map } from 'rxjs';
// import * as Highcharts from 'highcharts';
// import HeatmapModule from 'highcharts/modules/heatmap';
// HeatmapModule(Highcharts);
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

// @Component({
//   selector: 'statistics-page',
//   templateUrl: './statistics-page.component.html',
//   styleUrls: ['./statistics-page.component.scss'],
// })
// export class StatisticsPageComponent {
// constructor(private bitcoinService: BitcoinService) {}
// public chartType: string = 'line';
// public chartDatasets: Array<any> = [
//   { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
//   // { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' },
// ];
// public chartLabels: Array<any> = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
// ];
// public chartColors: Array<any> = [
//   {
//     backgroundColor: 'rgba(105, 0, 132, .2)',
//     borderColor: 'rgba(200, 99, 132, .7)',
//     borderWidth: 2,
//   },
// {
//   backgroundColor: 'rgba(0, 137, 132, .2)',
//   borderColor: 'rgba(0, 10, 130, .7)',
//   borderWidth: 2,
// },
// ];
// public chartOptions: any = {
//   responsive: true,
// };
// public chartClicked(e: any): void {}
// public chartHovered(e: any): void {}
// data1: object[];
// data2: object[];
// async ngOnInit(): Promise<void> {
//   const data1 = await this.bitcoinService.getMarketPrice();
//   console.log('data', of(data1));
//   var newData = data1.pipe(
//     map((obj) => {
//       // const value = {
//       //   name: new Date(obj.x).getHours() + ':' + new Date(obj.x).getMinutes(),
//       //   uv: obj.y,
//       // };
//       // return value;
//     }),
//     (this.data1 = newData)
//   );
//   const data2 = await this.bitcoinService.getConfirmedTransactions();
//   var newData2 = data2.pipe(
//     map((obj) => {
//       // const value = {
//       //   name: new Date(obj.x).getHours() + ':' + new Date(obj.x).getMinutes(),
//       //   uv: obj.y,
//       // };
//       // return value;
//     }),
//     (this.data2 = newData2)
//   );
// }
// HeatmapObject: Highcharts.Chart = null;
// ngOnInit() {
//   let options = this.HeatmapOptions();
//   this.HeatmapObject = Highcharts.chart(options);
// }
// HeatmapOptions(): Highcharts.Options {
//   let options: Highcharts.Options = {
//     chart: {
//       renderTo: 'container-chart',
//       marginBottom: 80,
//     },
//     xAxis: {
//       categories: [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec',
//       ],
//       labels: {
//         rotation: 90,
//       },
//     },
//     series: [
//       {
//         name: 'Flow',
//         type: 'line',
//         data: [
//           29, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
//           95.6, 54.4,
//         ],
//         dataLabels: {
//           enabled: true,
//           color: '#000000',
//         },
//       },
//     ],
//   };
//   return options;
// }
// title = 'Average Temperatures of Cities';
// type = 'LineChart';
// data = [
//   ['Jan', 7.0, -0.2, -0.9, 3.9],
//   ['Feb', 6.9, 0.8, 0.6, 4.2],
//   ['Mar', 9.5, 5.7, 3.5, 5.7],
//   ['Apr', 14.5, 11.3, 8.4, 8.5],
//   ['May', 18.2, 17.0, 13.5, 11.9],
//   ['Jun', 21.5, 22.0, 17.0, 15.2],
//   ['Jul', 25.2, 24.8, 18.6, 17.0],
//   ['Aug', 26.5, 24.1, 17.9, 16.6],
//   ['Sep', 23.3, 20.1, 14.3, 14.2],
//   ['Oct', 18.3, 14.1, 9.0, 10.3],
//   ['Nov', 13.9, 8.6, 3.9, 6.6],
//   ['Dec', 9.6, 2.5, 1.0, 4.8],
// ];
// columnNames = ['Month', 'Tokyo', 'New York', 'Berlin', 'Paris'];
// options = {
//   hAxis: {
//     title: 'Month',
//   },
//   vAxis: {
//     title: 'Temperature',
//   },
// };
// width = 550;
// height = 400;
// }
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { bubbleData } from './data';
// import { multi } from './data';
import { lastValueFrom } from 'rxjs';
import { Usd } from 'src/app/models/usd.model';

@Component({
  selector: 'statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss'],
})
export class StatisticsPageComponent {
  // bubbleData: any[];
  // view: any[] = [700, 400];

  async ngOnInit(): Promise<void> {
    const ans = await lastValueFrom(await this.bitcoinService.getMarketPrice());
    // console.log(await ans['values']);
    const newName: string = ans['name'];
    // console.log('newName :>>', newName);
    this.values['name'] = newName;
    // console.log('this.values', this.values);
    ans['values'].forEach((el) => {
      // console.log('el.x', el.x);
      // console.log(new Date(el.x).toLocaleString('he'));
      // console.log(new Date(el.x).toTimeString().substring(0, 9));
      // console.log('el.y', el.y);
      let item = {
        // name: new Date(el.x).toTimeString().substring(0, 9),
        name: el.x,
        value: el.y,
      };
      this.values['series'].push(item);
    });
    console.log('this.values :>>', this.values);
    this.multi.push(this.values);
    console.log('this.multi :>>', this.multi);
    // let elementSeries:object = {name:}
  }

  multi = [];
  view: any[] = [600, 300];
  values: object = { name: '', series: [] };
  // options
  // showXAxis: boolean = true;
  // showYAxis: boolean = true;
  // gradient: boolean = false;
  // showLegend: boolean = true;
  // showXAxisLabel: boolean = true;
  // yAxisLabel: string = 'Population';
  // showYAxisLabel: boolean = true;
  // xAxisLabel: string = 'Years';
  // maxRadius: number = 20;
  // minRadius: number = 5;
  // yScaleMin: number = 70;
  // yScaleMax: number = 85;

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Average USD';
  timeline: boolean = true;

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  // };

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(private bitcoinService: BitcoinService) {
    // Object.assign(this, { bubbleData });
    Object.assign(this, this.multi);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
