import Author from "./components/Author";
import Footer from "./components/Footer";
import Recommended from "./components/Recommended";
import Banner from "./components/shared/Banner";
import Navbar from "./components/shared/Navigation";
import Stories from "./components/shared/Stories";


function App() {


  return (
    <div className="  bg-black 	">
      <div className="lg:mx-24 mx-10">
        <Navbar />
        <Banner />
        <Stories />
        <Author />
        <Recommended/>
        <Footer />
      
      </div>
    </div>
  )
}

export default App
