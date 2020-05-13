import React from "react";
import "./style.css";

export function Footer() {
  return (
    <footer className="container-fluid fixed-bottom text-center">
        <div className="row">
            <div className="col-sm-12">
                <a className="navbar-brand" href="/">Pager&copy; </a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;