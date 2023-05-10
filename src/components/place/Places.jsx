import { useState, useEffect } from "react";

import PlacesMap from "./PlacesMap";
import Place from "./Place";

const dummyData = [
  {
    _id: 0,
    placeName: "한국타이어",
    desc: "정품 품질 보장", 
    image: "https://img.khan.co.kr/news/2023/03/17/news-p.v1.20230317.9d14a8138f174f6882d275bce682cd6c_P1.webp",
    lat: 37.553836,
    lng: 126.966982,

  },
  {
    _id: 1,
    placeName: "현대모비스",
    desc: "합리적 가격", 
    image: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202204/22/aa4111d0-dd05-48a3-8410-bd3f2aabad1a.jpg",
    lat: 37.561836,
    lng: 126.966982,
  },
  {
    _id: 2,
    placeName: "티스테이션",
    desc: "안전과 최적화된 주행을 우선", 
    image: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/31958909_361789507646688_4226001756292644864_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t1sr2A41UzwAX_gjOsV&_nc_ht=scontent-gmp1-1.xx&oh=00_AfCwacHSsbFME_PhzEe9ENJx_gQ_X-dUyTt33nEwNwXfJg&oe=64752D5C",
    lat: 37.553836,
    lng: 126.969982,
  },
  {
    _id: 3,
    placeName: "오토팜",
    desc: "엔진 오일 교환", 
    image: "https://previews.123rf.com/images/vladayoung/vladayoung1704/vladayoung170400044/75391962-%EB%B2%A1%ED%84%B0-%EB%B3%B5%EA%B3%A0-%ED%8C%9C-%EC%8B%A0%EC%84%A0%ED%95%9C-%EB%A1%9C%EA%B3%A0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%9C%A0%EA%B8%B0%EB%86%8D-%EC%A0%9C%ED%92%88-%EB%B0%B0%EC%A7%80-%EC%97%90%EC%BD%94-%EC%9D%8C%EC%8B%9D-%EA%B8%B0%ED%98%B8%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%B9%88%ED%8B%B0%EC%A7%80-%EC%86%90%EC%9C%BC%EB%A1%9C-%EC%8A%A4%EC%BC%80%EC%B9%98-%EB%90%9C-%ED%94%BD%EC%97%85-%ED%8A%B8%EB%9F%AD.jpg",
    lat: 37.553836,
    lng: 126.956982,
  },
  {
    _id: 4,
    placeName: "현대블루핸즈",
    desc: "10년째 운영중", 
    image: "http://wiki.hash.kr/images/4/47/%EB%B8%94%EB%A3%A8%ED%95%B8%EC%A6%88_%EB%A1%9C%EA%B3%A0.png",
    lat: 37.554836,
    lng: 126.967982,
  },
  {
    _id: 5,
    placeName: "태성카센터",
    desc: "10년째 운영중", 
    image: "https://mblogthumb-phinf.pstatic.net/MjAxOTAxMDVfNjAg/MDAxNTQ2Njg2NDc4NjU2.zU2qZ_D5HjuXsM4fO1lmqkEPETA3tGc3u3Z1oW9t4UUg.e7_4cJhCTGiwbQh_BO4OKXOo_D-uXu2oWQmo-_QkJRsg.JPEG.rocketks/SE-ddeada03-0df9-4d98-b284-445def4ee2e6.jpg?type=w800",
    lat: 37.552936,
    lng: 126.951982,
  }
];

const Plcaes = () => {
  const [data] = useState(dummyData);

  useEffect(() => {
  }, []);

  return (
    <div className="">
      <div className="container w-[85%] xl:max-w-10xl grid grid-cols-1 lg:grid-cols-3 flex mx-auto">
        <div className="col-span-2 min-h-[20vh]">
          <PlacesMap height="85%" data={data} />
        </div>
        <div className="places col-span-1 mt-2  lg:mr-1 overflow-y-scroll">
          {data.map((item) => {
            return <Place key={item._id} {...item} />;
          })}
        </div>
      </div>
      {/* <div className="flex ml-4 mr-4">
        <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">AD</div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">AD</div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">news</div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">news</div>
      </div>     */}
    </div>
  );
};

export default Plcaes;
