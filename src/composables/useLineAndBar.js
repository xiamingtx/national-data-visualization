// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-25 13:40:52
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 17:49:02
 */
import { reactive } from "vue";
import * as echarts from "echarts";

export const chartData = reactive({
  lineBar: null,
  barName: "",
  lineName: "",
  barData: [],
  lineData: [],
  xData: [],
  legendData: [],
  barYFormatter: "",
  lineYFormatter: "",
  barFormatter: null,
  lineFormatter: null,
  title: "",
});

export const createLineBarChart = () => {
  const myChart = echarts.init(chartData.lineBar);
  const option = {
    title: {
      left: "left",
      text: chartData.title,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: true },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: chartData.legendData,
    },
    xAxis: [
      {
        type: "category",
        data: chartData.xData,
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: chartData.barName,
        axisLabel: {
          formatter: chartData.barYFormatter,
        },
      },
      {
        type: "value",
        name: chartData.lineName,
        interval: 5,
        axisLabel: {
          formatter: chartData.lineYFormatter,
        },
      },
    ],
    series: [
      {
        name: chartData.barName,
        type: "bar",
        tooltip: {
          valueFormatter: chartData.barFormatter,
        },
        data: chartData.barData,
      },
      {
        name: chartData.lineName,
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: chartData.lineFormatter,
        },
        data: chartData.lineData,
      },
    ],
  };
  // 绘制图表
  myChart.setOption(option);
  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
};
