import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from '../Styles/Header'
export const Header = () => {
  return (
    <HeaderStyle className="header">
      <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
      </ul>
    </HeaderStyle>
  );
};
