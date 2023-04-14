import React from "react";

function ProductReview() {
    return (
        <div className="p-4 w-6/12">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="h-40 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"/>
                <div className="p-6">
                    
                    <h1 className="text-2xl font-semibold mb-3">가성비가 좋았어요</h1>
                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                        fuga! Dolores quisquam eius cum accusamus?</p>
                    
                </div>
            </div>
        </div>
    );
}

export default ProductReview;