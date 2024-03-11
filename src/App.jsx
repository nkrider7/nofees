import { Footer, Navbar } from "./components";
import Player from "./pages/Player";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search";
import Instractor from "./pages/Instractor/Instractor";
import Roadmap from "./pages/Roadmaps/Roadmap";
import Blogs from "./pages/Blogs/Blogs";
import Notfound from "./components/Notfound";
import Test from "./components/Test";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/roadmaps" exact element={<Roadmap />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/player/:v" exact element={<Player />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/search/:v" exact element={<Search />} />
        <Route path="/instractor" exact element={<Instractor />} />
        <Route path="/:notfound" element={<Notfound/>}  />
        <Route path="/test" element={<Test/>}  />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
