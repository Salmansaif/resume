import { call, put } from "redux-saga/effects";
import { setProjects } from "../../ducks/projectsSlice";
import { requestGetProjects } from "../requests/projects";

export function* handleGetProjects(action) {
  try {
    // const { id, test } = action.payload;
    // console.log(id);
    const response = yield call(requestGetProjects, action.payload);
    const { data } = response;
    console.log("handler:", data);
    yield put(setProjects({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
