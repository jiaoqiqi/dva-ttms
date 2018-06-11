import {queryMovies} from "../services/movieList";

export default {

  namespace: 'movieList',

  state: {
    list: [
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
      },
      {
        imgPath: "/src/assets/复联3.jpg",
        movieName: "复联3",
        director: "安东尼·罗素, 乔·罗素",
        actors: "小罗伯特·唐尼,克里斯·海姆斯沃斯,乔什·布洛林",
        type: "动作,冒险,奇幻",
        language: "英语",
        time: " 151分钟",
        description: "漫威影业为您倾力呈现万众期待的终极力作《复仇者联盟3：无限战争》！" +
        "复仇者联盟的一众超级英雄，必须抱着牺牲一切的信念，"
      },
      {
        imgPath: "/src/assets/多啦A梦.jpg",
        movieName: "哆啦A梦：大雄的金银岛",
        director: "今井一晓",
        actors: "水田山葵,大原惠美,嘉数由美,木村昂,关智一",
        type: "喜剧,动画,奇幻,冒险",
        language: "日语",
        time: " 109分钟",
        description: "《哆啦 A 梦：大雄的金银岛》" +
        "创造了哆啦 A 梦系列剧场版在日本的最高观影人次、最高票房双记录！" +
        "新篇中七只迷你哆啦闪亮登场，故事也有了新鲜的发展。"
      },
    ]
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({
        type: 'save',
        payload: true
      });
      const response = yield call(queryMovies(), payload);
      if (response && response.code === 0) {
        yield  put({
          type: 'movieList',
          payload: response.data.movieList
        });
      } else {
        yield put({
          type: 'saveRankList',
          payload: {
            error: '服务器错误',
            loading: false,
          },
        });
      }
      yield put({
        type: 'changeLoading',
        payload: false,
      })

    },

    reducers: {
      save(state, action) {
        return {...state, ...action.payload};
      },
    },
    }
};
