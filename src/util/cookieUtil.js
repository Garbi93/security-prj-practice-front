import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, days = 1) => {
  // ----- 로그인시 쿠키 저장
  const expires = new Date();
  expires.setUTCDate(expires.getDate() + days); // 보관 기한한

  return cookies.set(name, value, { expires: expires, path: "/" });
};

export const getCoolie = (name) => {
  // ----- 쿠키 값 갖고 오기
  return cookies.get(name);
};

export const removeCookie = (name, path = "/") => {
  // ----- 로그 아웃시 쿠키 지우기
  cookies.remove(name, { path: path });
};
