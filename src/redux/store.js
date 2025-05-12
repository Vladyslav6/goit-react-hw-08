import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReduser } from "./auth/slice";
//
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
//

const persistConfig = {
  key: "root-auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReduser);
//
export const store = configureStore({
  reducer: {
    item: contactSlice,
    filter: filtersReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
