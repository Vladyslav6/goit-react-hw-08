import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contacts/ContactSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { authReduser } from "./auth/slice";
//

//

//
export const store = configureStore({
  reducer: {
    item: contactSlice,
    filter: filtersReducer,
    auth: authReduser,
  },
});
