import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const url = 'https://fakestoreapi.com/products/'

const initialState = {
	loading: false,
	products: [],
	product: {},
	error: ''
}

export const getProducts = createAsyncThunk('product/getProducts', () => {
	return axios
		.get(url)
		.then((res) => {
			return res.data
		})
})

export const getProductDetails = createAsyncThunk('product/getProductDetails', (id) => {
	return axios
		.get(`${url}/${id}`)
		.then((res) => res.data)
})

const productSlice = createSlice({
	name: 'product',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.loading = false
			state.products = action.payload
		})
		builder.addCase(getProducts.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message
		})
		builder.addCase(getProductDetails.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getProductDetails.fulfilled, (state, action) => {
			state.loading = false
			state.product = action.payload
		})
		builder.addCase(getProductDetails.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message
		})
	}
})

export default productSlice.reducer