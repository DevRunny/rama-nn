import React from "react";
import { documents } from "../components/data";
import { ModalItem } from "../components/ModalItem";

export const Accreditation = ({ setOpenItem }) => {
  return (
    <section id="certificate">
      <div className="container">
        <div className="doc-list">
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
      <ModalItem />
    </section>
  );
};
