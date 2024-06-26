import jwtAxios from "../util/jwtUtil";

// 라우팅 주소
export const API_SERVER_HOST = "http://localhost:8080";

// 투두 리스트의 고정 api 요청 경로
const prefix = `${API_SERVER_HOST}/api/todo`;

// 투두 한 개 조회
export const getOne = async (tno) => {
  const res = await jwtAxios.get(`${prefix}/${tno}`);

  return res.data;
};

// 투두 목록 조회
export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  const res = await jwtAxios.get(`${prefix}/list`, { params: { page, size } });

  return res.data;
};

// 투두 등록 기능
export const postAdd = async (todoObj) => {
  // JSON.stringify(obj) => JSON문자형 // 과거에는
  const res = await jwtAxios.post(`${prefix}/`, todoObj);

  return res.data;
};

// 투두 한개 삭제
export const deleteOne = async (tno) => {
  const res = await jwtAxios.delete(`${prefix}/${tno}`);

  return res.data;
};

// 투두 한개 수정 하기
export const putOne = async (todo) => {
  const res = await jwtAxios.put(`${prefix}/${todo.tno}`, todo);

  return res.data;
};
