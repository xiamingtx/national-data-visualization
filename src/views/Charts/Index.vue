<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 17:06:30
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 21:23:32
-->
<template>
  <div class="page">
    <div class="header">
      <div class="header-title">暂仅提供中国数据详细图表!</div>
    </div>
    <div class="content">
      <q-splitter v-model="splitterModel" style="height: 700px">
        <template v-slot:before>
          <div class="q-pa-md">
            <q-tree
              :nodes="info"
              node-key="label"
              selected-color="primary"
              v-model:selected="selected"
              default-expand-all
            />
          </div>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="selected"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="图表">
              <div class="text-h4 q-mb-md">
                图表
                <span style="padding-left: 100px">
                  数据来源:
                  <a href="https://data.stats.gov.cn/index.htm"> 国家统计局 </a>
                </span>
              </div>
              <div style="font-size: 20px">
                本网站提供各国GDP、人口、人均GDP等多方面数据 <br />
                暂时仅提供中国数据详细图表
              </div>
            </q-tab-panel>

            <q-tab-panel name="各国GDP占比">
              <CountryPie :useTimer="false"></CountryPie>
            </q-tab-panel>

            <q-tab-panel name="GDP">
              <div class="GDP-description" style="font-size: 20px">
                中国历年GDP使用了两种统计方法:
                <div
                  class="Three-industry-description-first"
                  style="color: darkturquoise"
                >
                  1. 基础矩形图统计GDP总量
                </div>
                <div
                  class="Three-industry-description-second"
                  style="color: lightcoral"
                >
                  2. 渐变折线图统计GDP增长率
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="历年GDP">
              <div class="text-h4 q-mb-md">历年GDP</div>
              <CountryBasicBar></CountryBasicBar>
            </q-tab-panel>

            <q-tab-panel name="历年GDP增长率">
              <div class="text-h4 q-mb-md">历年GDP增长率</div>
              <GDPIncLine></GDPIncLine>
            </q-tab-panel>

            <q-tab-panel name="三大产业占比">
              <div class="text-h4 q-mb-md">中国三大产业占比</div>
              <div class="Three-industry-description" style="font-size: 20px">
                中国三大产业占比使用了两种统计方法:
                <div
                  class="Three-industry-description-first"
                  style="color: darkturquoise"
                >
                  1. 饼状图统计最新一年占比
                </div>
                <div
                  class="Three-industry-description-second"
                  style="color: lightcoral"
                >
                  2. 堆叠矩形图统计历年占比
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="最新一年占比">
              <MainIndustryPie :useTimer="false"></MainIndustryPie>
            </q-tab-panel>
            <q-tab-panel name="历年占比">
              <CountryMultiBar></CountryMultiBar>
            </q-tab-panel>

            <q-tab-panel name="各产业增加值">
              <IndustriesBar></IndustriesBar>
            </q-tab-panel>

            <q-tab-panel name="数据预测">
              <ForeCast></ForeCast>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CountryPie from "../../components/CountryPie.vue";
import CountryBasicBar from "../../components/CountryBasicBar.vue";
import CountryMultiBar from "../../components/CountryMultiBar.vue";
import MainIndustryPie from "../../components/MainIndustryPie.vue";
import GDPIncLine from "../../components/GDPIncLine.vue";
import IndustriesBar from "../../components/IndustriesBar.vue";
import ForeCast from "../../components/ForeCast.vue";

const splitterModel = ref(40);
const selected = ref("Food");

const info = [
  {
    label: "图表",
    children: [
      {
        label: "各国GDP占比",
        icon: "pie_chart",
      },
      {
        label: "GDP",
        icon: "bar_chart",
        children: [
          {
            label: "历年GDP",
            icon: "analytics",
          },
          {
            label: "历年GDP增长率",
            icon: "trending_up",
          },
        ],
      },
      {
        label: "三大产业占比",
        icon: "construction",
        children: [
          {
            label: "最新一年占比",
            icon: "pie_chart",
          },
          {
            label: "历年占比",
            icon: "bar_chart",
          },
        ],
      },
      {
        label: "各产业增加值",
        icon: "rocket_launch",
      },
      {
        label: "数据预测",
        icon: "auto_stories",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
@import "../../quasar-variables.sass";
a {
  color: $primary;
}
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
  }
}
</style>
