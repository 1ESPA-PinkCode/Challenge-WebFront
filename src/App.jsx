import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Suporte from "./routes/Suporte";
import Error from "./routes/Error";
import AppPage from "./routes/AppPage";
import "./index.css";

function App() {
  return (
    <Browser>
      <div className="min-h-screen flex flex-col">
        <Menu />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Browser>
  );
}

export default App;