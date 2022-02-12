import React from "react";
import { links } from "./Data";

export const BurgerMenu = ({ openMenu, setOpenMenu }) => {
  const closeBurgerMenu = (e) => {
    if (e.target.elementType === "li") {
      setOpenMenu(null);
      console.dir(e.target);
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
