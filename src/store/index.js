import { createStore } from "vuex";
import moduleShop from "./shop";

const store = createStore({
  modules: {
    moduleShop,
  },
});
export default store;
