import mockjs from 'mockjs';
import { getMovieList } from "./mock/movieList";

// 是否禁用代理
// const noProxy = process.env.NO_PROXY === 'true';

getMovieList();

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {

  'GET /movieList': getMovieList,
};

// export default (noProxy ? {} : delay(proxy, 1000));


