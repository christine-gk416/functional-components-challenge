import React from "react";

function NavBarChild(props) {
  return props.isLoggedIn ? (
    <button onClick={props.handleClick}>Sign in</button>
  ) : (
    <form>
      <label htmlFor="username">Username:</label>

      <input type="username" />

      <label htmlFor="password">Password:</label>

      <input type="password" />

      <button onClick={props.handleClick}>Submit</button>
    </form>
  );
}

export default NavBarChild;
