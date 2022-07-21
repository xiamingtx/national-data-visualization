/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-21 22:10:29
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-21 22:10:45
 */
import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
  },
  plugins: debug ? [createLogger()] : [],
});
