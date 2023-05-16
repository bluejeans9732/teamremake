
function MyPageLike() {

    const likeItemsFromStorage = JSON.parse(localStorage.getItem('likeItems')) || []; // localstorage에서 likeItems 가져오기

    return (
        <div tabIndex={0} className="collapse">
              <div className="collapse-title text-md font-medium">
                  즐겨찾기
              </div>
              <div className="collapse-content">
                <div className="card lg:card-side">
                  <div className="card-body">
                    <div>
                    <div className="bg-white">
                      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">즐겨찾기</h2>
                            <div className="mt-4 text-gray-500">
                              자주 방문하는 곳이나 방문 예정인 곳들을 표시해두세요.
                            </div>
                            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                              {likeItemsFromStorage.map((likeItem, i) => (
                                <div key={i} className="border-t border-gray-200 pt-4">
                                  <dt className="font-medium text-gray-900">{likeItem.name}</dt>
                                  {/* <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd> */}
                                  <dd className="mt-2 text-sm text-gray-500">{likeItem.main}</dd>
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

export default MyPageLike