import { Navigate, Outlet, useLocation } from "react-router";
// import { useRecoilValue } from "recoil";
// import { isLoginSelector } from "../Recoil/TokenAtom";

const ProtectedRoute = () => {
//   const isLogin = useRecoilValue(isLoginSelector);
//   const currentLocation = useLocation();

    const isLogin = localStorage.getItem('ls')
  
  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/login"}
      replace
    //   state={{ redirecredFrom: currentLocation }}
    />
  );
};

export default ProtectedRoute;