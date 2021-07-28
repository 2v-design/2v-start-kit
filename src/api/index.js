import axios from 'axios'
import { ElMessage } from 'element-plus'
import { logout } from 'utils/user'

import { host } from 'env'
import { errorCodes } from './errorCode'
const api = axios.create({
  timeout: 60000,
  baseURL: '//' + host
})

const responseSuccess = ({ data }) => {
  const successCode = data.success
  const errorCode = data.error
  const message = data.message
  if (successCode && successCode === 200) {
    return data.data
  }

  if (errorCode && errorCode === 500) {
    ElMessage({
      message: message,
      center: true,
      type: 'error'
    })
  }

  return Promise.reject(data)
}

const responseFail = ({ response, ...others }) => {
  if (!response) {
    console.error(others) // eslint-disable-line
    return
  }

  if (response.status === 401) {
    setTimeout(logout, 1000)
  }
  ElMessage({
    message: errorCodes[response.status],
    center: true,
    type: 'error'
  })

  return Promise.reject(response)
}

api.interceptors.response.use(responseSuccess, responseFail)
api.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

api.interceptors.response.use(responseSuccess, responseFail)
api.interceptors.request.use()
const jwt = localStorage.getItem('Authorization') || 'noToken'
const userInfo = localStorage.getItem('userInfo') || '{}'
const data = JSON.parse(userInfo)
api.defaults.headers.Authorization = `Bearer ${jwt}`
api.defaults.headers.uploadpath = data.username || 'images'

export default api
