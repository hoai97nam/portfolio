import bgImage from "./tapao.jpg";
import "./App.css";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Summary } from "./components/Summary";
import { VerticalBar } from "./components/VerticalBar";

const AppStyled = styled.div`
  /* background-image: url(${bgImage});  */
  height: 100vh;
  background-position: center;
  background-color: yellow;
  background-repeat: no-repeat;
`;
function App() {
  return (
      <AppStyled className="font-mono">
        <Header />
        <Summary />
        <VerticalBar />
      </AppStyled>
  );
}

export default App;
