<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-25 09:56:33
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 10:37:39
-->
<template>
  <div
    :style="{
      width: props.width + 'px',
      height: props.height + 'px',
    }"
    ref="line"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { details } from "../api/country_detail";
import * as echarts from "echarts";
import {
  dateList,
  valueList,
  line,
  title,
  createContinuousLine,
} from "../composables/useContinuousLine";

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

const createLine = () => {
  (dateList.value = []), (valueList.value = []);
  details(1).then((res) => {
    res.data.forEach((item) => {
      dateList.value.unshift(item["InfoYear"]);
      valueList.value.unshift(item["GDPIncRate"]);
    });
    title.value = "GDP增长率";
    createContinuousLine();
  });
};

onMounted(createLine);
</script>

<style lang="scss" scoped></style>
