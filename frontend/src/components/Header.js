import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="header" id="header">
          <nav className="nav container">
            <Link to="/" className="nav__logo">
              Thinh
            </Link>

            <Link to="/game2048" className="nav__logo">
              2048
            </Link>
            <Link to="/gamePuzzle" className="nav__logo">
              Sokudo
            </Link>
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    <i className="bx bx-home-alt-2"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="bx bx-user"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    <i className="bx bx-book"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    <i className="bx bx-briefcase-alt-2"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <i className="bx bx-message-square-detail"></i>
                  </a>
                </li>
              </ul>
            </div>
            <i className="bx bx-moon change-theme" id="theme-button"></i>
          </nav>
        </header>
      </>
    );
  }
}
