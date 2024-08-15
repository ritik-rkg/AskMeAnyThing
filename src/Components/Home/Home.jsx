import Footer from "../Footer"
import Navbar from "../Navbar"

import Tabs from "./Tabs"

const Home = () => {
  return (
    <div className="font-poppins">
      <Navbar/>
      <Tabs/>
      {/* <Modal/> */}
      <Footer/>
    </div>
  )
}

export default Home
