/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 16:24:53
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 20:04:51
 */
import { get } from "../request";

const baseURL = "/countryInfo";

export const generalInfo = () => {
  return get(baseURL + "/general_info");
};
