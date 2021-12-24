import Beranda from "./pages/Beranda"
import Login from "./pages/Login/Index"
import Chat from "./pages/Chat"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Beranda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default App