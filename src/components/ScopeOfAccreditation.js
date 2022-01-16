import React from "react";
import { categories } from "../components/data";

export const ScopeOfAccreditation = () => {
  return (
    <section id="categories">
      <div className="container">
        <div className="vehicle-categories">
          <h1>Область аккредитации</h1>
          <h3>Категории транспортных средств</h3>
          <ul>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  {category.image}
                  {category.header}
                  {category.line}
                  {category.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
