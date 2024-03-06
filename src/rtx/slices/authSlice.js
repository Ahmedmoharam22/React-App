import { createSlice } from "@reduxjs/toolkit";

const localStorageData = JSON.parse(localStorage.getItem('LoginUser')) || null ;
const authSlice = createSlice({
    name: "auth",
    initialState:{
        isAuth: localStorageData ? true : false,
        logedInData:localStorageData ,
    },
    reducers:{
        login: (state , action) => {
            state.isAuth = true
            state.logedInData = action.payload
            localStorage.setItem('LoginUser' , JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.isAuth = false
            state.logedInData = null
            localStorage.removeItem('LoginUser')

        }
    }
})
export const {login , logout} = authSlice.actions
export default authSlice.reducer