// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 20:57:46
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 22:28:26
 */
import { ref } from "vue";
import * as echarts from "echarts";

export const optionXData = ref([]);

export const bar = ref(null);

export const title = ref("");

export const seriesData = ref("");

export const createMultiBarChart = () => {
  const myChart = echarts.init(bar.value);
  console.log(seriesData.value);
  const option = {
    title: {
      text: title.value,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: optionXData.value,
    },
    xAxis: {
      data: optionXData.value,
    },
    yAxis: {},
    series: seriesData.value,
  };
  // 绘制图表
  myChart.setOption(option);
  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
};
