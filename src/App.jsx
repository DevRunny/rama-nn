import React, { useState } from "react";
import "./scss/App.scss";
import "./scss/fonts.scss";
import { Header } from "./components/Header";
import { ReqDocuments } from "./components/ReqDocuments";
import { ScopeOfAccreditation } from "./components/ScopeOfAccreditation";
import { Features } from "./components/Features";
import { MapYandex } from "./components/MapYandex";
import { Accreditation } from "./components/Accreditation";
import { Footer } from "./components/Footer";
import { ModalItem } from "./components/ModalItem";
import { ScrollTop } from "./components/ScrollTop";

function App() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="App">
      <Header setOpenItem={setOpenItem} />
      <ReqDocuments />
      <ScopeOfAccreditation />
      <Features />
      <MapYandex setOpenItem={setOpenItem} />
      <Accreditation setOpenItem={setOpenItem} />
      <Footer />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
      <ScrollTop />
    </div>
  );
}

export default App;
