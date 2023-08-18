import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		phone: null,
		isPhone: false
	},
	reducers: {
		setIsPhone: (state, action) => {
			state.isPhone = action.payload
		},
		setUser: (state, action) => {
			state.user = action.payload
		},
		setPhone: (state, action) => {
			state.phone = action.payload
		}
	}
})

// Action creators are generated for each case reducer function
export const { setIsPhone, setUser, setPhone } = counterSlice.actions

export default counterSlice.reducer
