import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const FilterSlice = createSlice({
	name: 'mainSlice',
	initialState: {
		value: {
			region: '',
			duration: '',
			price_max: '',
			date_departure: '',
			complexity: '',
			category: '',
		},
	},
	reducers: {
		setValueWhere: (state, action) => {
			state.value.region = action.payload
		},
		setValueDuration: (state, action) => {
			state.value.duration = action.payload
		},
		setValuePrice: (state, action) => {
			state.value.price_max = action.payload
		},
		setValueDay: (state, action) => {
			state.value.date_departure = action.payload
		},
		setComplexity: (state, action) => {
			if (state.value.complexity === action.payload) {
				state.value.complexity = ''
			} else {
				state.value.complexity = action.payload
			}
		},
		setCategory: (state, action) => {
			if (state.value.category === action.payload) {
				state.value.category = ''
			} else {
				state.value.category = action.payload
			}
		},
	},
})
export const filterSearch = createAsyncThunk('filterSearch', async param => {
	console.log(param)
	axios.get('http://164.92.190.147:8880/home/tours/', {
		params: param,
	})
})

export const {
	setValueWhere,
	setValueDuration,
	setValuePrice,
	setValueDay,
	setComplexity,
	setCategory,
} = FilterSlice.actions

export default FilterSlice.reducer
