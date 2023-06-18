'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f84a3a2ebbb3c259bb827e88c7404e64",
"index.html": "f1e757b8910d40844f022293e1557d9f",
"/": "f1e757b8910d40844f022293e1557d9f",
"main.dart.js": "7ae19b10fda188d5883d0ba9de387687",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "59f23b8af4352f30c84d9945690501b3",
"icons/Icon-192.png": "dcae0f91e53a7b6bfd61751f529ebf2a",
"icons/Icon-maskable-192.png": "dcae0f91e53a7b6bfd61751f529ebf2a",
"icons/Icon-maskable-512.png": "aa75348d264d824d5361d493c124a630",
"icons/Icon-512.png": "aa75348d264d824d5361d493c124a630",
"manifest.json": "cfc531c7cf2bdaef9a1610a5172c8a36",
".git/config": "b2056e703623302fa966e3f5b8ccb8ec",
".git/objects/9b/b37e9b21da823f21b650085749fc830f62a883": "2a88e1770124a9546863acf6a8202ac1",
".git/objects/d0/bf6a10b02398eec97aa5e5e910451c7e5b9acb": "e1b7f17f471c0cc81558b7766d0ffe2c",
".git/objects/f5/a03ba3331592e4af76ee82a2cf52aa290ea508": "a737cf28d4648f4d614cb2b897d131e8",
".git/objects/4e/470add8a76685d9bc9d703b045093cd6237216": "abee0c40cd6c3138e6c5964a94bc7389",
".git/objects/pack/pack-44967914300156c42fcc25b5e9e23a7a19de07ac.pack": "b33ba9a5aa9d044361965d327b43e67c",
".git/objects/pack/pack-44967914300156c42fcc25b5e9e23a7a19de07ac.idx": "26d7487081196db42c12459fdaaacc8a",
".git/objects/16/27ae7c9ad912b98ea74c930f38b4861758508b": "ce6b21dde597317de7144c36c5e60d5f",
".git/objects/21/83bf8fd9ea62fccf66745a32a03b066642ee41": "989fcb8e5116bef23fb83bdee1f40069",
".git/objects/6e/8891f44fbc261637c281af4a8a93d0dc4d6240": "f8e4a81e881038f5becb99a784a736e7",
".git/objects/53/aa767511f9ad87932c15c549db835a4b1ad053": "f6cf9b83b4b5ea4f416ba1680e1ad99d",
".git/objects/3f/a9e99d79135c5793105a4964cfed33232f2f8e": "f7ea91409f72b5fe32d41a2dc4dd07bf",
".git/objects/b6/75f3cfe29730b097ff06a746b98a60f8b197d6": "9ef106911231d5139e3054cd7e07e861",
".git/objects/af/c5ef24777537fbf4e343f9c0cb38e7a130cdbc": "52ece9e241a3c342f8b235f866e9fc2b",
".git/objects/12/08ad6d1fb0616ce57749357c35ae4123180c68": "d8c9cd3096069e5ad5fcd96854ab1f35",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/main": "67984ae77a373f1aebc3e32868e0ff21",
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
".git/refs/remotes/origin/main": "f704f37cf84e4d5a718afe367c18d65d",
".git/FETCH_HEAD": "7566beda148eb95fb6f5115489ac761e",
"assets/AssetManifest.json": "7b04b229b2227a76c941171f3cd519bf",
"assets/NOTICES": "a2a98682546f894aa047a5425d3fc804",
"assets/FontManifest.json": "9e1868353b98ab4022f7fb1ad4c3a063",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "451ac4e47b146305a71fb74b9bfb34cd",
"assets/fonts/MaterialIcons-Regular.otf": "0c800ad1e9ddd8021b9845c0f8a24d27",
"assets/assets/images/fooyee.png": "f8810f65c8f0023045fdcd436e8937ef",
"assets/assets/images/health.png": "b3d171682be932ef412a48ccf9e6d81b",
"assets/assets/images/rec1.png": "acec1bc7278bc8d275bc9c49438f736a",
"assets/assets/images/rec0.png": "689d0290595cb3d8a6cb6a5263fd6736",
"assets/assets/images/Frame%252020.png": "8205bba275a672e7a58e2716bbdcc0fb",
"assets/assets/images/rec2.png": "586864bc0c8ba7dced82f301cca59429",
"assets/assets/images/cert0.png": "76ec1fa016a0b9cfaf75cbee1e9f3c0c",
"assets/assets/images/cert1.png": "9e606541113c25ae68f4ded721ca2773",
"assets/assets/images/rec3.png": "3cbaf4235c6472eb93a182dbe5bad77f",
"assets/assets/images/stockopedia.png": "68eb7b020f69d96a90b4c33b9d6eed07",
"assets/assets/images/fooyee2.png": "17435002af63cd7a669a7ee093317bba",
"assets/assets/images/topimg.png": "cd6048abaab0c1bb85a1566103893b2b",
"assets/assets/images/logo.png": "76902ab5860c8a0d20582d725132e5b9",
"assets/assets/images/img2.png": "8205bba275a672e7a58e2716bbdcc0fb",
"assets/assets/images/clrs.png": "53316b37e3295bca9f5a7a2081350a11",
"assets/assets/images/kryptal.png": "c31bd4912cc52dc109d1f06b4310e69a",
"assets/assets/images/topdooo.png": "7a5710241c50a8c73c7f036ba333886d",
"assets/assets/images/miez.png": "b633620a4770e9bd6145e5df65d25f3a",
"assets/assets/icons/Twitter.png": "3ce91d9d78decd0b27e6d352082e0cc1",
"assets/assets/icons/LinkedIn%2520.png": "20c01bf3d8d05e40c80865cdd6e20b48",
"assets/assets/prj/health11.png": "836837ba0420faa34a59f5cb64c2e686",
"assets/assets/prj/stk14.png": "23ab7598e606318ccd30167d4f965246",
"assets/assets/prj/stk15.png": "422a211c8045cbd8276e911728650dd3",
"assets/assets/prj/health10.png": "3b161453e59a3acb8f0560386695ba3a",
"assets/assets/prj/health12.png": "31d513b3bceea540499322b005ff5b9a",
"assets/assets/prj/stk17.png": "a186181dfecb3115afcb563d1c0f0bab",
"assets/assets/prj/stk16.png": "359079fda631737d6be62369fecfbe35",
"assets/assets/prj/health13.png": "994b00b648506da36eeeaadd09d1cda2",
"assets/assets/prj/health17.png": "20b456e63409581c789475f9988aa15c",
"assets/assets/prj/stk12.png": "7c38f276720d747cb7c408ac25b1e3dc",
"assets/assets/prj/stk13.png": "ab49912f0608a0b5c66a14f70c8bcee6",
"assets/assets/prj/health16.png": "22c5c8050e14e2131daeee9a74da2917",
"assets/assets/prj/health14.png": "d30bff157a4ef2736a0952d160dc4522",
"assets/assets/prj/stk11.png": "aba281c43bacc6d128d9881bb70f8034",
"assets/assets/prj/stk10.png": "8909b558339abfa543a4f05e6459cfdf",
"assets/assets/prj/health15.png": "b9e74c57134b74567ca6330df63f913d",
"assets/assets/prj/stk9.png": "a555de9bf2b6835bae192ec33d1f980e",
"assets/assets/prj/health1.png": "457c4aee14ba214a3d16a4cc19ffdc44",
"assets/assets/prj/ky1.png": "20bdbb5151f631227849cd0181af031b",
"assets/assets/prj/stk8.png": "6e9852aea051806519fa788043a4495e",
"assets/assets/prj/ky3.png": "d92f95ce7549677f521c79e3d44a8d26",
"assets/assets/prj/health2.png": "f2cdf6a7fd685121362ed01a36d3e319",
"assets/assets/prj/health3.png": "a30f1096103bb0d4af35dfc75512d951",
"assets/assets/prj/ky2.png": "f831b3852ccac0b46d8a50b9f8bf04a5",
"assets/assets/prj/mz8.png": "b5d487bb0178e2640cd502513ed5a0f7",
"assets/assets/prj/health7.png": "d747112eaf97de733932e9f206e5de27",
"assets/assets/prj/health6.png": "0191f77a2f5346be4b6d9a905f4be973",
"assets/assets/prj/health4.png": "812f3c442c0c06bba17ec036a338d2a8",
"assets/assets/prj/health5.png": "97e4bec133e81236864dc4abb8a75f55",
"assets/assets/prj/mz3.png": "c782d39e1a6d240365e6f2370de3e3ed",
"assets/assets/prj/foo1.png": "a722aa3d2ef11c24e8187638ab060519",
"assets/assets/prj/health8.png": "e631ebb477745a4c4ac5e05743a59b07",
"assets/assets/prj/health9.png": "697d12964c912f2f02b471aa86847127",
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
"assets/assets/prj/health18.png": "129640a668de8754fc98984ffa820d05",
"assets/assets/prj/stk21.png": "46c7eb84691c93618a700d773aa8da5a",
"assets/assets/prj/stk20.png": "91d800a7ca5d8cb7c7f4f0e75dbf2bed",
"assets/assets/prj/health19.png": "10c1d7d2600a53ba1a66ca947ba6490f",
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
