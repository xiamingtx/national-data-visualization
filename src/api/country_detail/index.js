/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 16:24:53
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-24 23:49:40
 */
import { get } from "../request";

const baseURL = "/countryInfo";

export const generalInfo = () => get(baseURL + "/general_info");

export const details = CountryID => get(`${baseURL}/details/${CountryID}`);

export const allDetails = () => get(baseURL + "/all");

export const recentDetail = CountryID => get(`${baseURL}/recent/${CountryID}`)
