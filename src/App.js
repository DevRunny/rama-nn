import "./scss/App.scss";
import "./scss/fonts.scss";
import { Header } from "./components/Header";
import { ReqDocuments } from "./components/ReqDocuments";
import { ScopeOfAccreditation } from "./components/ScopeOfAccreditation";
import { Features } from "./components/Features";
import MapYandex from "./components/MapYandex";

function App() {
  return (
    <div className="App">
      <Header />
      <ReqDocuments />
      <ScopeOfAccreditation />
      <Features />
      <MapYandex />
    </div>
  );
}

export default App;
