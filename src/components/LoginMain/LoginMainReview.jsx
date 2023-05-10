import React from "react";

import { Link } from 'react-router-dom';

function LoginMainReview() {
    

    const ReviewImages = [
        {
          "id": "1",                
          "image": "https://image.ytn.co.kr/general/jpg/2021/0629/202106291125012564_d.jpg",
          "title" : "사장님이 친절해요",
          "main" : "글쎄 서비스로 자동차를 만들어줬어요"
        },
        {
          "id": "2",
          "image": "https://cdn.coindeskkorea.com//news/photo/202205/79432_21583_1025.jpg",
          "title" : "가격이 착해요",
          "main" : "훔쳐온게 아닐까 싶은 가격이에요"
        },
        {
          "id": "3",
          "image": "https://cdn.weekly.chosun.com/news/photo/202209/22294_43148_3422.jpg",
          "title" : "사장님이 착해요",
          "main" : "착해서 공짜로 고쳐줬어요"
        },
        {
            "id": "4",                
            "image": "https://www.womennews.co.kr/news/photo/202201/219795_358815_013.jpg",
            "title" : "타이어 나스닥보다 싸다",
            "main" : "나스닥에 돈 쓰느니 타이어에 씁니다"
        },
        {
            "id": "5",
            "image": "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQKp5ZsMFTZZrNFb_p2mduiKPipCDh7meawj_zla0mhOHNi_07O3TcMv-q-H-HBvH2G",
            "title" : "친절하다 사장님",
            "main" : "배터리 교체 해줬다 공짜로 친절하다 싸장님"
        },
        {
            "id": "6",
            "image": "https://cdn.aitimes.kr/news/photo/202302/27337_41159_1922.jpg",
            "title" : "별 5개 드려요",
            "main" : "리뷰이벤트 꼭꼭 챙겨주세요"
        }
    ];
      
      return (
        <>
            {ReviewImages.map((ReviewImage) => (
                <div key={ReviewImage.id} className="ml-6 w-[300px] h-[400px] mt-10">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="w-[300px] h-[200px] object-cover object-center"
                            src={ReviewImage.image} alt="blog" />
                        <div className="p-6 bg-white h-[200px] pt-10">
                            <h1 className="text-lg font-semibold mb-3">{ReviewImage.title}</h1>
                            <p className="leading-relaxed mb-3">{ReviewImage.main}</p>
                            <div className="flex items-center flex-wrap ">
                                <Link to="/reviews">
                                    <div className="text-indigo-300 inline-flex items-center mt-6" >자세히 보기
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
      );
}

export default LoginMainReview;