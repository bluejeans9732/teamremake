import { useState } from 'react';
import ReviewModal from './ReviewModal'

const features3 = [
    { name: '정말 좋았어요', description: '사장님이 정말 친절하고 가격이 친절했어요' },
    { name: '아 이건 좀..', description: '정말 너무한거같아요..' },
    { name: '크흠..', description: '크흠..'}
]

function MyPageReview() {

  const [open, setOpen] = useState(false);

    return (
        <div tabIndex={0} className="collapse">
              <div className="collapse-title text-md font-medium">
                  리뷰관리
              </div>
              <div className="collapse-content">
                <div className="card lg:card-side">
                  <div className="card-body">
                    <div>
                    <div className="bg-white">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">리뷰관리</h2>
                            <div className="mt-4 text-gray-500">
                              내가 그동안 썼던 리뷰들을 모아서 간편하게 볼 수 있습니다.
                            </div>
                            <div className="mt-16 flex flex-col">
                              {features3.map((a,i) => (
                                <div key={a}>
                                  <div  className="border-t border-b border-gray-200 p-4">
                                    <label htmlFor="datails-modal">
                                      <div className="font-medium text-gray-900 cursor-pointer" onClick={() => setOpen(true)}>{features3[i].name}</div>
                                    </label>
                                    <div className="mt-2 text-sm text-gray-500">{features3[i].description}</div>
                                  </div>
                                </div>
                              ))}
                              
                            </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
              <ReviewModal open={open} onClose={() => setOpen(false)} />
            </div>
        </div>
    )
}

export default MyPageReview