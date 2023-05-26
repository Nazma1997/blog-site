import { BrowserRouter, Route, Routes } from "react-router-dom";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Recommended from "./components/Recommended";
import AddPost from "./components/shared/Addpost";
import Banner from "./components/shared/Banner";
import Banner2 from "./components/shared/Banner2";
import Design from "./components/shared/Design";
import FullDescription from "./components/shared/FullDescription";
import LatestPost from "./components/shared/LatestPosts";
import Login from "./components/shared/Login";
import Navbar from "./components/shared/Navigation";
import NewerPost from "./components/shared/NewerPost";
import Product from "./components/shared/Product";
import Register from "./components/shared/Register";
import SharePost from "./components/shared/SharePost";
import Stories from "./components/shared/Stories";
import Technology from "./components/shared/Technology";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Details from "./components/shared/Details";
import AllPost from "./components/shared/AllPost";


function App() {

  // bg-slate-800 text-white 
  return (
    <div className=" bg-slate-800 text-white	">
      <div className="lg:mx-24 mx-16">
        
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/design' element={<Design />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/product' element={<Product />} />
          <Route path='/add-post' element={<AddPost />} />
          <Route path='/profile' element={<Profile />} />
          <Route path = '/details/:id' element={<Details />} />
          <Route path = '/all-post' element={<AllPost />} />
         </Routes>
       </BrowserRouter>
     

      {/* <Register />
      <Login />
      <AddPost />  */}
      
      </div>
    </div>
  )
}

export default App
