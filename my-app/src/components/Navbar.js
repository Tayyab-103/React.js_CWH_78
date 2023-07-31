import React from "react";
import PropTypes from "prop-types";

// let name = "Tayyab";

export default function Navbar(props) {
  // function formatName(user) {
  //   return user.firstName + " " + user.lastName;
  // }

  // const user = {
  //   firstName: "Harper",
  //   lastName: "Perez",
  // };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.tilte}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <h1>Hello, {formatName(user)}!</h1>

      <div className="blank">lovely</div>

      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container">
        <div>
          <h1> Hello {name}</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          consectetur eius reiciendis ducimus cumque ex quis voluptatibus
          tempore optio iure? Eligendi veniam dignissimos amet. Maxime facilis
          ea maiores exercitationem doloribus.
        </div>
      </div> */}
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired };

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here"
};
