import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/login">
            <Login></Login>
          </PrivateRoute>
          <PrivateRoute path="*">
            <Error></Error>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
