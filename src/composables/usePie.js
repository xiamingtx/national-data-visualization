// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 21:20:45
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 12:26:06
 */

import { ref } from "vue";
import * as echarts from "echarts";

export const optionsData = ref([]);

export const legendData = ref([]);

export const pie = ref(null);

export const createPieChart = () => {
  const myChart = echarts.init(pie.value);
  const option = {
    title: {
      text: "各国GDP占比",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: legendData.value,
    },
    series: [
      {
        name: "GDP(亿元)",
        type: "pie",
        data: optionsData.value,
        radius: "55%",
        center: ["50%", "60%"],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  // 绘制图表
  myChart.setOption(option);
  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };

  let currentIndex = -1;

  setInterval(function () {
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
  }, 1000);
};
