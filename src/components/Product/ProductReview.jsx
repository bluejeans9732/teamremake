import React from "react";



function ProductReview() {

    const ProductImages = [
        {
          "id": "1",                
          "image": "https://image.ytn.co.kr/general/jpg/2021/0629/202106291125012564_d.jpg",
          "title" : "사장님이 친절해요",
          "main" : "사장님이 얼마나 친절한지 글쎄 서비스로 자동차를 만들어줬어요 "
        },
        {
          "id": "2",
          "image": "https://cdn.coindeskkorea.com//news/photo/202205/79432_21583_1025.jpg",
          "title" : "가격이 착해요",
          "main" : "가격이 너무 착해서 사장님이 어디서 훔쳐온게 아닐까 싶은 가격이에요"
        },
        
    ];

    return (
        <>
            {ProductImages.map((ProductImage) => (
                <div key={ProductImage.id} className="p-4 w-6/12">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="h-40 w-full object-cover object-center"
                            src={ProductImage.image} alt="blog"/>
                        <div className="p-6">
                            
                            <h1 className="text-2xl font-semibold mb-3">{ProductImage.title}</h1>
                            <p className="leading-relaxed mb-3">{ProductImage.main}</p>
                            
                        </div>
                    </div>
                </div>
            ))}
        </>
        
        
    );
}

export default ProductReview;