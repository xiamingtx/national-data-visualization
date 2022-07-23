<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-22 22:50:11
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 20:47:52
-->
<template>
  <div class="page">
    <div class="search">
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-select
            filled
            v-model="model"
            :options="options"
            label="选择国家"
            multiple
            emit-value
            map-options
          >
            <template
              v-slot:option="{ itemProps, opt, selected, toggleOption }"
            >
              <q-item v-bind="itemProps">
                <q-item-section>
                  <q-item-label v-html="opt.label" />
                </q-item-section>
                <q-item-section side>
                  <q-toggle
                    :model-value="selected"
                    @update:model-value="toggleOption(opt), search()"
                  />
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="content-table">
        <div class="list-icon">
          <q-icon name="list" size="1.8rem"></q-icon>
        </div>
        <q-table
          title="(最新)概览统计表"
          dense
          :rows="data"
          :columns="columns"
          row-key="name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { generalInfo } from "../../api/country_detail";
import { useStore } from "vuex";

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
    label: "人口(万人)",
    field: "Population",
  },
  {
    name: "AvgGDP",
    align: "center",
    label: "人均GDP(万元)",
    field: "AvgGDP",
  },
];

// 显示的数据
const data = ref([]);

// 数据备份
const bgData = ref([]);

// toggle记录数组
const model = ref([]);

// select显示
const options = ref([]);

const store = useStore();

const search = () => {
  console.log(bgData.value);
  if (model.value.length === 0) {
    data.value = bgData.value;
  } else {
    data.value = bgData.value.filter((item) => {
      for (let i = 0; i < model.value.length; i++) {
        if (item.CountryID === model.value[i]) {
          return true;
        }
      }
    });
  }
};

const fetchData = () => {
  generalInfo().then((res) => {
    options.value = [];
    res.data.forEach((item) => {
      item["GDP"] = parseFloat(item["GDP"]).toFixed(1);
      item["AvgGDP"] = parseInt(item["AvgGDP"]);
      options.value.push({
        label: item["CountryName"],
        value: item["CountryID"],
      });
    });
    data.value = bgData.value = res.data;
  });
  // store.dispatch("Country/getDetails");
};

onMounted(fetchData);
</script>

<style lang="scss">
.page {
  .content-table {
    .list-icon {
      position: relative;
      top: 34px;
      left: 175px;
      z-index: 2;
    }
  }
}
</style>
