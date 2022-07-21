/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-21 21:10:04
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-21 21:20:40
 */
import { createApp } from "vue";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import "./style.css";
import App from "./App.vue";

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
