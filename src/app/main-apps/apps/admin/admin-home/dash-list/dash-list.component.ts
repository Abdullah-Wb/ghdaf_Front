import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.scss']
})
export class DashListComponent implements OnInit {
  arr_dash: any
  constructor() {
    this.arr_dash = [
      {
        title: 'عدد المستخدمين',
        num: '55',
        icon: "bi bi-people-fill"
      },
      {
        title: 'عدد المستخدمين',
        num: '150',
        icon: "bi bi-people-fill"
      },
      {
        title: 'عدد المستخدمين',
        num: '120',
        icon: "bi bi-people-fill"
      },
      {
        title: 'عدد المستخدمين',
        num: '12',
        icon: "bi bi-people-fill"
      },


    ]
  }

  ngOnInit(): void {

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);


    type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('main1')!;
var myChart = echarts.init(chartDom);
var option;

const axisData = ['Mon', 'Tue', 'Wed', 'Very Loooong Thu', 'Fri', 'Sat', 'Sun'];
const data = axisData.map(function (item, i) {
  return Math.round(Math.random() * 1000 * (i + 1));
});
const links = data.map(function (item, i) {
  return {
    source: i,
    target: i + 1
  };
});
links.pop();
option = {
  title: {
    text: 'Graph on Cartesian'
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: axisData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      symbolSize: 40,
      label: {
        show: true
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data: data,
      links: links,
      lineStyle: {
        color: '#2f4554'
      }
    }
  ]
};

option && myChart.setOption(option);




  }

}
