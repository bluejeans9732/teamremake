import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './firebase-messaging-sw';

import FirstPage from "./components/FirstPage";
import Login from './components/LoginResigter/Login'
import Pwid from './components/LoginResigter/Pwid';

import Product from './components/Product/product';
import ProductResevation from './components/Product/ProductResevation';

import LoginMain from './components/LoginMain/LoginMain';

import MyPage from "./components/Mypage/MyPage";
import Places from "./components/place/Places";
import Register from "./components/Mypage/Resister";
import Reviews from "./components/Mypage/Reviews";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from './Routes/ProtectedRoute'


export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        {/* 모두에게 열려있는 페이지 */}
        <Route path="/" element={<FirstPage />} />
        <Route path="/place" element={<Places />} />

        <Route path="/login" element={<Login/>} />
        <Route path="/pwid" element={<Pwid/>} />


        {/* 게스트에게만 열려있는 페이지 */}

        <Route path="/reviews" element={<Reviews />} />
        <Route path="/register" element={<Register />} />

        {/* 로그인이 필요한 페이지 */}
        <Route element={<ProtectedRoute />}>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loginmain" element={<LoginMain />} />
          <Route path="/product/:id" element={<Product />} />
          <Route to="/product/ProductResevation" element={<ProductResevation/>} />
        </Route>
         
        {/* 관리자 권한이 필요한 페이지 */}
        

        {/* 404 페이지 */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}