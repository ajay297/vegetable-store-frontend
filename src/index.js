import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk'
import SignUp from "./Components/Register/Signup";
import Login from './Components/Login/Login';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './store/reducers/cart';
import dataReducer from './store/reducers/data';
import Jumbo from './Components/Jumbo/Jumbo';
import Grid from './Components/Grid/Grid';
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Dashboard/Dashboard";
import ShopCart from './Components/ShopCart/ShopCart';
import ShopItem from './Components/ShopCart/ShopItem';
import Contact from "./Components/Contact/Contact";
import Order from './Components/Order/Order';
import Checkout from './Components/Checkout/Checkout';

const rootReducer = combineReducers({
  cart: cartReducer,
  data: dataReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Jumbo name="Home"/>
            <Grid />
          </Route>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/shopcart" component={ShopCart} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

