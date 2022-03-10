import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationSliceState {
  location: string
}

const initialState: LocationSliceState = {
  location: "SanDiego"
}

const slice = createSlice({
  name: "LocationSlice",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    }
  }
})

export default slice.reducer

export const LocationStore = slice.actions