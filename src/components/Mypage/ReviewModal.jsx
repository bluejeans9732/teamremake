

export default function ReviewModal({ open, onClose }) {

    return (
        <div onClick={onClose} className={`
            fixed inset-0 flex justify-center items-center transition-colors ${ open ? "visible bg-black/20" : "hidden"}
        `}>
            <div 
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl w-1/3  shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <button 
                    onClick={onClose}
                    className='absolute top-5 right-9 p-1 rounded-lg text-gray-400 bg-white  hover:text-gray-600 z-10'
                >
                    돌아가기
                </button>
                <div>
                    <div>11</div>
                    <div>22</div>
                </div>
            </div>
            
        </div>
    )
}