import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const locationSelector = createSelector(
  (state: RootState) => state.location,
  (location) => location.location
)