import { BrowserRouter, Routes, Route } from "react-router-dom";

import './firebase-messaging-sw';

import Login from './components/Login'
import Pwid from './components/Pwid';
import Product from './components/Product/product';
import LoginMain from './components/LoginMain/LoginMain';
import ProductResevation from './components/Product/ProductResevation';

import Navbar from "./components/Navbar";

// Pages
import Places from "./pages/place/Places";

// Routes
import Home from "./pages/Home";
import { useState } from "react";
import MyPage from "./components/MyPage";

import Register from "./components/Resister";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        {/* 모두에게 열려있는 페이지 */}
          <Route path="/place" element={<Places />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/pwid" element={<Pwid/>} />

          <Route path="/reviews" element={<Reviews />} />

        {/* 게스트에게만 열려있는 페이지 */}
        <Route path="/register" element={<Register />} />

        {/* 로그인이 필요한 페이지 */}
        
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loginmain" element={<LoginMain />} />
          <Route path="/product" element={<Product />} />
          <Route to="/product/ProductResevation" element={<ProductResevation/>} />
        {/* 관리자 권한이 필요한 페이지 */}
        

        {/* 404 페이지 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}