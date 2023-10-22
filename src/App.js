import GlobalStyles from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Signup />
    </div>
  );
}
export default App;
