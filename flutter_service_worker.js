'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f84a3a2ebbb3c259bb827e88c7404e64",
"index.html": "b0cca9122a39e9c57e404e02ec0fd4ea",
"/": "b0cca9122a39e9c57e404e02ec0fd4ea",
"main.dart.js": "1c0ca97d8ddcaade2d50ae22cfe62d4a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "65608f31066e37c16e12c45c64421af7",
".git/config": "b2056e703623302fa966e3f5b8ccb8ec",
".git/objects/pack/pack-44967914300156c42fcc25b5e9e23a7a19de07ac.pack": "b33ba9a5aa9d044361965d327b43e67c",
".git/objects/pack/pack-44967914300156c42fcc25b5e9e23a7a19de07ac.idx": "26d7487081196db42c12459fdaaacc8a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/main": "c99640fa208348f5b28055bfaf44e41c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/remotes/origin/main": "c5e9028db0e39304dd28dc79a3593ba7",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "54848a4bdf126d3ea7ff23ef9385c79e",
"assets/NOTICES": "077fd03b767602e0167d11abe004cd9e",
"assets/FontManifest.json": "9e1868353b98ab4022f7fb1ad4c3a063",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "033a0c0a1643728ed80cac29b22b2e65",
"assets/fonts/MaterialIcons-Regular.otf": "2c8f8c7872cf9ad01b8df681915502bc",
"assets/assets/images/fooyee.png": "f8810f65c8f0023045fdcd436e8937ef",
"assets/assets/images/Frame%252020.png": "8205bba275a672e7a58e2716bbdcc0fb",
"assets/assets/images/stockopedia.png": "68eb7b020f69d96a90b4c33b9d6eed07",
"assets/assets/images/fooyee2.png": "17435002af63cd7a669a7ee093317bba",
"assets/assets/images/topimg.png": "cd6048abaab0c1bb85a1566103893b2b",
"assets/assets/images/logo.png": "76902ab5860c8a0d20582d725132e5b9",
"assets/assets/images/img2.png": "8205bba275a672e7a58e2716bbdcc0fb",
"assets/assets/images/kryptal.png": "c31bd4912cc52dc109d1f06b4310e69a",
"assets/assets/images/miez.png": "b633620a4770e9bd6145e5df65d25f3a",
"assets/assets/icons/Twitter.png": "3ce91d9d78decd0b27e6d352082e0cc1",
"assets/assets/icons/LinkedIn%2520.png": "20c01bf3d8d05e40c80865cdd6e20b48",
"assets/assets/prj/stk14.png": "23ab7598e606318ccd30167d4f965246",
"assets/assets/prj/stk15.png": "422a211c8045cbd8276e911728650dd3",
"assets/assets/prj/stk17.png": "a186181dfecb3115afcb563d1c0f0bab",
"assets/assets/prj/stk16.png": "359079fda631737d6be62369fecfbe35",
"assets/assets/prj/stk12.png": "7c38f276720d747cb7c408ac25b1e3dc",
"assets/assets/prj/stk13.png": "ab49912f0608a0b5c66a14f70c8bcee6",
"assets/assets/prj/stk11.png": "aba281c43bacc6d128d9881bb70f8034",
"assets/assets/prj/stk10.png": "8909b558339abfa543a4f05e6459cfdf",
"assets/assets/prj/stk9.png": "a555de9bf2b6835bae192ec33d1f980e",
"assets/assets/prj/ky1.png": "20bdbb5151f631227849cd0181af031b",
"assets/assets/prj/stk8.png": "6e9852aea051806519fa788043a4495e",
"assets/assets/prj/ky3.png": "d92f95ce7549677f521c79e3d44a8d26",
"assets/assets/prj/ky2.png": "f831b3852ccac0b46d8a50b9f8bf04a5",
"assets/assets/prj/mz8.png": "b5d487bb0178e2640cd502513ed5a0f7",
"assets/assets/prj/mz3.png": "c782d39e1a6d240365e6f2370de3e3ed",
"assets/assets/prj/foo1.png": "a722aa3d2ef11c24e8187638ab060519",
"assets/assets/prj/mz2.png": "82b8b317cdb952790769600e6ad4b09c",
"assets/assets/prj/stk1.png": "ab2996a678e517cb99c3f66dc75b8925",
"assets/assets/prj/stk3.png": "63390319e46cadbfb122fc6aa0a505d1",
"assets/assets/prj/foo2.png": "85da833d68216b2746befd4efb5b5c9a",
"assets/assets/prj/foo15.png": "c04336c5dfdca7b30479f3f96ecb5409",
"assets/assets/prj/foo14.png": "689592890bd507aba78538b904cd67f7",
"assets/assets/prj/foo3.png": "6511908a81c8b763ee886b99c748a94c",
"assets/assets/prj/mz1.png": "ba6bb1412cfb1de0bcb9e791b3bd9549",
"assets/assets/prj/stk2.png": "b258d27363db234d9bc000be6db278db",
"assets/assets/prj/stk6.png": "10bef5d6a182bb8117b39244fe3461c0",
"assets/assets/prj/mz5.png": "da5bbbb71d0c797eab3ef57c810c9fe3",
"assets/assets/prj/foo11.png": "8cf97e823e03bc72aeb15f6a214b20a9",
"assets/assets/prj/mz4.png": "ba93f61afdeaa7473b394f9fa006cb0a",
"assets/assets/prj/foo6.png": "9bf07f6da6eec12d3ed5a6dc7d30aa69",
"assets/assets/prj/stk7.png": "18aa080c406690033a977f589106ed49",
"assets/assets/prj/stk5.png": "12785dec850e27fb59231d809cbcdb5d",
"assets/assets/prj/foo4.png": "224c65defbbabce2053bfabf38900c06",
"assets/assets/prj/mz6.png": "c4e9251f8e5f64fcf2b683939e220489",
"assets/assets/prj/foo12.png": "523494771a2fbb3bcaada63e87001ded",
"assets/assets/prj/mz7.png": "112e0c4dc67f686ae26c3b4e42ba2f1b",
"assets/assets/prj/foo5.png": "a0b4a1f0982354b024d7c416aff1b5c2",
"assets/assets/prj/stk4.png": "1c4104690d49d50674a49c130fdf7e03",
"assets/assets/prj/stk21.png": "46c7eb84691c93618a700d773aa8da5a",
"assets/assets/prj/stk20.png": "91d800a7ca5d8cb7c7f4f0e75dbf2bed",
"assets/assets/prj/stk18.png": "44911dfb74c562b5515d541eaafa43d5",
"assets/assets/prj/stk19.png": "049e0f72edfa6634e334cba475957c5f",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "6105a93b4fd635d7f27c5050743edb96",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "fbb6150f718c4e42204c6c44ac7c2bf3",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "c82d1d3b178504a27f1222abf204373b",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
