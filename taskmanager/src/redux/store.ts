import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "./usersSlice";
import { loadersSlice } from "./loadersSlice";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        loaders: loadersSlice.reducer,
    },
});

export default store;