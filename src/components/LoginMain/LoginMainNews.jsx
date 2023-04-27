import React from "react";

function LoginMainNews() {

    const ReviewImages = [
        {
          "id": "1",                
          "image": "https://image.newsis.com/2023/03/28/NISI20230328_0019836367_web.jpg?rnd=20230328115721",
          "title" : "자동차 무상점검 받으세요",
          "main" : "28일 오전 대구 달서구 두류공원 성당주차장에서 비사업용 자동차 무상점검이 진행되고 있다.봄 행락철을 맞아 시민들의 안전한 자동차 문화조성과 교통사고 30% 줄이기 일환으로 자동차 정비와 점검에 대한 시민의식을 높여 교통사고를 예방하기 위해 추진한다."
        },
        {
          "id": "2",
          "image": "https://news.imaeil.com/photos/2021/04/29/2021042913412301356_l.jpg",
          "title" : "자동차수리비 걱정, 인증 대체부품으로 해결하세요!",
          "main" : "자동차 수리 시 사용하는 인증 대체부품이 가격은 35% 저렴하지만, 품질은 동일한 것으로 확인돼 소비자의 선택 폭이 커졌다.9일 한국교통안전공단(이하 교통안전공단)은 국내에서 판매 중인 '자동차 인증 대체부품'을 OEM부품 및 비인증 수입 부품과 비교 평가한 결과, 성능과 품질은 동등하고 가격은 저렴한 것으로 나타났다고 밝혔다."
        },
        {
          "id": "3",
          "image": "https://www.dailysecu.com/news/photo/202001/96126_106116_1156.jpg",
          "title" : "관리의 기본은 '엔진오일' 교환 자동차 소모품 교체주기, 꼭 알고 있어야 할 팁",
          "main" : "엔진오일은 일반적으로 5천km~1만km를 운행했을 때나 3~6개월 정도 운행했을 때 교환해야 한다. 그렇지만 엔진오일의 교체시기는 운전자의 운전습관이나 주행환경, 차종 등에 따라 달라질 수 있다."

        }
      ];
      
      return (
        <>
            {ReviewImages.map((ReviewImage) => (
                <div key={ReviewImage.id} className=" w-[960px] h-[200px] mb-6">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-row">
                        <img className="w-[300px] h-[200px] object-cover object-center"
                            src={ReviewImage.image} alt="blog" />
                        <div className="p-6 bg-white h-[200px] w-full pt-6">
                            <h1 className="text-lg font-semibold mb-3">{ReviewImage.title}</h1>
                            <p className="leading-relaxed mb-3">{ReviewImage.main}</p>
                            
                        </div>
                    </div>
                </div>
            ))}
        </>
      );
}

export default LoginMainNews;