<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 21:20:10
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 23:23:30
-->
<template>
  <div
    :style="{
      width: props.width + 'px',
      height: props.height + 'px',
    }"
    ref="bar"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { details } from "../api/country_detail";
import * as echarts from "echarts";
import {
  optionXData,
  bar,
  title,
  seriesData,
  createMultiBarChart,
} from "../composables/useMultiBar.js";

const props = defineProps({
  width: {
    type: Number,
    default: 750,
  },
  height: {
    type: Number,
    default: 500,
  },
});

let seriesData1 = [];
let seriesData2 = [];
let seriesData3 = [];

const createBar = () => {
  (optionXData.value = []),
    (seriesData.value = []),
    (seriesData1 = []),
    (seriesData2 = []),
    (seriesData3 = []);
  details(1).then((res) => {
    res.data.forEach((item) => {
      optionXData.value.unshift(item["InfoYear"]);
      seriesData1.unshift(item["PrimaryIndustry"]);
      seriesData2.unshift(item["SecondaryIndustry"]);
      seriesData3.unshift(item["TertiaryIndustry"]);
    });
    seriesData.value.push({
      data: seriesData1,
      name: "第一产业占比",
      type: "bar",
      stack: "x",
    });
    seriesData.value.push({
      data: seriesData2,
      name: "第二产业占比",
      type: "bar",
      stack: "x",
    });
    seriesData.value.push({
      data: seriesData3,
      name: "第三产业占比",
      type: "bar",
      stack: "x",
    });
    title.value = "历年三大产业占比";
    console.log(seriesData.value);
    createMultiBarChart();
  });
};

onMounted(createBar);
</script>

<style lang="scss" scoped></style>
