import "./App.css";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { VerticalBar } from "./components/VerticalBar";

function App() {
  return (
      <div className="font-mono">
        <Header/>
        <Summary />
        {/* <About /> */}
        <VerticalBar />
      </div>
  );
}

export default App;
