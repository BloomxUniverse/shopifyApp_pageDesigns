import { configureStore } from "@reduxjs/toolkit";

import designSlice from "./designSlice";
import resultSlice from "./resultSlice";

const store = configureStore({
  reducer: {
    design: designSlice.reducer,
    result: resultSlice.reducer,
  },
});



export default store;
