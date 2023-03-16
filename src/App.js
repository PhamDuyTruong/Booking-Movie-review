import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {lazy, Suspense} from 'react'
import AppLayout from "./layouts/AppLayout";
import axios from 'axios'
const Home = lazy(() => import("./pages/Home"));
const ForgotPasswword = lazy(() => import("./pages/ForgotPassword"))
const LoginPage = lazy(() => import("./pages/LoginPage"))
const Movie = lazy(() => import("./pages/Movie"))
const MovieDetail = lazy(() => import("./pages/MovieDetail"))
const PageNotFound = lazy(() =>import("./pages/PageNotFound"))
const Signup = lazy(()=> import("./pages/Signup"))
const TheaterMovie = lazy(() => import("./pages/theaterMovie"))
const UseTerm = lazy(()=> import("./pages/useTerm"))
const SysTheaterDetail = lazy(() => import("./pages/SysTheaterDetail"))
const TicketPage = lazy(() =>import("./pages/TicketPage"))
const UserInfo = lazy(() => import("./pages/UserInfo"))
const UserRoute = lazy(() =>import("./auth/UserRoute"))
function App() {
  axios.defaults.withCredentials = false;
  return (
    <Suspense fallback={<div>
        <i className="fa fa-spinner fa-spin" style={{color:"#000"}}></i>Loading...
    </div>}>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <AppLayout>
            <Switch>
              <Route path="/" exact>
                <Home />
                <Movie />
                <TheaterMovie />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/movie">
                <Movie />
              </Route>
              <Route path="/moviedetail/:movieId">
                <MovieDetail />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/useterm">
                <UseTerm />
              </Route>
              <Route path="/forgot">
                <ForgotPasswword />
              </Route>
              <Route path="/theater">
                <TheaterMovie />
              </Route>
              <UserRoute path="/userInfo">
                <UserInfo />
              </UserRoute>
              <Route path="/theaterdetail/:theaterId">
                <SysTheaterDetail />
              </Route>
              <Route path="/ticketdetail/:maLichChieu">
                <TicketPage />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
