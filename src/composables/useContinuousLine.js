// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-25 09:51:23
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 10:46:45
 */
import { ref } from "vue";
import * as echarts from "echarts";

export const dateList = ref([]);

export const valueList = ref([]);

export const line = ref(null);

export const title = ref("");

export const createContinuousLine = () => {
  const myChart = echarts.init(line.value);
  const option = {
    // Make gradient line here
    visualMap: [
      {
        show: false,
        type: "continuous",
        seriesIndex: 0,
        min: 0,
        max: 400,
      },
      {
        show: false,
        type: "continuous",
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: dateList.value.length - 1,
      },
    ],
    title: [
      {
        left: "center",
        text: title.value,
      },
      {
        top: "55%",
        left: "center",
        text: title.value + "(渐变)",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    xAxis: [
      {
        data: dateList.value,
      },
      {
        data: dateList.value,
        gridIndex: 1,
      },
    ],
    yAxis: [
      {},
      {
        gridIndex: 1,
      },
    ],
    grid: [
      {
        bottom: "60%",
      },
      {
        top: "60%",
      },
    ],
    series: [
      {
        type: "line",
        showSymbol: false,
        data: valueList.value,
      },
      {
        type: "line",
        showSymbol: false,
        data: valueList.value,
        xAxisIndex: 1,
        yAxisIndex: 1,
      },
    ],
  };

  option && myChart.setOption(option);
  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
};
