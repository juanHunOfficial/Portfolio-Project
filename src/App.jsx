import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
