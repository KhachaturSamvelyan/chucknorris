import { configureStore } from '@reduxjs/toolkit';
import { setLocalStorage } from '../utils/getLocalStorage';
import  favoriteReducer  from './features/favorite/favoriteSlice';

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
    },
})

store.subscribe(() => {
    setLocalStorage('store', store.getState().favorite.favs)
});


export type RootState = ReturnType<typeof favoriteReducer>