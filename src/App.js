import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Checkout from './Components/Checkout/Checkout';
import Order from './Components/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const LoggedInContext = createContext();
export const productContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <LoggedInContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <productContext.Provider value={[selectedProduct, setSelectedProduct]}>
        <Router>
          <Switch>
            <Route path="/login">
            <Login />
          </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Order />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </productContext.Provider>
    </ LoggedInContext.Provider>
  );
}

export default App;
