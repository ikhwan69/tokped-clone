import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

//declaring the types for our state
export type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
