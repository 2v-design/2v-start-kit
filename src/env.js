// .env 根据情况配置
let ip = import.meta.env.VITE_APP_IP || '127.0.0.1'

let hostname = ip
let protocol = window.location.protocol
let port = protocol === 'https:' ? 80 : 88
let host = `${ip}:${port}`

if (import.meta.env.PROD) {
  host = window.location.host

  hostname = window.location.hostname
}

export { host, hostname }
