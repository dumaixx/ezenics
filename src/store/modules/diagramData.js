export default {
  actions: {},
  mutations: {},
  state: {
    data: [
      {
        "date": "03/01/00",
        "open": 44.81,
        "high": 47.19,
        "low": 44.47,
        "close": 45.41,
        "volume": 5535800
    },
    {
        "date": "03/02/00",
        "open": 45.9,
        "high": 47.95,
        "low": 45.56,
        "close": 46.69,
        "volume": 5353400
    },
    {
        "date": "03/03/00",
        "open": 47.38,
        "high": 49.44,
        "low": 46.94,
        "close": 48.06,
        "volume": 98086400
    }
    ]
  },
  getters: {
    getDateWithNewData(state) {
      state.data.forEach(v  =>  {
        v.date = new Date(v.date)
      });
      return state.data;
    }
  },
}