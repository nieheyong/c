importScripts("/precache-manifest.5226671df5640002e79eba66e1a2cd53.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'cdn-gitpage-test' })

workbox.core.skipWaiting()

workbox.core.clientsClaim()

const cdnFiles = [
  'https://cdn.jsdelivr.net/npm/core-js-bundle@3.4.3/minified.js',
  'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.runtime.min.js',
  'https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.min.js',
  'https://cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js'
].map(url => ({ url }))

const cdnPath = 'https://cdn.jsdelivr.net/gh/nieheyong/c@gh-pages'

const precache = self.__precacheManifest.map(asset => {
  const hasHash = /\.[0-f]+\./
  if (hasHash.test(asset.url)) asset.url = cdnPath + asset.url
  return asset
})

self.__precacheManifest = cdnFiles.concat(precache)

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

