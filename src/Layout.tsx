import { Outlet } from "react-router-dom"
import Navbar from "./componenets/header"
import Footer from "./componenets/Footer"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
