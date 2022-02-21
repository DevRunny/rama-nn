import React from "react";
import "./scss/App.scss";
import "./scss/responsive.scss";
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
import { useOpenModal } from "./components/Hooks/useOpenModal";
import { useScrollToTop } from "./components/Hooks/useScrollToTop";
import { useOpenBurgerMenu } from "./components/Hooks/useOpenBurgerMenu";
import { BurgerMenu } from "./components/BurgerMenu";

function App() {
  const openModal = useOpenModal();
  const scrollToTop = useScrollToTop();
  const openBurgerMenu = useOpenBurgerMenu();

  return (
    <div className="App">
      <Header {...openModal} {...openBurgerMenu} />
      <ReqDocuments />
      <ScopeOfAccreditation />
      <Features />
      <MapYandex {...openModal} />
      <Accreditation {...openModal} />
      <Footer />
      <ModalItem {...openModal} />
      <ScrollTop {...scrollToTop} />
      <BurgerMenu {...openBurgerMenu} />
    </div>
  );
}

export default App;
