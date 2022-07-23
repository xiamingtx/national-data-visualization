<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-21 21:57:06
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 11:18:25
-->
<template>
  <div class="page">
    <div class="header">
      <div class="header-title">🚀欢迎来到国家信息统计中心!</div>
      <div class="header-description">
        <q-icon name="open_in_new"></q-icon>
        数据来源:
        <a href="https://data.stats.gov.cn/index.htm"> 国家统计局 </a>
      </div>
    </div>
    <div class="content">
      <div class="content-title">
        <q-icon class="content-title-icon" name="leaderboard"></q-icon>
        当前统计国家总数:
        <div class="content-title-number">
          {{ count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { list } from "../../api/country";
import { ref } from "vue";

const data = ref([]);

const count = ref(0);

const fetchData = () => {
  list().then((res) => {
    console.log(res);
    data.value = res.data;
    count.value = res.totalCount;
  });
};

onMounted(fetchData);
</script>

<style lang="scss">
@import "../../quasar-variables.sass";

.page {
  display: flex;
  flex-direction: column;
  .header {
    margin-top: 10px;
    height: 80px;
    line-height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .header-title {
      font-size: 40px;
      color: $info;
    }
    .header-description {
      font-size: 22px;
      & > a {
        color: $primary;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 20px;
    .content-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 30px;
      font-size: 18px;
      line-height: 30px;
      .content-title-icon {
        font-size: 22px;
        color: rgb(206, 21, 21);
      }
      .content-title-number {
        font-size: 24px;
        font-weight: 600;
        padding-left: 20px;
      }
    }
  }
}
</style>
