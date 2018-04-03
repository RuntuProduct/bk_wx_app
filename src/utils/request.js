const rootURL = 'http://rapapi.org/mockjsdata/32957'

const fakeAxios = function (url, type, dataType, data, options) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: `${rootURL}${url}`,
      data: data,
      method: type,
      ...options,
      success: function ({ data }) {
        console.log('req suc:', rootURL + url, data)
        if (data.success === true) {
          resolve({
            state: 'success',
            data: data.data,
          })
        } else {
          reject({
            state: 'err',
            msg: typeof data.data === 'string' ? data.data : 'Unexpected Error',
          })
        }
      },
      fail: function (err) {
        console.log(rootURL + url, 'fail', err)
        reject({ state: 'err' })
      },
    })
  })
}

const fetch = (options) => {
  const {
    method = 'get',
    data,
    paramsType,
  } = options
  let {
    url,
    headers = {},
  } = options

  const defaultHeader = {}
  // 判断传参格式
  if (paramsType === 'form') {
    Object.assign(defaultHeader, {
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  } else {
    // 默认为json
    Object.assign(defaultHeader, {
      'Content-Type': 'application/json',
    })
  }

  const useOptions = {
    header: Object.assign(headers, defaultHeader),
  }

  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    url = domin + url
  } catch (e) {
    throw new Error(e.message)
  }

  const match = method.toUpperCase()

  if (
    match === 'GET' ||
    match === 'POST' ||
    match === 'PUT' ||
    match === 'DELETE'
  ) {
    return fakeAxios(url, match, paramsType, data, useOptions)
  } else {
    throw new Error('request type error' + method)
  }
}

const request = async (options) => {
  return await fetch(options).catch((da) => {
    const { msg } = da
    if (msg) {
      // 显示错误信息
      wx.showToast({
        title: msg,
        icon: 'none',
        mask: true,
        duration: 2000,
      })
    } else {
      // 显示网络状态异常弹窗
      wx.showModal({
        title: '网络状态异常！',
        content: '请检查您的网络配置是否正常',
        showCancel: false,
        confirmText: '了解',
      })
    }
  })
}

export default request
