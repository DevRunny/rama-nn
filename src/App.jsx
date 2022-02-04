import React from "react";
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
import { useOpenModal } from "../src/components/Hooks/useOpenModal";
import { useScrollToTop } from "../src/components/Hooks/useScrollToTop";

function App() {
  const openModal = useOpenModal();
  const scrollToTop = useScrollToTop();

  return (
    <div className="App">
      <Header {...openModal} />
      <ReqDocuments />
      <ScopeOfAccreditation />
      <Features />
      <MapYandex {...openModal} />
      <Accreditation {...openModal} />
      <Footer />
      <ModalItem {...openModal} />
      <ScrollTop {...scrollToTop} />
    </div>
  );
}

export default App;
