<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-21 21:57:06
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 22:25:12
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
      <div class="content-main">
        <div class="content-left">
          <div class="content-title">
            <q-icon class="content-title-icon" name="leaderboard"></q-icon>
            当前统计国家总数:
            <div class="content-title-number">
              {{ count }}
            </div>
          </div>
          <div class="content-left-main">
            <div class="q-pa-md" style="max-width: 350px; width: 300px">
              <q-toolbar class="bg-primary text-white shadow-2">
                <q-toolbar-title>
                  已统计国家
                  <q-icon name="public" size="1.6rem"></q-icon>
                </q-toolbar-title>
              </q-toolbar>

              <q-list bordered>
                <q-item
                  v-for="item in data"
                  :key="item.id"
                  class="q-my-sm"
                  clickable
                  v-ripple
                >
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">
                      {{ item.CountryName.slice(0, 1) }}
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ item.CountryName }}</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="flag" color="green" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
        <div class="content-right">
          <Pie></Pie>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { list } from "../../api/country";
import { generalInfo } from "../../api/country_detail";
import { ref } from "vue";
import * as echarts from "echarts";
import Pie from "../../components/Pie.vue";

const data = ref([]);

const count = ref(0);

const optionsData = ref([]);

const fetchData = () => {
  getList();
};

const getList = () => {
  list().then((res) => {
    data.value = res.data;
    count.value = res.totalCount;
  });
};

onMounted(() => {
  fetchData();
});

onMounted(() => {});
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
    .content-main {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .content-left {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        .content-title {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 30px;
          font-size: 18px;
          line-height: 30px;
          padding-left: 20px;
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
  }
}
</style>
