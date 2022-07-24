<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-24 10:41:59
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 16:48:49
-->
<template>
  <div class="page">
    <div class="select">
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

    <div class="content-table">
      <div class="list-icon">
        <q-icon name="list" size="1.6rem"></q-icon>
      </div>
      <div class="q-pa-md">
        <q-table
          title="详情统计表"
          :rows="data"
          :columns="columns"
          row-key="name"
          :visible-columns="visibleColumns"
          color="primary"
        >
          <template v-slot:top="props">
            <div class="col-2 q-table__title">详情统计表</div>

            <q-space />

            <div v-if="$q.screen.gt.xs" class="col">
              <q-toggle
                v-model="visibleColumns"
                val="CountryName"
                label="国家"
              />
              <q-toggle v-model="visibleColumns" val="GDP" label="GDP" />
              <q-toggle
                v-model="visibleColumns"
                val="Population"
                label="人口"
              />
              <q-toggle v-model="visibleColumns" val="AvgGDP" label="人均GDP" />
              <q-toggle
                v-model="visibleColumns"
                val="PrimaryIndustry"
                label="第一产业贡献率"
              />
              <q-toggle
                v-model="visibleColumns"
                val="SecondaryIndustry"
                label="第二产业贡献率"
              />
              <q-toggle
                v-model="visibleColumns"
                val="TertiaryIndustry"
                label="第三产业贡献率"
              />
              <q-toggle
                v-model="visibleColumns"
                val="FarmingIndustry"
                label="农林渔业增加值"
              />
              <q-toggle
                v-model="visibleColumns"
                val="Industry"
                label="工业增加值"
              />
              <q-toggle
                v-model="visibleColumns"
                val="ConstructionIndustry"
                label="建筑业增加值"
              />
              <q-toggle
                v-model="visibleColumns"
                val="WholesaleAndRetail"
                label="批发和零售业增加值"
              />
              <q-toggle
                v-model="visibleColumns"
                val="TransportationAndStorage"
                label="交通运输、仓储和邮政业"
              />
              <q-toggle
                v-model="visibleColumns"
                val="AccommodationAndCatering"
                label="住宿和餐饮业增加值"
              />
              <q-toggle
                v-model="visibleColumns"
                val="FinancialBusiness"
                label="金融业增加值"
              />
              <q-toggle
                v-model="visibleColumns"
                val="RealtyBusiness"
                label="房地产业增加值"
              />
              <q-toggle
                v-model="visibleColumns"
                val="Others"
                label="其他产业增加值"
              />
              <q-toggle v-model="visibleColumns" val="InfoYear" label="年份" />
            </div>
            <q-select
              v-else
              v-model="visibleColumns"
              multiple
              borderless
              dense
              options-dense
              :display-value="$q.lang.table.columns"
              emit-value
              map-options
              :options="columns"
              option-value="name"
              style="min-width: 150px"
            />

            <q-btn
              flat
              round
              dense
              :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="props.toggleFullscreen"
              class="q-ml-md"
            />
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { details, allDetails } from "../../api/country_detail";
import { generalInfo } from "../../api/country_detail";

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
  {
    name: "PrimaryIndustry",
    align: "center",
    label: "第一产业贡献率",
    field: "PrimaryIndustry",
  },
  {
    name: "SecondaryIndustry",
    align: "center",
    label: "第二产业贡献率",
    field: "SecondaryIndustry",
  },
  {
    name: "TertiaryIndustry",
    align: "center",
    label: "第三产业贡献率",
    field: "TertiaryIndustry",
  },
  {
    name: "FarmingIndustry",
    align: "center",
    label: "农林渔业增加值(亿元)",
    field: "FarmingIndustry",
  },
  {
    name: "Industry",
    align: "center",
    label: "工业增加值(亿元)",
    field: "Industry",
  },
  {
    name: "ConstructionIndustry",
    align: "center",
    label: "建筑业增加值(亿元)",
    field: "ConstructionIndustry",
  },
  {
    name: "WholesaleAndRetail",
    align: "center",
    label: "批发和零售业增加值(亿元)",
    field: "WholesaleAndRetail",
  },
  {
    name: "TransportationAndStorage",
    align: "center",
    label: "交通运输、仓储和邮政业(亿元)",
    field: "TransportationAndStorage",
  },
  {
    name: "AccommodationAndCatering",
    align: "center",
    label: "住宿和餐饮业增加值(亿元)",
    field: "AccommodationAndCatering",
  },
  {
    name: "FinancialBusiness",
    align: "center",
    label: "金融业增加值(亿元)",
    field: "FinancialBusiness",
  },
  {
    name: "RealtyBusiness",
    align: "center",
    label: "房地产业增加值(亿元)",
    field: "RealtyBusiness",
  },
  {
    name: "Others",
    align: "center",
    label: "其他产业增加值(亿元)",
    field: "Others",
  },
  {
    name: "InfoYear",
    align: "center",
    label: "年份",
    field: "InfoYear",
  },
];

const data = ref([]);

// 数据备份
const bgData = ref([]);

const visibleColumns = ref([
  "CountryName",
  "GDP",
  "Population",
  "AvgGDP",
  "PrimaryIndustry",
  "SecondaryIndustry",
  "TertiaryIndustry",
  "FarmingIndustry",
  "Industry",
  "ConstructionIndustry",
  "WholesaleAndRetail",
  "TransportationAndStorage",
  "AccommodationAndCatering",
  "FinancialBusiness",
  "RealtyBusiness",
  "Others",
  "InfoYear",
]);

const options = ref([]);

const model = ref([]);

const fetchData = () => {
  allDetails().then((res) => {
    options.value = [];
    res.data.forEach((item) => {
      for (let key in item) {
        if (
          key !== "CountryInfoID" &&
          key !== "CountryName" &&
          key !== "InfoYear" &&
          key !== "Population" &&
          key !== "AvgGDP" &&
          key !== "CountryID"
        ) {
          if (item[key] === null) {
            item[key] = "暂无数据";
            continue;
          }
          item[key] = parseFloat(item[key]).toFixed(1);
        }
        if (
          key === "PrimaryIndustry" ||
          key === "SecondaryIndustry" ||
          key === "TertiaryIndustry"
        ) {
          item[key] = item[key] + "%";
        }
      }
    });
    bgData.value = data.value = res.data;
  });
  generalInfo().then((res) => {
    options.value = [];
    res.data.forEach((item) => {
      options.value.push({
        label: item["CountryName"],
        value: item["CountryID"],
      });
    });
  });
};

const search = () => {
  if (model.value.length === 0) {
    data.value = bgData.value;
  } else {
    data.value = bgData.value.filter((item) => {
      for (let i = 0; i < model.value.length; i++) {
        console.log(item.CountryID);
        console.log(model.value[i]);
        if (item.CountryID === model.value[i]) {
          return true;
        }
      }
    });
  }
};

onMounted(fetchData);
</script>

<style lang="scss" scoped>
.page {
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  .content-table {
    position: relative;
    .list-icon {
      position: absolute;
      top: 75px;
      left: 135px;
      z-index: 2;
    }
  }
}
</style>
