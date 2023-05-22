import Author from "./components/Author";
import Footer from "./components/Footer";
import Recommended from "./components/Recommended";
import Banner from "./components/shared/Banner";
import Banner2 from "./components/shared/Banner2";
import Design from "./components/shared/Design";
import FullDescription from "./components/shared/FullDescription";
import Navbar from "./components/shared/Navigation";
import NewerPost from "./components/shared/NewerPost";
import SharePost from "./components/shared/SharePost";
import Stories from "./components/shared/Stories";
import Technology from "./components/shared/Technology";


function App() {


  return (
    <div className="  bg-black text-white 	">
      <div className="lg:mx-24 mx-10">
        <Navbar />
        <Banner />
        <Stories />
        <Author />
        <Recommended/>
        <Footer />
      <Banner2 />
      <FullDescription />
      <SharePost />
      <NewerPost />
      <Design />
      <Technology />
      
      </div>
    </div>
  )
}

export default App
