import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 55,
}
export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        incirement: (state) => {
            state.value = state.value + 1;
        },
        decremant: (state) => {
            state.value = state.value - 1;
        }


    },
})

export const { incirement, decremant } = counterSlice.actions

export default counterSlice.reducer