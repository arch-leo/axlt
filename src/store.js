import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navType: 'wash/get', // 路由
    vipNo: '10001', // 新增时会员卡号
  },
  mutations: {
    setNavType(state, val) { // 更新路由
      state.navType = val;
    },
    setVipNo(state, val) { // 更新新增会员卡号
      state.vipNo = val;
    },
  },
  actions: {

  },
});
