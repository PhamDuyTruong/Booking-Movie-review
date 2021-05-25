import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ForgotPasswword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import Signup from "./pages/Signup";
import UseTerm from "./pages/useTerm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <AppLayout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/movie">
                <Movie />
              </Route>
              <Route path="/moviedetail">
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
              <Route>
                <Redirect to="/"/>
              </Route>
            </Switch>
          </AppLayout>
        </Route>
        
      </Switch>
     
    </BrowserRouter>
  );
}

export default App;
