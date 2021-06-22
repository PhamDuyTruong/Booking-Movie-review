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
<<<<<<< HEAD
import signupReducer from "./signupReducer";

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
  signup: signupReducer,
});
=======
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
>>>>>>> 83249c746447166d23e31b44cbf81c8462ad98cc

export default rootReducer;
