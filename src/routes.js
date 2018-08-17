import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { getItem } from "./store";
import {
    Login,
    Navigation,
    Transactions,
    Accounts
  } from "./components";
  

class Routes extends Component {

  
    render() {
      const { user, isLoggedIn } = this.props;
      console.log(this.props, 'props')
      return (
        <Switch>  
            <Route exact path="/Login" component={Login} />
          
          {isLoggedIn && (
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route exact path="/transactions" component={Transactions} />
                <Route exact path="/accounts" component={Accounts} />

              </Switch>
            )}
          {/* Displays our Login component as a fallback */}
          {!isLoggedIn && (
            <Redirect to="/login" />
          )}
        </Switch>
      );
    }
  }


  /**
 * CONTAINER
 */
const mapState = state => {
  console.log('routes', state)
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    // isLoggedIn: state.plaid
    isLoggedIn: state.plaid,
  };
};

const mapDispatch = dispatch => {
  return {
    // loadInitialData() {
    //   dispatch(me());
    // }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes


export default withRouter(connect(mapState,mapDispatch)(Routes));