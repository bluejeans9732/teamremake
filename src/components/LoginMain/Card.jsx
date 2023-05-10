import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card() {

    const datas =
        [
            {
                "id": "1",
                "name": "강남점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/41efb4505d29188bbb96ed9de005307a.jpg",
                "main" : "율현동 108-9번지 101호 강남구"
            },
            {
                "id": "2",
                "name": "성남점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/9c6b45589227849d0ab635061e57b546.jpg",
                "main": "수정구 태평동 7123-9번지 1층 "
            },
            {
                "id": "3",
                "name": "강북점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/29b309524d8517809273777ac6521c5b.jpg",
                "main": "서울특별시 강북구 미아동 158-41"
            },
            {
                "id": "4",
                "name": "강서점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/0a0bb90ba498b1f54ef88b104c26f7f4.jpg",
                "main": "가양동 195-5번지 1층 강서구 "
            },
            {
                "id": "5",
                "name": "강동점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/374443df999292384a1db5d4abba6049.jpg",
                "main": "길동 109번지 1호 강동구 "
            },
            {
                "id": "6",
                "name": "일산점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/838a2ee8a2f86b0cb22358cb2f5450d4.jpg",
                "main": "경기도 고양시 일산동구 백석동 1210-3"
            }
    ]

    //즐겨찾기를 누를때 useState로 받아 index별로 따로 체크  단, 저장은 따로 하지않았음 하려면 localStorage로 할것
    const [bookmarkStates, setBookmarkStates] = useState(Array(datas.length).fill(false));

    const handleBookmarkClick = (index) => {
        setBookmarkStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !prevStates[index];
            return newStates;
        });
    };
  
    
    return (
        <div className='flex'>
          {datas.map((data, index) => (
            <div key={data.id} className="card w-[300px] h-[350px] m-2 rounded-lg shadow-lg">
              <div className="top">
                <img
                  className="w-[300px] h-[200px] object-cover  p-2"
                  src={data.image}
                  alt="img"
                />
              </div>
              <div className="bottom flex flex-col justify-center items-start p-3">
                <div className="font-bold text-md my-1">{data.name}</div>
                <div className="text-sm mt-2">{data.main}</div>
      
                <div className="mx-auto my-2 mt-4">
                    <Link to={`/product/${index}`}>
                        <button className="border-2 px-3 py-1 text-xs rounded-lg mr-1 ">
                            바로 가기
                        </button>
                    </Link>
                  
                    <button className={`border-2 px-3 py-1 ml-8 text-xs rounded-lg ${bookmarkStates[index] ? "bg-red-500/60 hover:bg-red-500/80" : " hover:bg-gray-300/80"}`} onClick={() => handleBookmarkClick(index)}>
                        즐겨찾기
                    </button> 
                </div>
              </div>
            </div>
          ))}
        </div>
      );
      
}

export default Card;