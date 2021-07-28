export const loadjs = (url) =>
  new Promise((resolve) => {
    const jsElm = document.createElement('script')
    jsElm.src = url
    jsElm.async = false
    jsElm.onload = () => {
      resolve()
    }
    document.head.appendChild(jsElm)
  })
