import axios from "axios";

// 라우팅 주소
export const API_SERVER_HOST = "http://localhost:8080";

// 투두 리스트의 고정 api 요청 경로
const prefix = `${API_SERVER_HOST}/api/todo`;

// 투두 한 개 조회
export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);

  return res.data;
};

// 투두 목록 조회
export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  const res = await axios.get(`${prefix}/list`, { params: { page, size } });

  return res.data;
};

// 투두 등록 기능
export const postAdd = async (todoObj) => {
  // JSON.stringify(obj) => JSON문자형 // 과거에는
  const res = await axios.post(`${prefix}/`, todoObj);

  return res.data;
};
