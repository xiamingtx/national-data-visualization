<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-25 13:40:24
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 17:49:11
-->
<template>
  <div
    :style="{
      width: props.width + 'px',
      height: props.height + 'px',
    }"
    ref="lineBar"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { forecast } from "../api/country_detail";
import * as echarts from "echarts";
import { chartData, createLineBarChart } from "../composables/useLineAndBar.js";

const props = defineProps({
  width: {
    type: Number,
    default: 800,
  },
  height: {
    type: Number,
    default: 600,
  },
});

const lineBar = ref(null);

const createLineBar = () => {
  forecast(1).then((res) => {
    chartData.lineBar = lineBar.value;
    chartData.barName = "GDP";
    chartData.lineName = "GDP增长率";
    chartData.barData = res.data.map((item) => item["GDP"]);
    chartData.lineData = res.data.map((item) => item["GDPIncRate"]);
    chartData.xData = res.data.map((item) => item["InfoYear"]);
    chartData.legendData = ["GDP", "GDP增长率"];
    chartData.barYFormatter = "{value} 亿元";
    chartData.lineYFormatter = "{value} %";
    chartData.barFormatter = (value) => value + " 亿元";
    chartData.lineFormatter = (value) => value + " %";
    chartData.title = "五年内GDP与增长率预测"
    createLineBarChart();
  });
};

onMounted(createLineBar);
</script>

<style lang="scss" scoped></style>
