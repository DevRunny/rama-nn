import React from "react";
import { documents } from "./Data";

export const Accreditation = ({ setOpenItem }) => {
  return (
    <section id="certificate">
      <div className="container">
        <div className="certificate">
          <h1>Аттестат об аккредитации</h1>
          <hr />
          <ul>
            {documents.map((doc) => {
              return (
                <li key={doc.id} onClick={() => setOpenItem(doc)}>
                  {doc.image}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
