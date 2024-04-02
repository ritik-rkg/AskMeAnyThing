import Footer from "../Footer"
import Navbar from "../Navbar"
import Modal from "../Upload/Modal"
import PCP from "./PCP/PCP"
import Tabs from "./Tabs"
import Try from "./Try"

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
