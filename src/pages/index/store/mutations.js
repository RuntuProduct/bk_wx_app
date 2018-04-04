export const saveBaseInfo = (state, payload) => {
  const { baseInfo, todayInfo, weekInfo } = payload
  state.baseInfo = baseInfo
  state.todayInfo = todayInfo
  state.weekInfo = weekInfo
}

export const saveBookList = (state, payload) => {
  state.bookList = payload
}
