importScripts("precache-manifest.5f3019853a23cce9a7e334f45da4001f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'cdn-gitpage-test' })

workbox.core.skipWaiting()
workbox.core.clientsClaim()

const cdnPath = 'https://cdn.jsdelivr.net/gh/nieheyong/c@gh-pages'

const tryUseCdn = asset => {
  const hasHash = /\.[0-f]+\./
  if (hasHash.test(asset.url) && !asset.cdn) asset.url = cdnPath + asset.url
  return asset
}

self.__precacheManifest = []
  .concat(self.__precacheManifest || [])
  .map(tryUseCdn)

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

