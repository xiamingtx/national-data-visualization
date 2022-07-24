/*
 * @Description: Description of this files
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-22 22:57:00
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 12:48:07
 */
import { get } from "../request";

const baseURL = "/country";

export const list = () => {
  return get(baseURL + "/countries");
};
