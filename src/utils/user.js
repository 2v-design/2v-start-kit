import api from 'api'

export const logout = () => {
  const accessToken = localStorage.getItem('access_token')
  // api.post("/authorize/logout", { accessToken });
  api.delete('/uums/auth/token', { data: { accessToken } })
  clearInterval(window.onlineTimer)
  window.onlineTimer = null
  localStorage.clear()
  location.href = location.origin
}
