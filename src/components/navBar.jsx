import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartBadge from "./cart/cartBadge";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ marginBottom: 15 }}
    >
      <Link className="navbar-brand" to="/">
        Shopping
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink className="nav-item nav-link" to="/products">
            Products
          </NavLink>
          <NavLink className="nav-item nav-link" to="/cart">
            Cart <CartBadge />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
