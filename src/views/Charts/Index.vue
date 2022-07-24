<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 17:06:30
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 19:04:43
-->
<template>
  <div class="page">
    <div class="header">
      <div class="header-title">暂仅提供中国数据详细图表!</div>
    </div>
    <div class="content">
      <CountryPie :useTimer="false"></CountryPie>
      <CountryBar></CountryBar>
    </div>
  </div>
</template>

<script setup>
import CountryPie from "../../components/CountryPie.vue";
import CountryBar from "../../components/CountryBasicBar.vue";
</script>

<style lang="scss" scoped>
.page {
  margin: 40px;
  .header {
    .header-title {
      font-size: 30px;
      font-weight: bold;
    }
  }
  .content {
    margin-top: 30px;
    display: flex;
  }
}
</style>
