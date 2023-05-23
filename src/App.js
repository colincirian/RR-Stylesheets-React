import "./App.css";
import Container from "./components/Container";
import Menu from "./components/Menu";
import StyleContext from "./contexts/StyleContext";
import {DEFAULT_STYLE} from './contexts/StyleContext'

const menu = {
  backgroundColor: "#CCFF33",
};

const menuItem = {
  backgroundColor: "teal",
  color: "white",
  fontSize: "1.5rem",
  marginBottom: "1.5rem",
};

function App() {
  return (
    <StyleContext.Provider value={DEFAULT_STYLE}>
      <div className="App">
        <Aside />
        <Container>
          <Menu menu={menu} menuItem={menuItem} />
          <h3>This is in the container.</h3>
        </Container>
      </div>
    </StyleContext.Provider>
  );
}

export default App;
