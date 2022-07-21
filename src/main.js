/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-21 21:10:04
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-21 22:36:33
 */
import { createApp } from "vue";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.use(router);

// Install the store instance as a plugin
myApp.use(store);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
