import { combineReducers } from "redux";
import addTheaterMovie from "./addTheaterMovie";
import detailMovie from "./detailMovie";
import sysTheaterMovie from "./infoSysTheater";
import infoTheater from "./infoTheater";
import movieComingReducer from "./movieComingReducer";
import movieReducer from "./movieReducer";
import showtimeReducer from "./showtimeReducer";
import theaterMovie from "./theaterMovie";
import loginReducer from "./loginReducer";
import addSysMovieReducer from "./addSysMovie";
import handleDetailReducer from "./HandleButtonReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    movieComing: movieComingReducer,
    detailMovie: detailMovie,
    theaterMovie: theaterMovie,
    addTheater: addTheaterMovie,
    info: infoTheater,
    showtime: showtimeReducer,
    login: loginReducer,
    sysTheaterMovie,
    addSysMovie:addSysMovieReducer,
    button: handleDetailReducer
})


export default rootReducer