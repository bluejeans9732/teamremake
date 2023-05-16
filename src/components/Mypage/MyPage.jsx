import MypageReservation from "./MypageReservation"
import MyPageMycar from "./MyPageMycar"
import MyPageReview from "./MyPageReview"
import MyPageLike from "./MyPageLike"






export default function MyPage() {

  const nameFromStorage = localStorage.getItem('ls')

  return (
    <div className="overflow-x-auto w-full  scrollbar-hide min-h-[100%]">
      <div className="avatar h-40 w-full place-content-center">
        <div className="w-24 h-24 rounded-full ml-8 mt-10">
          <img src="/image/profile.png" alt=""/>
        </div>
        <div className="chat chat-start w-80">
          <div className="chat-bubble bg-base-200 text-black w-60 text-center ml-8 mt-10">반가워요 {nameFromStorage} 님</div>
        </div>
      </div>
      <div className="divider mb-0"></div>
      <div className="navbar bg-base-000 rounded-box ml-80 mt-0 mb-0">
        <div className="flex justify-center flex-1 px-2">
          <div className="items-stretch">
          {/* 1 */}
          <MypageReservation />
          {/* 2 */}
          <MyPageMycar />
          {/* 3 */}
          <MyPageReview />
          {/* 4 */}
          <MyPageLike />
        </div>
      </div>
    </div>
  </div>
  )
};