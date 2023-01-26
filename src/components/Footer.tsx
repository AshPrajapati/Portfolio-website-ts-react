import React from "react";
import { AUTHORS } from "../StaticValues";

function Footer() {
  return (
    <div className="container text-center user-select-all">
      <kbd> &copy; Created By {AUTHORS} </kbd>
    </div>
  );
}

export default Footer;
