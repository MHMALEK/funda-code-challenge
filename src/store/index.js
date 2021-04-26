import { createStore } from "vuex";
import { createLogger } from "vuex";

import houseDetails from "./modules/houseDetails";

// Create a new store instance.
const store = createStore({
  plugins: [createLogger()],
  modules: {
    houseDetails,
  },
});

export default store;
