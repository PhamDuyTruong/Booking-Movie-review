import { combineReducers } from "redux";
import addTheaterMovie from "./addTheaterMovie";
import detailMovie from "./detailMovie";
import movieComingReducer from "./movieComingReducer";
import movieReducer from "./movieReducer";
import theaterMovie from "./theaterMovie";

const rootReducer = combineReducers({
    movie: movieReducer,
    movieComing: movieComingReducer,
    detailMovie: detailMovie,
    theaterMovie: theaterMovie,
    addTheater: addTheaterMovie
})


export default rootReducer