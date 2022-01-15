import "./scss/App.scss";
import "./scss/fonts.scss";
import { Header } from "./components/Header";
import { ReqDocuments } from "./components/ReqDocuments";

function App() {
  return (
    <div className="App">
      <Header />
      <ReqDocuments />
    </div>
  );
}

export default App;
