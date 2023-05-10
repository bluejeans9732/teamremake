import React, { useRef } from 'react';
import Carousel from "./Carousel"
import LoginMainReview from "./LoginMainReview"
import LoginMainNews from "./LoginMainNews"

import Mainpicture from './Mainpicture'
import UnderPicture from './UnderPicture'


function LoginMain() {


     
     const carouselRef = useRef(null);
     const reviewRef = useRef(null);
     const newsRef = useRef(null);

     const handleCarouselClick = () => {
          if (carouselRef.current) {
               carouselRef.current.scrollIntoView({ behavior: "smooth" });
          }
     };

     const handleReviewClick = () => {
          if (reviewRef.current) {
               reviewRef.current.scrollIntoView({ behavior: "smooth" });
          }
     };

     const handleNewsClick = () => {
          if (newsRef.current) {
               newsRef.current.scrollIntoView({ behavior: "smooth" });
          }
     };

     return (
          <div className="bg-gray-100">
               <div className=" mx-auto w-8/12">
                    <div className="w-3/4 mx-auto">
                         <Mainpicture />
                         <UnderPicture 
                              onCarouselClick={handleCarouselClick}
                              onReviewClick={handleReviewClick}
                              onNewsClick={handleNewsClick}
                         />
                    </div>

                    <div className="mx-auto mt-[100px] w-3/4 py-12 h-[70vh]" ref={carouselRef}>
                         
                         <Carousel  />
                         
                         
                    </div>

                    <div className="h-[80vh]" ref={reviewRef}>
                         <section className="flex flex-col items-center text-gray-600 w-3/4 mx-auto">
                              <div className="container flex  mx-auto">

                                   <div className="mx-auto mb-10">
                                        <div className="text-center py-4  text-xl font-bold">베스트 리뷰</div>
                                   </div>

                              </div>
                              <div className="flex flex-wrap -m-4 mb-4">
                                   <LoginMainReview />
                              </div>
                         </section>
                         
                    </div>

                    <div className="h-[80vh] mt-80" ref={newsRef}>
                         <section className="flex flex-col items-center text-gray-600 w-3/4 mx-auto">
                              <div className="container flex  mx-auto">

                                   <div className="mx-auto mb-10">
                                        <div className="text-center py-4  text-xl font-bold">정비뉴스 정보</div>
                                   </div>

                              </div>
                              <div className="flex flex-col ">
                                   <LoginMainNews />
                              </div>
                         </section>
                    </div>
               </div>
          </div>
          
     )
    
};

export default LoginMain;