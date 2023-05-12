import ctl from "@netlify/classnames-template-literals";
import React from "react";

export default function Text({ children, variant, styles }) {
  return <p className={`${TextStyle(variant)}`}>{children}</p>;
}

function TextStyle(variant) {
  switch (variant) {
    case "sm":
      return ctl(`
            
        `);
    case "md":
      return ctl(`
            
        `);
    case "lg":
      return ctl(`
            
        `);
    default:
      return ctl(`
            
        `);
  }
}
