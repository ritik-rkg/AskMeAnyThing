import Footer from "../Footer"
import Navbar from "../Navbar"
import PCP from "./PCP/PCP"
import Tabs from "./Tabs"
import Try from "./Try"

const Home = () => {
  return (
    <div className="font-poppins">
      <Navbar/>
      <Tabs/>
      <PCP/>
      {/* <Try/> */}
      {/* <div className="bg-blue-gray-50 h-screen w-full "></div> */}
      <Footer/>
    </div>
  )
}

export default Home
