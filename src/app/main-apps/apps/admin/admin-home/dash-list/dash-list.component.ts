import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { admin_home } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';


@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.scss']
})
export class DashListComponent implements OnInit {
  arr_count_user: any
  arr_dash: any
  arr_salse_mon: any
  arr_broduct_type: any
  constructor(private api_dash: ImpApiService) {
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
        allusers: '55',
        icon: "bi bi-people-fill"
      },


    ]
  }

  ngOnInit(): void {




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


    this.git_user_num()
    this.git_salse_monthly()
    this.git_broduct_type()
  }



  git_user_num() {

    this.api_dash.get(admin_home.Count_users).subscribe(res => {
      this.arr_count_user = res
    })
  }

  git_salse_monthly() {
    this.api_dash.get(admin_home.Orders_every_month).subscribe(res => {
      this.arr_salse_mon = res


      this.monthly(this.arr_salse_mon)
    })

  }


  monthly(data){



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
          data: data,
          type: 'bar'
        }
      ]
    };
    option && myChart.setOption(option);
  }

  git_broduct_type() {
    this.api_dash.get(admin_home.Product_By_Type).subscribe(res => {
      this.arr_broduct_type = res

    })

  }

}
