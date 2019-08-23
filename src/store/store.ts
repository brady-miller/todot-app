import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth.module';
import alert from './modules/alert.module';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Todot',
  },
  modules: {
    alert,
    auth,
  },
});
