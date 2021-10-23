import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <AuthWrapper>
    //   <Router>
    //     <Switch>
    //       <PrivateRoute exact path="/">
    //         <Dashboard></Dashboard>
    //       </PrivateRoute>
    //       <PrivateRoute path="/login">
    //         <Login></Login>
    //       </PrivateRoute>
    //       <PrivateRoute path="*">
    //         <Error></Error>
    //       </PrivateRoute>
    //     </Switch>
    //   </Router>
    // </AuthWrapper>
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route path="*">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
