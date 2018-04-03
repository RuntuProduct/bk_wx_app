export const saveBaseInfo = (state, payload) => {
  const { baseInfo, todayInfo, weekInfo } = payload
  state.baseInfo = baseInfo
  state.todayInfo = todayInfo
  state.weekInfo = weekInfo
}
