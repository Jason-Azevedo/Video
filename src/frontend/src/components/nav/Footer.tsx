import React from "react";

import { ReactComponent as Logo } from "../../assets/svg/brand-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/square-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram.svg";

export function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer container">
        {/* Icon and Vidio */}
        <div className="footer-brand">
          <Logo className="icon--24" />
          <h2 className="title-brand">Vidio</h2>
        </div>

        {/* Contents */}
        <div className="footer-section">
          <h3 className="title--16 dim bold uppercase text-center">Connect</h3>
          <div className="footer-socials">
            <a href="https://twitter.com">
              <TwitterIcon className="icon--24" />
            </a>
            <a href="https://facebook.com">
              <FacebookIcon className="icon--24" />
            </a>
            <a href="https://instagram.com">
              <InstagramIcon className="icon--24" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="title--16 dim bold uppercase text-center">Contact</h3>
          <p className="text--14">
            <span className="text--14 semi-bold bright">
              General Inquiries:{" "}
            </span>
            info@vidio.com
          </p>
          <p className="text--14">
            <span className="text--14 semi-bold bright">Support: </span>
            support@vidio.com
          </p>
        </div>

        <div className="footer-section">
          <h3 className="title--16 dim bold uppercase text-center">Call</h3>
          <p className="text--14">
            <span className="text--14 semi-bold bright">
              General Inquiries:{" "}
            </span>
            +1 801 702 4456
          </p>
          <p className="text--14">
            <span className="text--14 semi-bold bright">Support: </span>
            +1 601 743 7890
          </p>
        </div>

        <div className="footer-section">
          <h3 className="title--16 dim bold uppercase text-center">Address</h3>
          <p className="text--14">
            <span className="text--14 semi-bold bright">Head Office: </span>
            21 Ave. Los Angeles. California. US
          </p>
        </div>

        {/* Copyright */}
        <p className="text--16 center-text bright">
          Vidio &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
