import { combineReducers } from "redux";
import detailMovie from "./detailMovie";
import movieComingReducer from "./movieComingReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    movieComing: movieComingReducer,
    detailMovie: detailMovie
  
})


export default rootReducer