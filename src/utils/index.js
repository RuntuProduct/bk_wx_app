import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import request from './request'
import config from './config'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export const wrapStore = (config) => {
  const debug = process.env.NODE_ENV !== 'production'

  return new Vuex.Store({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    ...config,
  })
}

export {
  request,
  config,
}
