import { Outlet } from "react-router-dom"
import NavLinks from "../components/NavLink/NavLinks"


const MainLayout = () => {
  return (
    <>
      <main className="flex flex-col gap-1-5r justify-between md-flex-row px-section">
        <aside>
          Aside
        </aside>

        <section className="flex flex-col gap-1-5r items-center md-items-end">
          <NavLinks />

          <div>
            <Outlet/>
          </div>
        </section>
      </main>
    </>
  )
}

export default MainLayout