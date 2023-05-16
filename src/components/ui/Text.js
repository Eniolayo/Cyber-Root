import React from "react";
import ctl from "@netlify/classnames-template-literals";

export default function Text({ children, variant, styles, isSpan = false }) {
  switch (isSpan) {
    case false:
      return <p className={`${TextStyle(variant, styles)}`}>{children}</p>;

    case true:
      return (
        <span className={`${TextStyle(variant, styles)}`}>{children}</span>
      );
  }
}

function TextStyle(variant, styles) {
  switch (variant) {
    case "sm":
      return ctl(`
            text-xs 
            m:text-sm 
            ${styles}
        `);
    case "m":
      return ctl(`
            text-base 
            m:text-lg 
            lg:text-xl 
            ${styles}
        `);
    case "md":
      return ctl(`
            text-base 
            md:text-lg 
            ${styles}
        `);
    case "lg":
      return ctl(`
            text-lg 
            m:text-xl 
            lg:text-2xl 
            ${styles}
        `);
    default:
      return ctl(`
        text-sm   
        md:text-base   
        ${styles}
            
        `);
  }
}
