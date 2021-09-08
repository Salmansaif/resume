import { createSlice } from '@reduxjs/toolkit'

const experiencesSlice = createSlice({
  name: "experiences",
  initialState: {},
  reducers: {
    getExperiences() {},
    setExperiences(state, action) {
      const experiencesData = action.payload;
      return { ...state, ...experiencesData };
    }
  }
});

export const { getExperiences, setExperiences } = experiencesSlice.actions;

export default experiencesSlice.reducer;
