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
import addSysMovieReducer from "./addSysMovie";
import handleDetailReducer from "./HandleButtonReducer";
import ticketMovie from "./TicketReducer";
import infoUser from "./infoUser";
import addGheDatReducer from "./datGheReducer";


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
  addSysMovie: addSysMovieReducer,
  button: handleDetailReducer,
  infoUser
  ticket: ticketMovie, 
  ghe: addGheDatReducer

});

export default rootReducer;
