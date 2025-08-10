import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false //
}
// const fetchUserById = createAsyncThunk(
//     'user/fetchUserByIdStatus',
//     async (userId: number, thunkApı) => {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         return response.data
//     },
// )

export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    return response.data;

})
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        //Httpp isteği olmaz ise kullanılır
    },
    extraReducers: (builder) => {
        //Http isteği varsa kullanılır !
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        })
    }

})
export const { } = userSlice.actions //sadece reducers varsa kullanılır
// //async thunk export edilir

export default userSlice.reducer