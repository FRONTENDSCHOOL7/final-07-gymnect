import axios from 'axios';

const URL = "https://api.mandarin.weniv.co.kr/";

/* 기본 인스턴스 */
export const instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
/* 이미지 인스턴스 */
export const imgInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});