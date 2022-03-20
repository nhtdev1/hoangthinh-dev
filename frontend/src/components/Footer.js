import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer_container container">
            <h1 className="footer__title">Thinh</h1>
            <ul className="footer__list">
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="footer__link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonial" className="footer__link">
                  Testimonial
                </a>
              </li>
            </ul>
            <ul className="footer__social">
              <a
                href="skype:0988419846?chat"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-skype"></i>
              </a>
              <a
                href="https://twitter.com/nht_dev1"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="" target="_blank" className="footer__social-link">
                <i className="bx bxl-discord-alt"></i>
              </a>
            </ul>
            <span className="footer__copy">
              &#169; nht.studio.vn. All rights reverved
            </span>
          </div>
        </footer>
      </>
    );
  }
}
