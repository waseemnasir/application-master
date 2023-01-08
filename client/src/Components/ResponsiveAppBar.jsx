import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Appbar.css";
const ResponsiveAppBar = () => {
  const isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  const [role, setRole] = React.useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(" /api/getRole", {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.status === "OK") {
            setRole(res.data.role.toLowerCase());
            localStorage.setItem("userRole", res.data.role.toLowerCase());
          }
        });
    }
  }, [role]);

  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "100",
        height: "15%",
      }}
      className="navbar  navbar-expand-lg  bg-dark"
    >
        <NavLink
          id="logo"
          className=" nav-link active"
          aria-current="page"
          to="/"
        >
          <img
            src={"/uploads/logo.png"}
            className="ml-md-5 img-fluid"
            style={{ width: "3em" }}
            alt="logo"
            href="/"
          />
        </NavLink>
        <button
          className="bg-light navbar-toggler mr-md-5 mr-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" navbar-toggler-icon "></span>
        </button>
        <div
          style={{ flex: "display", justifyContent: "center" }}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav sm-menu">
            <li className=" nav-item">
              <NavLink
                id="home"
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                id="contact"
                className="nav-link active"
                aria-current="page"
                to="/contact-us"
              >
                Contact us
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                id="service"
                activeClassName="menu"
                className="nav-link active dropdown-toggle"
                // data-bs-toggle="dropdown"
                to="#0"
              >
                Services
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/service">
                    History Check
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/service-buyer-guide">
                    Buyer's Guide
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/service-car-check">
                    Car Check
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/service-car-insurance">
                    Car Insurance
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/service-customer-support"
                  >
                    Customer Support
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/service-warrenty-programe"
                  >
                    Warrenty Programs
                  </Link>
                </li>
              </ul>
            </li>

            {role === "admin" && (
              <li className="nav-item dropdown">
                <NavLink
                  id="adminRoles"
                  activeClassName="menu"
                  className="nav-link active dropdown-toggle"
                  // data-bs-toggle="dropdown"
                  to="#0"
                >
                  Admin Roles
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/add-car">
                      Post New Add
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/handle-users">
                      Manage Users
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products">
                      Available Cars
                    </Link>
                  </li>
                </ul>
              </li>
            )}

            {!(role === "admin") && (
              <li className="nav-item">
                <NavLink
                  id="availableCars"
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Available Cars
                </NavLink>
              </li>
            )}

            {!isLoggedIn() ? (
              <li className="nav-item ">
                <NavLink
                  id="login"
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <NavLink
                  id="profile"
                  activeClassName="menu"
                  className="nav-link active dropdown-toggle"
                  // data-bs-toggle="dropdown"
                  to="#0"
                >
                  Profile
                </NavLink>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link
                      id="dropProfile"
                      className="dropdown-item "
                      to="/profile"
                    >
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="dropLogOut"
                      className="dropdown-item"
                      to="/"
                      onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("userId");
                        localStorage.removeItem("userRole");
                        window.location.href = "/";
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
    </nav>
  );
};

export default ResponsiveAppBar;
