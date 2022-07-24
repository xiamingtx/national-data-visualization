// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 17:56:33
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 22:31:35
 */
import { ref } from "vue";
import * as echarts from "echarts";

export const optionXData = ref([]);

export const optionYData = ref([]);

export const bar = ref(null);

export const title = ref("");

export const seriesName = ref("");

export const createBasicBarChart = () => {
  const myChart = echarts.init(bar.value);
  const option = {
    title: {
      text: title.value,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}年 : {c}亿元",
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
    series: [
      {
        name: seriesName.value,
        type: "bar",
        data: optionYData.value,
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
