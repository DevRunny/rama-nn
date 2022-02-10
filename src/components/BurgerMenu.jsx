import React from "react";
import { links } from "./data";

export const BurgerMenu = ({ openMenu, setOpenMenu }) => {
  const closeBurgerMenu = (e) => {
    if (e.target.parentNode.tagName === "LI") {
      setOpenMenu(null);
    } else {
      setOpenMenu(null);
    }
  };

  if (!openMenu) return null;

  if (openMenu)
    return (
      <div id="burger-content">
        {links.map((link) => {
          return (
            <li key={link.id} onClick={closeBurgerMenu}>
              <a href={link.href}>{link.text}</a>
            </li>
          );
        })}
      </div>
    );
};
