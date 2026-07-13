import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import MainLayout from "./layout/MainLayout"


function App() {
  

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
