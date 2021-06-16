import { combineReducers } from "redux";
import addTheaterMovie from "./addTheaterMovie";
import detailMovie from "./detailMovie";
import infoTheater from "./infoTheater";
import movieComingReducer from "./movieComingReducer";
import movieReducer from "./movieReducer";
import showtimeReducer from "./showtimeReducer";
import theaterMovie from "./theaterMovie";

const rootReducer = combineReducers({
    movie: movieReducer,
    movieComing: movieComingReducer,
    detailMovie: detailMovie,
    theaterMovie: theaterMovie,
    addTheater: addTheaterMovie,
    info: infoTheater,
    showtime: showtimeReducer
})


export default rootReducer