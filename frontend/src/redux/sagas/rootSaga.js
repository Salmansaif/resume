import { all, takeLatest } from "redux-saga/effects";
import { handleGetProjects } from "./handlers/projects";
import { getProjects } from "../ducks/projectsSlice";
import { handleGetExperiences } from "./handlers/experiences";
import { getExperiences } from "../ducks/experiencesSlice";

export function* watcherSaga() {
  yield all([takeLatest(getProjects.type, handleGetProjects), takeLatest(getExperiences.type, handleGetExperiences)]);
}
