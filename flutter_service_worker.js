'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ba4cf878d3f9f9c7e6ad254a9d1e147c",
"assets/AssetManifest.bin.json": "73917946864a1f227bb60bac4c466677",
"assets/AssetManifest.json": "8bf1fedd3060471b1beee7d08315c448",
"assets/assets/font/static/RobotoSerif-Black.ttf": "3b2ec48e72f60673445e601a5396a611",
"assets/assets/font/static/RobotoSerif-BlackItalic.ttf": "9fe5ba62c60be6297dc99269e3f8750b",
"assets/assets/font/static/RobotoSerif-Bold.ttf": "ae9627d08d922b46111fe0e09d59450a",
"assets/assets/font/static/RobotoSerif-BoldItalic.ttf": "7fccf0a7138db2eff0b2f5e2f38c2c8a",
"assets/assets/font/static/RobotoSerif-ExtraBold.ttf": "321023caa8659d9bee4233796bc507b2",
"assets/assets/font/static/RobotoSerif-ExtraBoldItalic.ttf": "1f65075b399bf4de4f528bb71bb79cc8",
"assets/assets/font/static/RobotoSerif-ExtraLight.ttf": "f334869b6e27f8110f61e6e824285b20",
"assets/assets/font/static/RobotoSerif-ExtraLightItalic.ttf": "31703179423f9c9ff1e203c0ef0891e7",
"assets/assets/font/static/RobotoSerif-Italic.ttf": "c4ee1ae4256a3087efe12873ff932d5c",
"assets/assets/font/static/RobotoSerif-Light.ttf": "8a0966f8d1c113602ba7ab10c456ac6a",
"assets/assets/font/static/RobotoSerif-LightItalic.ttf": "ccf34a5f26e6327db9deaec4ae17d6d8",
"assets/assets/font/static/RobotoSerif-Medium.ttf": "7e7f59bc44bde675c229d009d5e99beb",
"assets/assets/font/static/RobotoSerif-MediumItalic.ttf": "cf91cf8f991a8d7063dc2f8be7e7da79",
"assets/assets/font/static/RobotoSerif-Regular.ttf": "81fea2117d3796412dcf9fca5ae52e46",
"assets/assets/font/static/RobotoSerif-SemiBold.ttf": "ba11662fa31612ccacff9134724b43d8",
"assets/assets/font/static/RobotoSerif-SemiBoldItalic.ttf": "eedc03743e3a6db93e8f0375f3981f66",
"assets/assets/font/static/RobotoSerif-Thin.ttf": "246671b8a1cbef4df3629374ea70dadf",
"assets/assets/font/static/RobotoSerif-ThinItalic.ttf": "85137bc5b85516943841d6f44d4d5c90",
"assets/assets/font/static/RobotoSerif_120pt-Black.ttf": "8a955956cb280540db54c8d2779e556e",
"assets/assets/font/static/RobotoSerif_120pt-BlackItalic.ttf": "c0882026748eab84e1c88c094c4d970e",
"assets/assets/font/static/RobotoSerif_120pt-Bold.ttf": "a664aed28a335f7973c6a6c1f118e477",
"assets/assets/font/static/RobotoSerif_120pt-BoldItalic.ttf": "14de25863e0399d74dd67505365f6840",
"assets/assets/font/static/RobotoSerif_120pt-ExtraBold.ttf": "3b197eafe25da7f7bb6a8b785577620f",
"assets/assets/font/static/RobotoSerif_120pt-ExtraBoldItalic.ttf": "6d368c8f8a3f29885283e20a1f6a4856",
"assets/assets/font/static/RobotoSerif_120pt-ExtraLight.ttf": "86cf7252606f859b8a0a272b9e55f394",
"assets/assets/font/static/RobotoSerif_120pt-ExtraLightItalic.ttf": "3f8e1c8652d1ee62a9cae91a29787346",
"assets/assets/font/static/RobotoSerif_120pt-Italic.ttf": "b089261b0c2dff612cc707810a8bec7d",
"assets/assets/font/static/RobotoSerif_120pt-Light.ttf": "568b467ad0af658862eac6d43b9bc789",
"assets/assets/font/static/RobotoSerif_120pt-LightItalic.ttf": "316fb16b608f5ea0ebe07e4a074e774a",
"assets/assets/font/static/RobotoSerif_120pt-Medium.ttf": "0edf4c4e249704cb4787f49e4e613075",
"assets/assets/font/static/RobotoSerif_120pt-MediumItalic.ttf": "aedec4971c446dc03a072ecd9e8a6448",
"assets/assets/font/static/RobotoSerif_120pt-Regular.ttf": "094e490c590882394f4032045ec26308",
"assets/assets/font/static/RobotoSerif_120pt-SemiBold.ttf": "535727de1164d0a0ea1054e1fc0a7423",
"assets/assets/font/static/RobotoSerif_120pt-SemiBoldItalic.ttf": "1450f6fe2217ee1eb41f0b5d7037c0a1",
"assets/assets/font/static/RobotoSerif_120pt-Thin.ttf": "c60a0209af28552dd485e64b260198fd",
"assets/assets/font/static/RobotoSerif_120pt-ThinItalic.ttf": "f6bd7a31c019b99bf888a369c7f2b584",
"assets/assets/font/static/RobotoSerif_28pt-Black.ttf": "1385c9a1f0368ad4ba0208a91c721531",
"assets/assets/font/static/RobotoSerif_28pt-BlackItalic.ttf": "8c5b8bc258cecab0a75b2eb4acc53363",
"assets/assets/font/static/RobotoSerif_28pt-Bold.ttf": "47c8afb66c1e89dac9e1fc98b016965e",
"assets/assets/font/static/RobotoSerif_28pt-BoldItalic.ttf": "4cec25cf0feaa6b6407cbe71e9ac2336",
"assets/assets/font/static/RobotoSerif_28pt-ExtraBold.ttf": "4670d3c1ce0daf49d789da46af6e29d5",
"assets/assets/font/static/RobotoSerif_28pt-ExtraBoldItalic.ttf": "7538d98c8bcd793208c815915ecde4da",
"assets/assets/font/static/RobotoSerif_28pt-ExtraLight.ttf": "392f01e4bd9e70ba41c13e73ee1344dc",
"assets/assets/font/static/RobotoSerif_28pt-ExtraLightItalic.ttf": "312cf5b7061566f2ba77caaf8909dd5a",
"assets/assets/font/static/RobotoSerif_28pt-Italic.ttf": "c01542aeeafff29682607a119be3036b",
"assets/assets/font/static/RobotoSerif_28pt-Light.ttf": "0e4c088c1fff00e00205773c91718b8d",
"assets/assets/font/static/RobotoSerif_28pt-LightItalic.ttf": "f95ab89be25d2c9f9000b1cfdb61f6f4",
"assets/assets/font/static/RobotoSerif_28pt-Medium.ttf": "143adf3e1ce1fdc4ed3c0ff4c2b20c89",
"assets/assets/font/static/RobotoSerif_28pt-MediumItalic.ttf": "715d5c6167cd2a34ab78d50e49f73a8b",
"assets/assets/font/static/RobotoSerif_28pt-Regular.ttf": "0af3a80b45753a76c89b18def01f2c06",
"assets/assets/font/static/RobotoSerif_28pt-SemiBold.ttf": "9a6e590163bcbb74551b5ff6e0f7c6a7",
"assets/assets/font/static/RobotoSerif_28pt-SemiBoldItalic.ttf": "45b6be0ac39975e1ae87a1e2816c8d4b",
"assets/assets/font/static/RobotoSerif_28pt-Thin.ttf": "5ef5a2c7d88e3385866539f5f68e1e3b",
"assets/assets/font/static/RobotoSerif_28pt-ThinItalic.ttf": "64fa30ff8d7c98819d50e08c756eb1d7",
"assets/assets/font/static/RobotoSerif_36pt-Black.ttf": "180767f2529db8bcea110f84e01f1047",
"assets/assets/font/static/RobotoSerif_36pt-BlackItalic.ttf": "f593d629ea2cc40094b4c3693d902a61",
"assets/assets/font/static/RobotoSerif_36pt-Bold.ttf": "ab050bc2ed21ae3df186923c17695a7a",
"assets/assets/font/static/RobotoSerif_36pt-BoldItalic.ttf": "9ccd7370e64845443f714188433438db",
"assets/assets/font/static/RobotoSerif_36pt-ExtraBold.ttf": "8ff43cd41ca5e6e2400a3d76cd87c57f",
"assets/assets/font/static/RobotoSerif_36pt-ExtraBoldItalic.ttf": "550d5409e5540dbc1ebdb35765b06fbd",
"assets/assets/font/static/RobotoSerif_36pt-ExtraLight.ttf": "5c4bbd1db8127a5bf3ea382ef5102c01",
"assets/assets/font/static/RobotoSerif_36pt-ExtraLightItalic.ttf": "b9716a39131d736114c634b7ba820147",
"assets/assets/font/static/RobotoSerif_36pt-Italic.ttf": "f479cda77ec42d61fbbc6f3f5d9a0e00",
"assets/assets/font/static/RobotoSerif_36pt-Light.ttf": "5bcd602f233c6ba4128fffafc9964ede",
"assets/assets/font/static/RobotoSerif_36pt-LightItalic.ttf": "7b4e40a1ee9d926ae5f4d7f7d8f95fe0",
"assets/assets/font/static/RobotoSerif_36pt-Medium.ttf": "04de575cf546071c7971757bc4072eaa",
"assets/assets/font/static/RobotoSerif_36pt-MediumItalic.ttf": "18aaf01175c4bf573792c57ce8523211",
"assets/assets/font/static/RobotoSerif_36pt-Regular.ttf": "664f44065d97b5723dcbe1b767776399",
"assets/assets/font/static/RobotoSerif_36pt-SemiBold.ttf": "893449d9c4128d06a87bfc907dda60cb",
"assets/assets/font/static/RobotoSerif_36pt-SemiBoldItalic.ttf": "a155a446b4ab87edf18cb90483638e3d",
"assets/assets/font/static/RobotoSerif_36pt-Thin.ttf": "bc451ad8cd30e2aed3d8109ec97438be",
"assets/assets/font/static/RobotoSerif_36pt-ThinItalic.ttf": "7d866f11462c68d34b0fbc07d6a6bcf3",
"assets/assets/font/static/RobotoSerif_72pt-Black.ttf": "b3d928ebf28ab82351d9ab830bb8e520",
"assets/assets/font/static/RobotoSerif_72pt-BlackItalic.ttf": "c4e8b1766f1aca516096fb69f727202d",
"assets/assets/font/static/RobotoSerif_72pt-Bold.ttf": "abfd2aa8cad6ff4126ab8ed2eb4ce627",
"assets/assets/font/static/RobotoSerif_72pt-BoldItalic.ttf": "599f50e7b2d458e8351c6fb241a0289b",
"assets/assets/font/static/RobotoSerif_72pt-ExtraBold.ttf": "0cf9c03578254906682c51bd31ba9a7f",
"assets/assets/font/static/RobotoSerif_72pt-ExtraBoldItalic.ttf": "59dc35ab97f58b6f0e08b372cd57e109",
"assets/assets/font/static/RobotoSerif_72pt-ExtraLight.ttf": "0088e70e66fac56648433d4a5906b7ba",
"assets/assets/font/static/RobotoSerif_72pt-ExtraLightItalic.ttf": "b21a01fc6d8e27ce023614ca4989eb64",
"assets/assets/font/static/RobotoSerif_72pt-Italic.ttf": "9508096f867c6507cc185855e6685ce2",
"assets/assets/font/static/RobotoSerif_72pt-Light.ttf": "c0ef3f5f0a3926c5cc696e7e72d03ee8",
"assets/assets/font/static/RobotoSerif_72pt-LightItalic.ttf": "3d8228aa2bc5e0b3506d2765086da4be",
"assets/assets/font/static/RobotoSerif_72pt-Medium.ttf": "40f1501c05219aeecb7778fd256b9959",
"assets/assets/font/static/RobotoSerif_72pt-MediumItalic.ttf": "a0e5d80cdb7648cdacec5f04850586d0",
"assets/assets/font/static/RobotoSerif_72pt-Regular.ttf": "67073961ef379a95840f93d8088e16b6",
"assets/assets/font/static/RobotoSerif_72pt-SemiBold.ttf": "7a1a53d9f9a9bed677097a576e9dcf56",
"assets/assets/font/static/RobotoSerif_72pt-SemiBoldItalic.ttf": "35332418c54583978844a47e297b1e3d",
"assets/assets/font/static/RobotoSerif_72pt-Thin.ttf": "8832d174e36902e35eb806a123a8c254",
"assets/assets/font/static/RobotoSerif_72pt-ThinItalic.ttf": "4ed8095e64f00551b6dec19550ce47fc",
"assets/assets/images/adrenalin.jpeg": "7454be73c2021432459d7d409baa861b",
"assets/assets/images/Artist_hole.jpeg": "b9c5ab9dad0074ad884f4e8129aa3e9e",
"assets/assets/images/Ayah.jpeg": "9cfa4b76de14f7b2853bf38057e27b33",
"assets/assets/images/Bookly.jpeg": "8037f6295fcc34627c96de9e4212c9ea",
"assets/assets/images/im.png": "b5932ba009f6c5004e3b80ffd3dcd271",
"assets/assets/images/logo.png": "b3c69446879263c42269f7989c6e24cf",
"assets/assets/images/Memory_match_game.jpeg": "181ef5f030336ffd878d1f7a0b649acf",
"assets/assets/images/Movies_app.jpeg": "c23288a79b52c8348ecdceeaf331b82d",
"assets/assets/images/Netflix_clone.jpeg": "726603a1a0e295769a346999f192893a",
"assets/assets/images/Rick_and_Morty.jpeg": "df96bf23bd5f69f53271a21b02727258",
"assets/assets/images/Smart_mune.jpeg": "a735119a69a172604b772fb7262ba470",
"assets/assets/images/Snake_game.jpeg": "cc7a3062c123780b413ef4d874fca611",
"assets/assets/images/Ticket_station.jpeg": "a867708d07315318cac6a7ff551d060e",
"assets/assets/images/x_o.jpeg": "74959edabf6386e00c55c09ef26ddb7d",
"assets/FontManifest.json": "77f1abf5e6c5f955a98c42872161c224",
"assets/fonts/MaterialIcons-Regular.otf": "b7cc03b5f72cf5909251ccb7b5dd3f5e",
"assets/NOTICES": "06f72484c810e3e5fbb4529840f3281d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5c034025faeee260c7a93e8d3c93cc36",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "07abd501b34de0fedcae67ef3e77204d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5b0b08846f90b58002720e954f326bd5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "48c20febb4301b9a701db6c732628911",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "372e11f20306f1356068d0e8363b86f3",
"icons/Icon-192.png": "9392e3a9e6e94b5d29fc68e73106699b",
"icons/Icon-512.png": "4b089ed756773cb0374094e11baf9c44",
"icons/Icon-maskable-192.png": "9392e3a9e6e94b5d29fc68e73106699b",
"icons/Icon-maskable-512.png": "4b089ed756773cb0374094e11baf9c44",
"index.html": "2dbe571fce7265cdf38e80a8e81f8f47",
"/": "2dbe571fce7265cdf38e80a8e81f8f47",
"main.dart.js": "d7018a660b5e4e10a21c0017238f0d1f",
"manifest.json": "eb002e5ffc18ddbfe06a4d66414f1d67",
"version.json": "c3deafc902550dc3496e126855baee23"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
