const features = [
    { name: '강남점', description: '타어이 교체 2회', date: '2022년 4월 11일' },
    { name: '성남점', description: '엔진오일 교체, 벨트 교체', date: '2022년 9월 11일' },
    { name: '강북점', description: '브레이크 오일 교체', date: '2022년 12월 11일' },
    { name: '강서점', description: '브레이크 필터 교체', date: '2023년 4월 11일' },
]

function MypageReservation() {
    return (
        
        <div tabIndex={0} className="collapse">
              <div className="collapse-title text-lg font-medium">
                  예약내역
              </div>
              <div className="collapse-content w-full">
                <div className="card lg:card-side">
                  <div className="card-body">
                    <div>
                    <div className="bg-white">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">나의 예약내역</h2>
                            <div className="mt-4 text-gray-500">
                              나의 예약 내역들을 보고 확인할 수 있습니다.
                            </div>
                            <div className="mt-16 flex flex-col">
                              {features.map((feature) => (
                                <div key={feature.name} className="border-t border-b border-gray-200 p-4">
                                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                                  <dt className="font-thin text-sm text-gray-900 mt-2">{feature.date}</dt>
                                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
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
            </div>
          </div>
    )
}

export default MypageReservation