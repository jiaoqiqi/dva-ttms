import request from '../utils/request';

export async function queryMovies() {
  return request(`/movieList`);
}

// export async function queryMovies(params) {
//   return request(`/apiv1/problem/list?${stringify(params)}`);
// }


