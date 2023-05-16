const features2 = [
    { name: '레이', description: 'Designed by Good Goods, Inc.' },
    { name: '모닝', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'k5', description: '6.25" x 3.55" x 1.15"' },
    { name: '지프', description: 'Hand sanded and finished with natural oil' },
]

function MyPageMycar() {
    return (
        <div tabIndex={0} className="collapse">
              <div className="collapse-title text-md font-medium">
                  내차목록
              </div>
              <div className="collapse-content">
                <div className="card lg:card-side">
                  <div className="card-body">
                    <div>
                    <div className="bg-white">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">내 차 목록</h2>
                            <div className="mt-4 text-gray-500">
                             나의 차들을 한눈에 보고 관리할 수 있습니다.
                            </div>
                            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                              {features2.map((feature) => (
                                <div key={feature.name} className="border-t border-gray-200 pt-4">
                                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                                  {/* <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd> */}
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

export default MyPageMycar