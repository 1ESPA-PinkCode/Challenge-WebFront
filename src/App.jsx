import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Suporte from "./routes/Suporte";
import Error from "./routes/Error";
import AppPage from "./routes/AppPage";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Browser>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Browser>
  );
}

export default App;