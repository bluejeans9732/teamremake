const features = [
  { name: '강남점', description: '타어이 교체 2회', date: '2022년 4월 11일' },
  { name: '성남점', description: '엔진오일 교체, 벨트 교체', date: '2022년 9월 11일' },
  { name: '강북점', description: '브레이크 오일 교체', date: '2022년 12월 11일' },
  { name: '강서점', description: '브레이크 필터 교체', date: '2023년 4월 11일' },
]
const features2 = [
  { name: '레이', description: 'Designed by Good Goods, Inc.' },
  { name: '모닝', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'k5', description: '6.25" x 3.55" x 1.15"' },
  { name: '지프', description: 'Hand sanded and finished with natural oil' },
]
const features3 = [
  { name: '정말 좋았어요', description: '사장님이 정말 친절하고 가격이 친절했어요' },
  { name: '아 이건 좀..', description: '정말 너무한거같아요..' },
]
const features4 = [
  { name: '강남점', description: 'Designed by Good Goods, Inc.', "main" : "율현동 108-9번지 101호 강남구" },
  { name: '성남점', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover',"main": "수정구 태평동 7123-9번지 1층 " },
  { name: '강북점', description: '6.25" x 3.55" x 1.15"', "main": "서울특별시 강북구 미아동 158-41" },
  { name: '강서점', description: 'Hand sanded and finished with natural oil', "main": "가양동 195-5번지 1층 강서구 " },
  { name: '강동점', description: 'Wood card tray and 3 refill packs', "main": "길동 109번지 1호 강동구 "},
  { name: '일산점', description: 'Made from natural materials. Grain and color vary with each item.', "main": "경기도 고양시 일산동구 백석동 1210-3"},
]
export default function MyPage() {
  return (
    <div className="overflow-x-auto w-full  scrollbar-hide min-h-[100%]">
      <div className="avatar h-40 w-full place-content-center">
        <div className="w-24 h-24 rounded-full ml-8 mt-10">
          <img src="/image/profile.png" alt=""/>
        </div>
        <div className="chat chat-start w-80">
          <div className="chat-bubble bg-base-200 text-black w-60 text-center ml-8 mt-10">반가워요 유진 님</div>
        </div>
      </div>
      <div className="divider mb-0"></div>
      <div className="navbar bg-base-000 rounded-box ml-80 mt-0 mb-0">
        <div className="flex justify-center flex-1 px-2">
          <div className="items-stretch">
          {/* 1 */}
            <div tabIndex={0} className="collapse">
              <div className="collapse-title text-lg font-medium">
                  예약내역
              </div>
              <div className="collapse-content">
                <div className="card lg:card-side">
                  <div className="card-body">
                    <p>
                    <div className="bg-white">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24  sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">나의 예약내역</h2>
                            <p className="mt-4 text-gray-500">
                              나의 예약 내역들을 보고 확인할 수 있습니다.
                            </p>
                            <dl className="mt-16 flex flex-col">
                              {features.map((feature) => (
                                <div key={feature.name} className="border-t border-b border-gray-200 p-4">
                                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                                  <dt className="font-thin text-sm text-gray-900 mt-2">{feature.date}</dt>
                                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                </div>
                              ))}
                            </dl>
                        </div>
                      </div>
                    </div>
                    </p>
                    <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div tabIndex={0} className="collapse">
              <div className="collapse-title text-md font-medium">
                  내차목록
              </div>
              <div className="collapse-content">
                <div className="card lg:card-side">
                  <div className="card-body">
                    <p>
                    <div className="bg-white">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">내 차 목록</h2>
                            <p className="mt-4 text-gray-500">
                             나의 차들을 한눈에 보고 관리할 수 있습니다.
                            </p>
                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                              {features2.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
                                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                                  {/* <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd> */}
                                </div>
                              ))}
                            </dl>
                        </div>
                      </div>
                    </div>
                    </p>
                    <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div tabIndex={0} className="collapse">
              <div className="collapse-title text-md font-medium">
                  리뷰관리
              </div>
              <div className="collapse-content">
                <div className="card lg:card-side">
                  <div className="card-body">
                    <p>
                    <div className="bg-white">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">리뷰관리</h2>
                            <p className="mt-4 text-gray-500">
                              내가 그동안 썼던 리뷰들을 모아서 간편하게 볼 수 있습니다.
                            </p>
                            <dl className="mt-16 flex flex-col">
                              {features3.map((feature) => (
                                <div key={feature.name} className="border-t border-b border-gray-200 p-4">
                                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                </div>
                              ))}
                            </dl>
                        </div>
                      </div>
                    </div>
                    </p>
                    <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div tabIndex={0} className="collapse">
              <div className="collapse-title text-md font-medium">
                  즐겨찾기
              </div>
              <div className="collapse-content">
                <div className="card lg:card-side">
                  <div className="card-body">
                    <p>
                    <div className="bg-white">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">즐겨찾기</h2>
                            <p className="mt-4 text-gray-500">
                              자주 방문하는 곳이나 방문 예정인 곳들을 표시해두세요.
                            </p>
                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                              {features4.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
                                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                                  {/* <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd> */}
                                  <dd className="mt-2 text-sm text-gray-500">{feature.main}</dd>
                                </div>
                              ))}
                            </dl>
                        </div>
                      </div>
                    </div>
                    </p>
                    <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};