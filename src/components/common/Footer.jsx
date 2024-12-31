import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item, i) => (
          <>
            <i>{item.icon}</i>
          </>
        ))}
        <p>All Right Rescved 2022</p>
      </footer>
    </>
  );
};
