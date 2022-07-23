// /*
//  * @Description: Description of this file
//  * @Version: 2.0
//  * @Author: 夏明
//  * @Date: 2022-07-23 20:00:12
//  * @LastEditors: 夏明
//  * @LastEditTime: 2022-07-23 20:43:05
//  */
// import { list } from "../../api/country";
// import { generalInfo } from "../../api/country_detail";

// const state = () => ({
//   country: null,
//   countryDetail: null,
//   options: null,
// });

// const getters = () => {
//   optionsData: (state) => {
//     if (!state.countryDetail) return;
//     let data = [];
//     state.countryDetail.forEach((item) => {
//       data.push({ name: item.CountryName, value: item.GDP });
//     });
//     return data;
//   };
// };

// const actions = {
//   getDetails({ commit }) {
//     generalInfo().then((res) => {
//       const tmpOptions = [];
//       res.data.forEach((item) => {
//         item["GDP"] = parseFloat(item["GDP"]).toFixed(1);
//         item["AvgGDP"] = parseInt(item["AvgGDP"]);
//         tmpOptions.push({
//           label: item["CountryName"],
//           value: item["CountryID"],
//         });
//       });
//       commit("SET_COUNTRY_DETAIL", res.data);
//       commit("SET_OPTIONS", tmpOptions);
//     });
//   },
// };

// const mutations = {
//   SET_COUNTRY_DETAIL: (state, data) => {
//     state.countryDetail = data;
//   },
//   SET_OPTIONS: (state, data) => {
//     state.options = data;
//   },
// };

// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations,
// };
