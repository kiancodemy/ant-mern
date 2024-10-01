import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./api/apislice";
import authslice from "./slices/authslice";
import productSlice from "./slices/productSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["productAuth"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authslice,
    productAuth: productSlice,
  })
);

export const store = configureStore({
  reducer: { persistedReducer, [mainApi.reducerPath]: mainApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mainApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export let persistor = persistStore(store);
