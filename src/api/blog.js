import request from "../utils/axios";

const base = import.meta.env.VITE_API_BASE_URL;
console.log(base)
console.log(import.meta)

export const getAllArticle = (data) => {
  return request.post('/blog/article/list', data);
};

export const getAllCategory = () => {
  return request.get('blog/article/list');
};

export const getInfo = () => {
  return request.post('blog/info')
}