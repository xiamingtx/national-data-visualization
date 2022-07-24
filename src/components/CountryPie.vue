<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 17:16:53
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 17:21:23
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
  optionsData,
  legendData,
  pie,
  createPieChart,
} from "../composables/usePie.js";

const props = defineProps({
  width: {
    type: Number,
    default: 500,
  },
  height: {
    type: Number,
    default: 500,
  },
});

const createPie = () => {
  (optionsData.value = []), (legendData.value = []);
  generalInfo().then((res) => {
    res.data.forEach((item) => {
      optionsData.value.push({
        name: item["CountryName"],
        value: parseFloat(item["GDP"]).toFixed(1),
      });
      legendData.value.push(item["CountryName"]);
    });
    createPieChart();
  });
};

onMounted(createPie);
</script>

<style lang="scss" scoped></style>
