import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNav';
import AuthContext from './context/auth-context';
import Footer from './components/Footer/Footer';
import HomeProducts from './pages/HomeProducts';

import './App.css';
import ContactUs from './pages/ContactUs';
import LoginPage from './pages/Login';

class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation/>
            <main className="main-content">
              <Switch>
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && (
                  <Redirect from="/auth" to="/events" exact />
                  
                )}
                {!this.state.token && (
                  <Route path="/home" component={HomeProducts} />
                )}
                <Route path="/events" component={EventsPage} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/auth" component={AuthPage} />
                <Route path="/login" component={LoginPage} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                )}
                {!this.state.token && <Redirect to="/home" exact />}
              </Switch>
            </main>
            
            <Footer />
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
