<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 17:16:53
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 13:21:30
-->
<template>
  <div
    :style="{
      width: props.width + 'px',
      height: props.height + 'px',
    }"
    ref="pie"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { generalInfo } from "../api/country_detail";
import * as echarts from "echarts";
import {
  optionData,
  legendData,
  pie,
  title,
  useTimer,
  seriesName,
  createPieChart,
  formatter,
} from "../composables/usePie.js";

const props = defineProps({
  width: {
    type: Number,
    default: 650,
  },
  height: {
    type: Number,
    default: 550,
  },
  useTimer: {
    type: Boolean,
    default: true,
  },
  formatter: {
    type: String,
    default: "{a} <br/>{b} : {c}亿元 ({d}%)",
  },
});

const createPie = () => {
  (optionData.value = []), (legendData.value = []);
  generalInfo().then((res) => {
    res.data.forEach((item) => {
      optionData.value.push({
        name: item["CountryName"],
        value: item["GDP"],
      });
      legendData.value.push(item["CountryName"]);
    });
    title.value = "各国GDP占比";
    useTimer.value = props.useTimer;
    seriesName.value = "GDP占比";
    formatter.value = props.formatter;
    createPieChart();
  });
};

onMounted(createPie);
</script>

<style lang="scss" scoped></style>
