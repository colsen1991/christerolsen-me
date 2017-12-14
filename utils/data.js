export default function createGetData (path) {
  return async function getData ({isClient, isServer, payload, params: {slug}}) {
    let res = {}

    if (payload) {
      res = payload
    } else if (isClient) {
      try {
        const response = await fetch(`/data/${path || slug}.json`)
        res = await response.json()
      } catch (e) {
        console.error(e)
      }
    } else if (isServer) {
      res = require(`~/dist/data/${path || slug}.json`)
    }

    return {res}
  }
}
