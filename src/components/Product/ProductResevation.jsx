import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { SelectAtom, TimeAtom } from "../../Recoil/productAtom";

function ProductResevation() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [startDate, setStartDate] = useState("");

    const selectedItems = useRecoilValue(SelectAtom);
    const timeCheck = useRecoilValue(TimeAtom);
    
    
    const handlePress = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setPhoneNumber(e.target.value);
        }
    }

    useEffect(() => {
        if (phoneNumber.length === 10) {
            setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (phoneNumber.length === 13) {
            setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [phoneNumber]);

    
    function handleSubmit(e) {
        e.preventDefault();
        const reservationData = {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            time: startDate,
            item: selectedItems,
            price: totalPrice,
        };
    }

    const date = timeCheck
    const year = date.getFullYear(); // 2023
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    const day = date.getDate(); // 18
    const hours = date.getHours(); // 11
    const minutes = date.getMinutes(); // 0

    const formattedDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
    
   

    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        let total = 0;
        selectedItems.forEach(item => {
          total += parseInt(item.price.replace(/,/g, '')) * item.quantity; 
        });
        setTotalPrice(total);
    }, [selectedItems]);

    return (
        <div className="h-full w-full overflow-y-scroll scrollbar-hide relative bg-gray-100">
            <div className="flex flex-col mx-auto bg-white ">
                <form className="flex flex-col w-line mx-auto ">

                    <div className="flex flex-col">
                        <div className="font-bold">예약자 정보</div>
                        <label htmlFor="name" className="mt-3 text-xs font-light">이름</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            required 
                            autoComplete="off"
                            className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                        />
                        
                        <label htmlFor="phonenumber" className="mt-3 text-xs font-light">핸드폰 번호</label>
                        <input 
                            type="text" 
                            id="phonenumber" 
                            autoComplete="off"
                            value={phoneNumber} 
                            onChange={handlePress} 
                            className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                        />
                    </div>
                    
                    <div>
                        <div className="font-bold mt-4">예약 정보</div>
                        <div>
                            <div className="mt-3 mb-2 text-xs font-bold">예약 시간</div>
                            {formattedDate}
                        </div>
                        <div>
                            <div className="mt-3 mb-2 text-xs font-bold">예약 물품</div>
                            {selectedItems.map((item) => (
                                <div key={item.id} className='flex flex-row mt-1'>
                                    {item.label} <p className='ml-5'>수량 : {item.quantity}개</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="mt-3 mb-2 text-xs font-bold">예상 총 금액</div>
                            {totalPrice.toLocaleString()}원
                        </div>
                        
                    </div>

                    

                    <button type="submit" className="Login_login rounded-md  mt-10 w-full h-12 bg-cyan-300 text-white text-bold" onSubmit={handleSubmit}>예약하기</button>
                </form>
            </div>
        </div>
        
    )
}

export default ProductResevation;