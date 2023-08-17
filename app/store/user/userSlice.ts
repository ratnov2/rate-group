import { authApi } from '@/api/dataAPI'
import { removeTokensStorage } from '@/services/auth/auth.helper'
import { createSlice } from '@reduxjs/toolkit'
import { checkAuth, loginAction, logoutAction, registerAction } from './user.actions'

export interface TypesUserState {
  user: {
    email:string ,
    isAdmin:boolean 
  } | null,
  status: boolean
}
export interface TypesUserState2 {
  user:TypesUserState
}


const initialState: TypesUserState = {
  user:null,
  status: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { },
  extraReducers(builder){
    builder
      .addCase(registerAction.pending,(state, actions)=>{
        state.status = true
      })
      .addCase(registerAction.fulfilled,(state, actions)=>{
        state.status = false
        //state.user = actions.payload
      })
      .addCase(registerAction.rejected,(state, actions)=>{
        state.status = false
      })
      .addCase(loginAction.pending,(state, actions)=>{
        state.status = true
      })
      .addCase(loginAction.fulfilled,(state, {payload})=>{
        state.status = false
        state.user = payload.user 
      })
      .addCase(loginAction.rejected,(state, actions)=>{
        state.status = false
      })
      .addCase(logoutAction.fulfilled,(state, actions)=>{
        state.user = null
        removeTokensStorage()
      }).addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
  }
})

export const { } = counterSlice.actions
export default counterSlice.reducer