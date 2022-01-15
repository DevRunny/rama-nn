import "./scss/App.scss";
import "./scss/fonts.scss";
import { Header } from "./components/Header";
import { ReqDocuments } from "./components/ReqDocuments";
import { ScopeOfAccreditation } from "./components/ScopeOfAccreditation";

function App() {
  return (
    <div className="App">
      <Header />
      <ReqDocuments />
      <ScopeOfAccreditation />
    </div>
  );
}

export default App;
