import { combineReducers } from "redux";
import movieComingReducer from "./movieComingReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    movieComing: movieComingReducer
})


export default rootReducer