import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    data: {
      },
}

export const resultSlice = createSlice({
    name: 'resultDetail',
    initialState,
    reducers: {
        addResultDetail: (state,action) =>{
            state.data = action.payload
        } 
    }
  });

export const { addResultDetail } = resultSlice.actions;
export default resultSlice.reducer;