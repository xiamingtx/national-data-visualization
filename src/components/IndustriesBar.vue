<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-25 11:03:56
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 13:50:57
-->
<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-select
        filled
        v-model="year"
        :options="options"
        label="选择年份"
        style="width: 250px"
        @update:model-value="update"
      />
    </div>
  </div>
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
  axisLabel,
  formatter,
} from "../composables/useBasicBar.js";

const props = defineProps({
  width: {
    type: Number,
    default: 1000,
  },
  height: {
    type: Number,
    default: 550,
  },
});

const year = ref(2021);

const options = [
  2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009,
  2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
];

const update = () => {
  console.log(year.value);
  fetchData();
};

const fetchData = () => {
  details(1, year.value).then((res) => {
    const data = res.data[0];
    optionXData.value = [
      "农林渔业增加值",
      "工业增加值",
      "建筑业增加值",
      "批发和零售业增加值",
      "交通运输、仓储和邮政业",
      "住宿和餐饮业增加值",
      "金融业增加值",
      "房地产业增加值",
      "其他产业增加值",
    ];
    optionYData.value = [
      data["FarmingIndustry"],
      data["Industry"],
      data["ConstructionIndustry"],
      data["WholesaleAndRetail"],
      data["TransportationAndStorage"],
      data["AccommodationAndCatering"],
      data["FinancialBusiness"],
      data["RealtyBusiness"],
      data["Others"],
    ];
    createBar();
  });
};

const createBar = () => {
  title.value = "各产业增加值";
  seriesName.value = "";
  formatter.value = "{b} : {c}亿元";
  axisLabel.value = {
    interval: 0,
    formatter: function (value) {
      var ret = ""; //拼接加\n返回的类目项
      var maxLength = 5; //每项显示文字个数
      var valLength = value.length; //X轴类目项的文字个数
      var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
      if (rowN > 1) {
        //如果类目项的文字大于5,
        for (var i = 0; i < rowN; i++) {
          var temp = ""; //每次截取的字符串
          var start = i * maxLength; //开始截取的位置
          var end = start + maxLength; //结束截取的位置
          //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
          temp = value.substring(start, end) + "\n";
          ret += temp; //凭借最终的字符串
        }
        return ret;
      } else {
        return value;
      }
    },
  };
  createBasicBarChart();
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
