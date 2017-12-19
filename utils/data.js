export default function createGetData (path) {
  return async function getData ({isClient, isServer, payload, redirect, params: {slug}}) {
    let res = {}

    if (payload) {
      res = payload
    } else if (isClient) {
      try {
        const response = await fetch(`/data/${path || `blog/${slug}`}.json`)
        res = await response.json()
      } catch (e) {
        console.error(e)
        redirect('/error')
      }
    } else if (isServer) {
      res = require(`~/dist/data/${path || `blog/${slug}`}.json`)
    }

    return {res}
  }
}
