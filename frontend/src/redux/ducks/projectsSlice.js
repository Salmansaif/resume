import { createSlice } from '@reduxjs/toolkit'

const projectsSlice = createSlice({
  name: "projects",
  initialState: {},
  reducers: {
    getProjects() {},
    setProjects(state, action) {
      const userData = action.payload;
      return { ...state, ...userData };
    }
  }
});

export const { getProjects, setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
