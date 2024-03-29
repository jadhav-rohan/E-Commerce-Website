import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import { isAuthenticated, signout } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#000000" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => {
  const user = isAuthenticated();
  var role = 0;
  if(user && user.user && user.user.role){
    role = user.user.role;
  }
  console.log(role)
  return (
    <div>
      <ul className="f nav nav-tabs">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            style={currentTab(history, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        {role === 1 &&
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            A.Dashboard
          </Link>
        </li>
        }
        {role === 0 && isAuthenticated() && 
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user.dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            U.Dashboard
          </Link>
        </li>
        } 
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                SignUp
              </Link>
            </li>

            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                SignIn
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link text-white"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
