<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 18:10:13
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 23:26:25
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
  optionYData,
  bar,
  title,
  seriesName,
  createBasicBarChart,
} from "../composables/useBasicBar.js";

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

const createBar = () => {
  (optionXData.value = []), (optionYData.value = []);
  details(1).then((res) => {
    res.data.forEach((item) => {
      optionXData.value.unshift(item["InfoYear"]);
      optionYData.value.unshift(item["GDP"]);
    });
    title.value = "历年GDP";
    seriesName.value = "GDP";
    createBasicBarChart();
  });
};

onMounted(createBar);
</script>

<style lang="scss" scoped></style>
