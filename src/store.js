import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./AdopetedPetSlice";
import { petApi } from "./petApiService";
import searchParams from "./SearchParamsSlice";

const store = configureStore({
    reducer:{
        adoptedPet,
        searchParams,
        [petApi.reducerPath]: petApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petApi.middleware),
});

export default store;