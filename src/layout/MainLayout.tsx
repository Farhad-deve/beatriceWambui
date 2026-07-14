import { Outlet } from "react-router-dom"
import NavLinks from "../components/NavLink/NavLinks"
import SideBar from "../components/Sidebar/SideBar"


const MainLayout = () => {
  return (
    <>
      <main className="flex flex-col py-1r gap-1-5r justify-between md-gap-1-5r px-section">
        <section className="flex md-justify-end">
          <NavLinks />
        </section>

        <section className="flex flex-col md-flex-row-reverse gap-4r md-gap-1-5r justify-between">
          <div className="bg-white w-full px-2-5r py-1r rounded-20px">
            <Outlet/>
          </div>

          <SideBar />
        </section>
      </main>
    </>
  )
}

export default MainLayout