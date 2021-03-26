import { Link } from "@reach/router";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import * as React from "react";
import { useTheme } from "./ThemeContext";

export const Nav = (): React.ReactElement => {
  const { theme, toggle } = useTheme();
  return (
    <nav
      className={
        theme === "dark"
          ? "navbar navbar-expand-lg navbar-dark bg-dark"
          : "navbar navbar-expand-lg navbar-light bg-light"
      }
    >
      <a className="navbar-brand" href="/">
        Meme Generator
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Home
          </Link>

          <Link className="nav-item nav-link" to="/random-meme">
            Random Meme
          </Link>

          <Link className="nav-item nav-link" to="/about">
            About
          </Link>
        </div>
        <BootstrapSwitchButton
          checked={false}
          size="lg"
          onlabel="Light"
          onstyle={"light"}
          offlabel="Dark"
          offstyle={"dark"}
          onChange={toggle}
        />
      </div>
    </nav>
  );
};
