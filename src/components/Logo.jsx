import React from "react";
import { ReactComponent as IBL } from "../assets/logo.svg";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IBL />
      <p style={{ margin: "0 0 0 15px" }} className="site-title">
        Infinity Docs
      </p>
    </div>
  );
}

export default Logo;
