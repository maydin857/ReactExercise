import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <p className="navbar-brand">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
          </p>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
