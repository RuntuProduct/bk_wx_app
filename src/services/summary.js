import { request } from '@utils'

export async function base (params) {
  return await request({
    url: '/summary',
    method: 'get',
    data: params,
  })
}
