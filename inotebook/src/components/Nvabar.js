import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nvabar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate("/login");
  }

  //No Need
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/">
        iNotebook
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse  justify-content-between"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0"> */}

        {!localStorage.getItem("token") ? (
          <form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">
              SignUp
            </Link>
          </form>
        ) : (
          <button onClick={handleLogout} className="btn btn-primary"> Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Nvabar;
