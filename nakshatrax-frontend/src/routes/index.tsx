import { BrowserRouter, Routes, Route } from "react-router-dom"
import KundliForm from "../components/forms/KundliForm"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KundliForm />} />
      </Routes>
    </BrowserRouter>
  )
}