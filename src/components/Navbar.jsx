import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

 
  const logoutLs = ()=> {
    localStorage.removeItem('ls')
    navigate('/place')
  }

  return (
    <nav className="navbar bg-base-100 border-b border-b-base-200 box-border">
      <div>
        {
          !localStorage.getItem("ls") ? 
          <a href="/place" className="btn btn-ghost normal-case text-2xl">
            🧑‍🔧 Oh! my car
          </a> 
          :
          <a href="/loginmain" className="btn btn-ghost normal-case text-2xl">
            🧑‍🔧 Oh! my car
          </a> 
        }
       
      </div>
      <div className="hidden lg:block grow">
        <ul className="menu menu-horizontal p-0 float-right">
          
          {
            !localStorage.getItem("ls") ?
            <li>
              <a href="/reviews">리뷰보기</a><a href="/login">로그인</a>
            </li>
            : 
            <>
              <li>
                <a href="/reviews">리뷰보기</a>
              </li>
              <li>
                <a href="/mypage">마이 페이지</a>
              </li>
              <li>
                <button
                  className="btn btn-primary text-primary-content"
                  onClick={logoutLs}
                >
                  로그아웃
                </button>
              </li>
            </>
               
          
          }
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
