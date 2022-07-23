<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 21:20:45
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 22:25:37
-->
<template>
  <div
    :style="{
      width: '500' + 'px',
      height: '500' + 'px',
    }"
    class="content-bar-chart"
    ref="pie"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { generalInfo } from "../api/country_detail";

const props = defineProps({
  width: {
    type: String,
    default: "500px",
  },
  height: {
    type: String,
    default: "500px",
  },
});

const optionsData = ref([]);

const pie = ref(null);

const createPieChart = () => {
  generalInfo().then((res) => {
    res.data.forEach((item) => {
      optionsData.value.push({
        name: item["CountryName"],
        value: parseFloat(item["GDP"]).toFixed(1),
      });
    });
    const myChart = echarts.init(pie.value);
    // 绘制图表
    myChart.setOption({
      series: [
        {
          type: "pie",
          data: optionsData.value,
        },
      ],
    });
    window.onresize = function () {
      //自适应大小
      myChart.resize();
    };
  });
};

onMounted(createPieChart);
</script>

<style lang=""></style>
