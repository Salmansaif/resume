import { call, put } from "redux-saga/effects";
import { setExperiences } from "../../ducks/experiencesSlice";
import { requestGetExperiences } from "../requests/experiences";

export function* handleGetExperiences(action) {
  try {
    // const { id, test } = action.payload;
    // console.log(id);
    const response = yield call(requestGetExperiences, action.payload);
    const { data } = response;
    // console.log("handler:", data);
    yield put(setExperiences({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
