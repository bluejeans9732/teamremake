import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card() {

    const datas =
        [
            {
                "id": "1",
                "name": "강남점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/41efb4505d29188bbb96ed9de005307a.jpg"
            },
            {
                "id": "2",
                "name": "성남점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/9c6b45589227849d0ab635061e57b546.jpg"
            },
            {
                "id": "3",
                "name": "강북점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/29b309524d8517809273777ac6521c5b.jpg"
            },
            {
                "id": "4",
                "name": "강서점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/0a0bb90ba498b1f54ef88b104c26f7f4.jpg"
            },
            {
                "id": "5",
                "name": "강동점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/374443df999292384a1db5d4abba6049.jpg"
            },
            {
                "id": "6",
                "name": "일산점",
                "image": "https://www.filmmakers.co.kr/files/attach/images/2021/06/28/838a2ee8a2f86b0cb22358cb2f5450d4.jpg"
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
      
                <div className="mx-auto my-2">
                    <Link to="/product">
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