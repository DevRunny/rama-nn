import React from "react";
import "./scss/App.scss";
import "./scss/fonts.scss";
import { Header } from "./components/Header";
import { ReqDocuments } from "./components/ReqDocuments";
import { ScopeOfAccreditation } from "./components/ScopeOfAccreditation";
import { Features } from "./components/Features";
import MapYandex from "./components/MapYandex";
import { Accreditation } from "./components/Accreditation";
import { ModalItem } from "./components/ModalItem";

function App() {
  const [openItem, setOpenItem] = React.useState(null);

  return (
    <div className="App">
      <Header />
      <ReqDocuments />
      <ScopeOfAccreditation />
      <Features />
      <MapYandex />
      <Accreditation setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </div>
  );
}

export default App;
