import React from "react";
import { documents } from "../components/data";

export const Accreditation = () => {
  const [openItem, setOpenItem] = React.useState(null);

  // console.log("item", openItem);

  return (
    <section id="accreditations">
      <div className="container">
        <div className="doc-list">
          <h1>Аттестат об аккредитации</h1>
          <hr />
          <ul>
            {documents.map((doc) => {
              return (
                <li
                  key={doc.id}
                  onClick={() => setOpenItem(console.log("mem"))}
                >
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
