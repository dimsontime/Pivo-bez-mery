import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import hobbieModule from "@/slicers/HobbiesSlice";

export default createStore({
  state: {
    canvas1Value: null,
    canvas2Value: null,
  },
  mutations: {
    setCanvas1Value(state, value) {
      state.canvas1Value = value;
    },
    setCanvas2Value(state, value) {
      state.canvas2Value = value;
    }
  },
  // plugins:[createPersistedState({
  //   key:'hobbies',
  //   paths: ['hobbies']
  // })],
  // modules: {
  //   hobbies: hobbieModule
  // }
});
