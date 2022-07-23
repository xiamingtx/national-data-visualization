<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-22 22:50:11
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 00:23:05
-->
<template>
  <div class="q-pa-md">
    <q-table
      title="概览统计表"
      dense
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script setup>

const columns = [
  {
    name: "CountryName",
    label: "国家",
    align: "left",
    field: "CountryName",
  },
  {
    name: "GDP",
    align: "center",
    label: "GDP(亿元)",
    field: "GDP",
  },
  {
    name: "Population",
    align: "center",
    label: "人口(亿人)",
    field: "Population",
  },
  {
    name: "AvgGDP",
    align: "center",
    label: "人均GDP(万元)",
    field: "AvgGDP",
  },
];

const rows = [
  {
    CountryName: "中国",
    GDP: 123456,
    Population: 14,
    AvgGDP: 1,
  },
  {
    CountryName: "美国",
    GDP: 123456,
    Population: 3,
    AvgGDP: 1,
  },
];
</script>

<style lang=""></style>
