<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-21 21:27:12
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 17:03:53
-->
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-space />
        <q-toolbar-title>
          Welcome To National Data Visualization Page!
        </q-toolbar-title>
        <q-space />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          <q-menu fit>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Quasar yyds</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list padding class="text-primary">
        <q-item
          clickable
          v-ripple
          active-class="menu-active"
          v-for="item in menuRoutes"
          :key="item.meta.title"
          :active="item.name === route.name"
          :to="item.path"
        >
        
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>

          <q-item-section>{{ item.meta.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { menuRoutes } from "../router/index";
import { useRoute } from "vue-router";

const leftDrawerOpen = ref(false);

const route = useRoute();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<style lang="sass" scoped>
.menu-active
  color: white
  background: #F2C037
</style>
