// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 16:24:53
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 17:19:34
 */
import { get } from "../request";

const baseURL = "/countryInfo";

export const generalInfo = () => get(baseURL + "/general_info");

export const details = (CountryID, Year) => {
  return get(`${baseURL}/details/${CountryID}`, { params: { Year } });
};

export const allDetails = () => get(baseURL + "/all");

export const recentDetail = (CountryID) => get(`${baseURL}/recent/${CountryID}`);

export const forecast = (CountryID) => get(`${baseURL}/forecast/${CountryID}`);