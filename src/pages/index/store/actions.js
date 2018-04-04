import {
  base as SUMMARY,
  queryBook as QUERYBOOK,
} from '@services/summary'

export const getBaseInfo = async (
  { commit },
  payload,
) => {
  const { state, data } = await SUMMARY()
  if (state) {
    commit('saveBaseInfo', data)
  } else {
    throw new Error(data)
  }
}

export const getBookList = async (
  { commit },
  payload,
) => {
  const { state, data } = await QUERYBOOK()
  if (state) {
    commit('saveBookList', data)
  } else {
    throw new Error(data)
  }
}
