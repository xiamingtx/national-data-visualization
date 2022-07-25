<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 23:41:51
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 13:22:39
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
import { recentDetail } from "../api/country_detail";
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
    default: 750,
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
    default: "{b} : {c}亿元 ({d}%)",
  },
});

const createPie = () => {
  recentDetail(1).then((res) => {
    optionData.value = [
      {
        name: "第一产业占比",
        value: res.data.PrimaryIndustry,
      },
      {
        name: "第二产业占比",
        value: res.data.SecondaryIndustry,
      },
      {
        name: "第三产业占比",
        value: res.data.TertiaryIndustry,
      },
    ];
    legendData.value = ["第一产业占比", "第二产业占比", "第三产业占比"];
    title.value = "三大产业占比";
    useTimer.value = props.useTimer;
    seriesName.value = "";
    formatter.value = props.formatter;
    createPieChart();
  });
};

onMounted(createPie);
</script>

<style lang="scss" scoped></style>
