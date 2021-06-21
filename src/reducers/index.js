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

export default rootReducer;
