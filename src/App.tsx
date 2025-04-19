import "./App.css";
import Paths from "./paths";

// providers
import NavBarToggleBtnsProvider from "./context/NavBarToggleBtns";
function App() {
  return (
    <>
      <NavBarToggleBtnsProvider>
        <Paths />
      </NavBarToggleBtnsProvider>
    </>
  );
}

export default App;
