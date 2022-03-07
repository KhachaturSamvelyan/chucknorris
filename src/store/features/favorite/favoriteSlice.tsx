import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../../utils/getLocalStorage';


type State = {
  favorite?: any;
  favs: any;
}

const initialState : State = {
    favs : getLocalStorage('store')
}


export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
      favoriteAddReducer: (state, action) => {
        state.favs.push(action.payload)
      },
      favoriteDeleteReducer: (state, action) => {
        state.favs = state.favs.filter((item: any) => {
          return item.id !== action.payload;
        })
       
      }
    },
  })
  
  export const { favoriteAddReducer, favoriteDeleteReducer } = favoriteSlice.actions

  export default favoriteSlice.reducer