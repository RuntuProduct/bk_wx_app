import { request } from '@utils'

export async function base (data) {
  return await request({
    url: '/summary',
    data,
  })
}

export async function queryBook (data) {
  return await request({
    url: '/book',
    data,
  })
}
