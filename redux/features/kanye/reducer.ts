import { createReducer } from "@reduxjs/toolkit"
import { getKanyeQuote } from "./actions"

export type KanyeState = {
  data: { quote: string }
  isLoading: boolean
  isError: boolean
}

const initialState: KanyeState = {
  data: { quote: "click that button" },
  isLoading: false,
  isError: false,
}

export const kanyeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getKanyeQuote.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getKanyeQuote.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.data = payload
    })
    .addCase(getKanyeQuote.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
})
