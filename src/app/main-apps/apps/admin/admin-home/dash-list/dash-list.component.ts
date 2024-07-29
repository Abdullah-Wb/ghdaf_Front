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
        title: 'عدد الطلبات الاجمالي',
        num: '12',
        icon: "bi bi-people-fill"
      },
      {
        title: 'عدد الجمعيات',
        num: '150',
        icon: "bi bi-people-fill"
      },
      {
        title: 'عدد المطاعم',
        num: '120',
        icon: "bi bi-people-fill"
      },
      {
        title: 'عدد المستخدمين',
        num: '55',
        icon: "bi bi-people-fill"
      },


    ]
  }

  ngOnInit(): void {

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    option = { 
      title: {
        text: 'مبيعات كل شهر',
        left: 'center'
      },
      xAxis: {

        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Des']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 500, 590, 300, 400, 450],
          type: 'bar'
        }
      ]
    };
    option && myChart.setOption(option);

// الشارت الثاني

    var ROOT_PATH = 'https://echarts.apache.org/examples';

    var chartDom = document.getElementById('main1');
    var myChart = echarts.init(chartDom);
    var option;

    const weatherIcons = {
      Sunny: ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
      Cloudy: ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
      Showers: ROOT_PATH + '/data/asset/img/weather/showers_128.png'
    };
    option = {
      title: {
        text: 'Statistics',
        // subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 10,
        left: 'center',
        data: ['اللحوم', 'المخبوزات', 'الحلويات', 'المشروبات', 'اخرى']
      },
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            {
              value: 1548,
              name: 'اخرى',
              label: {
                // backgroundColor: '#eee',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  title: {
                    color: '#eee',
                    align: 'center'
                  },
                  abg: {
                    backgroundColor: '#333',
                    width: '100%',
                    align: 'right',
                    height: 25,
                    borderRadius: [4, 4, 0, 0]
                  },
                  Sunny: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Sunny
                    }
                  },
                  Cloudy: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Cloudy
                    }
                  },
                  Showers: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Showers
                    }
                  },
                  weatherHead: {
                    color: '#333',
                    height: 24,
                    align: 'left'
                  },
                  hr: {
                    borderColor: '#777',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  value: {
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: 'left'
                  },
                  valueHead: {
                    color: '#333',
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: 'center'
                  },
                  rate: {
                    width: 40,
                    align: 'right',
                    padding: [0, 10, 0, 0]
                  },
                  rateHead: {
                    color: '#333',
                    width: 40,
                    align: 'center',
                    padding: [0, 10, 0, 0]
                  }
                }
              }
            },
            { value: 735, name: 'المشروبات' },
            { value: 510, name: 'الحلويات' },
            { value: 434, name: 'المخبوزات' },
            { value: 335, name: 'اللحوم' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);





  }

}
