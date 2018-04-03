import {
  base as SUMMARY,
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
