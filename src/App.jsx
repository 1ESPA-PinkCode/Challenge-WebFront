import { BrowserRouter as Browser, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./routes/Home"
import Contato from "./routes/Suporte"
import Error from "./routes/Error"
import App from "./routes/App"

function App() {

  return (
    <>
     <Browser>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Browser> 
    </>
  )
}

export default App
