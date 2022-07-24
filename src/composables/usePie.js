// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 21:20:45
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 00:00:41
 */

import { ref } from "vue";
import * as echarts from "echarts";

export const optionData = ref([]);

export const legendData = ref([]);

export const pie = ref(null);

export const useTimer = ref(true);

export const title = ref("");

export const seriesName = ref("");

export const formatter = ref("");

export const createPieChart = () => {
  console.log(formatter.value)
  const myChart = echarts.init(pie.value);
  const option = {
    title: {
      text: title.value,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: formatter.value,
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: legendData.value,
    },
    series: [
      {
        name: seriesName.value,
        type: "pie",
        data: optionData.value,
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

  if (useTimer.value) {
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
  }
};
