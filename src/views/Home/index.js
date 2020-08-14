import React, { Component } from 'react'
import echarts from 'echarts'

import $style from './index.module.scss'

import bgList from './bgColorList.json'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bg: {},
      timer: null,
      flag: {
        con: null,
        times: 0,
      },
    }
  }
  componentDidMount() {
    this.initCalender()
    this.bgSwitch()
  }

  // 初始化日历 echarts
  initCalender() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('calender'))

    const date = new Date()
    const dateData = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
    }

    const sum = new Date(dateData.month)
    const data = []
    for (let i = 1; i <= 31; i++) {
      data.push([`${dateData.year}-${dateData.month}-${i}`, i])
    }

    //console.log(dateData, data)
    const option = {
      backgroundColor:'rgba(255, 255, 255, 0)',
      title: {
        top: 0,
        left: 'center',
        text: dateData.year + '年' + dateData.month + '月',
      },
      calendar: [
        {
          left: 'center',
          top: 120,
          cellSize: [80, 80],
          yearLabel: { show: false },
          orient: 'vertical',
          dayLabel: {
            top: 0,
            firstDay: 1,
            nameMap: 'cn',
          },
          monthLabel: {
            show: false,
          },
          range: dateData.year + '-' + dateData.month,
        },
      ],
      visualMap: {
        show: false,
        color: ['#fff'],
      },
      series: [
        {
          name: '日历',
          type: 'scatter',
          coordinateSystem: 'calendar',
          symbolSize: 1,
          label: {
            show: true,
            formatter: function (params) {
              var d = echarts.number.parseDate(params.value[0])
              //return d.getDate() + '\n\n' + params.value[1] + '\n\n'
              return d.getDate()
            },
            color: '#000',
          },
          data: data,
        },
        {
          name: '降雨量',
          type: 'heatmap',
          coordinateSystem: 'calendar',
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          data: data,
        },
      ],
    }

    myChart.setOption(option)

    myChart.on('click', (params) => {
      const data = params.data[1]
      let { con, times } = this.state.flag
      if (times === 10 && data === 1) {
        this.pushResume()
      } else {
        this.setState({
          flag: {
            con: data,
            times: con === data ? ++times : 0,
          },
        })
      }
    })
  }

  // 跳转简历页
  pushResume = (e) => {
    this.props.history.push('/resume')
  }

  // 背景切换
  bgSwitch = () => {
    const bgChange = () => {
      this.setState({
        bg: bgList[Math.ceil(Math.random() * bgList.length)],
      })
    }
    bgChange()

    clearInterval(this.state.timer)
    this.setState({
      timer: setInterval(bgChange, 10000),
    })
  }

  render() {
    let bg = {
      background: this.state.bg.hex,
    }
    return (
      <div className={$style.page} style={bg}>
        <div className={$style.bg_tag} onClick={this.bgSwitch}>
          <h2>
            <span className={$style.name}>{this.state.bg.name}</span>
          </h2>
        </div>
        <div className={$style.content}>
          <div id="calender" className={$style.calender} />
        </div>
      </div>
    )
  }
}
