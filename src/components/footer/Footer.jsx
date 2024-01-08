import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <a style={{ color: "white",textDecoration:"none" }} href="https://www.google.com/"><li  className="menuItem">About</li></a>
          <a style={{ color: "white", textDecoration: "none" }} href="https://www.google.com/"><li className="menuItem">Blog</li></a>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Made By Phu Nguyen.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.google.com/"><FaGithub /></a>
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.google.com/"><FaGitlab /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.google.com/"><FaInstagram /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.google.com/"><FaTwitter /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.google.com/"><FaLinkedin /></a> 
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;