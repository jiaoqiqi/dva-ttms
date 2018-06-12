const movieList = [];
for (let i = 0; i < 10; i++) {
  movieList.push(
    {
      imgPath: "/src/assets/超时空同居.jpg",
      movieName: "超时空同居",
      director: "苏伦",
      actors: "雷佳音,佟丽娅,陶虹,徐峥",
      type: "喜剧,奇幻",
      language: "汉语普通话",
      time: " 101分钟",
      description: "来自2018年谷小焦（佟丽娅 饰）与1999年陆鸣（雷佳音 饰），" +
      "两人时空重叠意外住在同一个房间。从互相嫌弃到试图“共谋大业”，阴差阳错发生了一系列好笑的事情"
    }
  )
}

export function getMovieList(req,res) {
  const result = {
    data: {
      list: movieList,
    },
  };
  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}

export default {
  getMovieList,
};
