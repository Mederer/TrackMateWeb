import { configureStore } from "@reduxjs/toolkit";
import { trackmateApi } from "./services/trackmate.ts";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [trackmateApi.reducerPath]: trackmateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackmateApi.middleware),
});

setupListeners(store.dispatch);
