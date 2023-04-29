const features = [
  { name: '타이어 샵', description: 'Designed by Good Goods, Inc.' },
  { name: '엔진오일 샵', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: '정기검진', description: '6.25" x 3.55" x 1.15"' },
  { name: '자동차 관리', description: 'Hand sanded and finished with natural oil' },
]
const features2 = [
  { name: '레이', description: 'Designed by Good Goods, Inc.' },
  { name: '모닝', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'k5', description: '6.25" x 3.55" x 1.15"' },
  { name: '지프', description: 'Hand sanded and finished with natural oil' },
]
const features3 = [
  { name: '글1', description: 'Designed by Good Goods, Inc.' },
  { name: '글2', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
]
const features4 = [
  { name: '즐찾1', description: 'Designed by Good Goods, Inc.' },
  { name: '즐찾2', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: '즐찾3', description: '6.25" x 3.55" x 1.15"' },
  { name: '즐찾4', description: 'Hand sanded and finished with natural oil' },
  { name: '즐찾5', description: 'Wood card tray and 3 refill packs' },
  { name: '즐찾6', description: 'Made from natural materials. Grain and color vary with each item.' },
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
                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                              {features.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
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
                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                              {features3.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
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
        </div>
      </div>
    </div>
  </div>
  )
};