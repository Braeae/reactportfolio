import "./App.scss"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  )
}

export default App

// To be continued in Building left sidebar section 9.11 min
