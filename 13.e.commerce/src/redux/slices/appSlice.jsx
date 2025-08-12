import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false
}
export const appSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})
export const { } = appSlice.actions

export default appSlice.reducer




