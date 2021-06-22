import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ForgotPasswword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup";
import TheaterMovie from "./pages/theaterMovie";
import UseTerm from "./pages/useTerm";
import SysTheaterDetail from "./pages/SysTheaterDetail";
import TicketPage from './pages/TicketPage'

function App() {
  return (
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
  );
}

export default App;
