import {
    configureStore,
    combineReducers,
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import { watcherSaga } from "./sagas/rootSaga";
  import projectsReducer from "./ducks/projectsSlice";
  import experiencesReducer from "./ducks/experiencesSlice";
  
  const sagaMiddleware = createSagaMiddleware();
  
  const reducer = combineReducers({
    projects: projectsReducer,
    experiences: experiencesReducer
  });
  
  const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
  });
  sagaMiddleware.run(watcherSaga);
  
  export default store;
  