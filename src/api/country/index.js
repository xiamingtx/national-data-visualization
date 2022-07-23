/*
 * @Description: Description of this files
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-22 22:57:00
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-22 23:09:12
 */
import { get } from "../request";

const baseURL = "/country";

export const list = () => {
  return get(baseURL + "/countries")
};
