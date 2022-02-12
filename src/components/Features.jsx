import React from "react";
import { features } from "./Data";

export const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="features-list">
          <ul>
            {features.map((feature) => {
              return (
                <li key={feature.id}>
                  {feature.image}
                  <h1>{feature.header}</h1>
                  <p>
                    {feature.text}
                    <a href={feature.href}>здесь</a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
