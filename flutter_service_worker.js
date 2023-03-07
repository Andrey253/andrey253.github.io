'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6d3d0b19a9c27661bdf3dc9f1c5d5d16",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0fe219aa09adc575475a578493436ba0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "042cf8cbc75552af6d418caeea6558b8",
".git/logs/refs/heads/main": "f474dd0a1c78139bf2d939f485bedfe2",
".git/logs/refs/remotes/origin/main": "2e48e29009849f1c089b5d5fd48f85f3",
".git/objects/00/50085f964b20f7f8a0a86bdb7ec61438a432db": "ef9a32d5347a2f2721dff6728cffbb9a",
".git/objects/04/f858cb4739c42c1f968a193361e60405b727a3": "322efbd1a9bbe16886884d0c6a313bb6",
".git/objects/05/5bbfd0160801f64eb3e9556bbe7a5a60249730": "1dd168f2aad6a1a3ddcdcb874aae1ecb",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/66d16c78118c94265ca7182776be4bb82bab20": "d09dd1dc8ef1c68c9d1fc6a29f91fe83",
".git/objects/0a/a454c437fdbd077f7af676ddd3aaaba7d1bf54": "e3cbc4bac888b85b1f0691c36b20b93e",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "fb0abddd81c1bf861974f1787268a4c1",
".git/objects/0e/f5aaf0180f2fcfd7e6f71bb23d820b678fbc66": "209c33130953d48c4d931b4a213163cd",
".git/objects/13/af50c0bfc9b9216cb02e6350166bece955daa9": "5f58c2227fb2483e390b8f9c79ace2e1",
".git/objects/1e/c4b38ed51b86513453dd5491ee1810bfcaf1f9": "98e32d8e195dd0fec70a60e85f5f0771",
".git/objects/20/9b98d1dc93b8b17085b80db7f630ae5d70c5d2": "7a32e966864a53d37c7f6d751622d48f",
".git/objects/28/318715dbb232bb89a6e64a4afdd12137d0eda1": "2f7d6262af8be2174cb5a3a82005f32f",
".git/objects/2c/235e99563dcb6ebcb9a82e832ce1d60fa00462": "e56c62bcb5a24b5feb796cc44baf4245",
".git/objects/2d/a8d4af2dcf5c35be3577f751449fe14fe6fefa": "707fe7113a51838d060c21f3298718e2",
".git/objects/2e/6350dadefabf7bdace64b1a055121b9547d8dd": "1c6eab3bba87b27ae401dbad03e41b69",
".git/objects/33/7709a4cccc75927a75d9ecb7f1f464c1a49e9a": "e124daac8abc98fc8418fd7ef9cbcc5d",
".git/objects/33/89055167365b805baea3e8f0e6547dd4aec408": "489043e9875c57c9f38c1ec08a0d12f8",
".git/objects/33/fbf3b70fb600dd3ff1f3ed13d53d5b69d706b2": "d4205d068f624ba7ca348a5213bcf08e",
".git/objects/35/c092e1e4259e3f7669fc3406da9af7338b80af": "bc119a0dccb3c3ae19d481f2711aba5b",
".git/objects/37/0c33eac26ea4f15fb79c10fbf1e8f88edf978f": "2fab2120093fc752378488305d15a537",
".git/objects/3b/d4a3b6b2a96e4b1b4cb8bcca8960ef51e7d6e2": "aa07fde0249661e1a4e2aff9c5601d2c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/0ac6cb4eec3a5dc71d64f25f7a2eac5c3c861c": "55d4cb3519d77dbcd723d782992c05b9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/59/0587415c1ee338196ac4f9258e22705662e4af": "3126dfdfc2dd9ac62c03a47dcd516324",
".git/objects/61/fed77f5778d0ac247a34f8eaf9ffc8649b222b": "88019137d4d76d423c81847e1558f983",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "884fe2b91ea53406783d4347b8f8f30a",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "f290a2e66881c82b1a33e8f66c47fe80",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "5e517e56c847a7d7b8192ef702493d9a",
".git/objects/68/e665bbce0a8643e0d262014f7de9136752aa97": "11be9a3c278f9ad806c66f4d97fa36c8",
".git/objects/72/bd7a4f47077f9ffc31f1bcd788d60760efc127": "9aac6d22040a9b88615c11c3ff947018",
".git/objects/75/c729e4102abe4e6467e25ee34808be4fefbaa8": "7b79dc099049848ee57df011aa66372b",
".git/objects/78/47f2f7da3b51a45672126659b95a0e046d2471": "5c22e521de0ec378b127a647e3864c91",
".git/objects/78/9b8bfb75a29d54e5702cdcc822651eb799bee9": "0fd779d1e4f88df63804466a910d8193",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7e/4aeae76334c5d402cbd461c68e49c9fcc2bd1c": "556479b519e1f54a3f2060b3a4dfc0c5",
".git/objects/7e/923511aa39858b149fe7d11a012edfe1aba753": "6083a79bd46801366e3ef1a3f872cef9",
".git/objects/81/ba5936928e6734f76c83017ac1ff8fcd825880": "3f99bbf5296e793a2024d8be0b0524f0",
".git/objects/84/414731625b63fc598b492dfed3e00678806301": "a2332893a91b6d422430743e516581f0",
".git/objects/85/d927f2a6fa0dad16516ef7b7424440dd17c290": "26a6d9c3e4f847b1575677a45581ac63",
".git/objects/87/28f481da9c8619fa960d932e9c2f3762413d22": "ca28b2ff6f4531b4c18a316f9a23b67f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/85cae1e2ad87dceb06e928fed87dfbd4ff49f8": "17e1c49ad6c8944481b8ed3921cdaea5",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/aaec038c69dd15c65f98765e48eeb53e5101d3": "9ac18f838c4153f41dadc4a7ae4729c0",
".git/objects/8d/9ad81bda2adcf2f1a2451b4d95506811ce25df": "ff22fb8f183aff82b806fe413da9d6d3",
".git/objects/8f/372fa753f392e2836eca1f07966a8b1db6c964": "65f6b28ae6dc6962ec89487121035021",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/95/4c0e32f4a0887f1b83f66d69beb79131680543": "a2e31c9b31a15050f973221b5a10f153",
".git/objects/9c/ebf57411728e8eaa2060d8ef65beaae07da3a9": "88ef23d68fbafc284baf9dee9fdd69e9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/930c12ed610a147c4b3bb14499378e0dab06d9": "cf04438d9559499ca4ab379fa1595df3",
".git/objects/a1/a5617329f26e4f2e459438456f25b35dedd041": "d577efc8dcd23b3fe00f67670905146f",
".git/objects/a6/83d3dfbcb78e6c92d06c64dad8374dfcca1b22": "3bb29a366c91e650bc1d32a52e870c5d",
".git/objects/a7/93570c7a3eadcdb2820a69dde64e322be0584a": "4e0b1f2b20c38f335bcdc9105ebc1f4d",
".git/objects/a8/b5342d3d372023d9265c1e30e0fb523cc5a67d": "3dd6c615c90959945d0f62352bad3fba",
".git/objects/b0/fa2a94f384f86b9821cb0d9de78189916ca53b": "7ae9357a23fdcfac21d27bc65ec56e3a",
".git/objects/b2/eec22b8baedc0d5c7832214483e9a1aa10bf42": "39c5a1988e63fa04c7ddc326ab613e13",
".git/objects/b6/b23d4eb919b90494b8165b7e7bb3a2e790fe74": "b4d33a6131de889cc9aeae870646e8a2",
".git/objects/b6/e790c86b1160882a4de3e6d37a07591906ebc5": "74b64941a4b7fd2917af215a3a1e75f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/d1d5f39638de6d84d43d268191e35c4c82ca0a": "5ad4c47342918c36d15d474548c4277d",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/c0/266f99797c99add19f2680f63cbe848a75755f": "fce56a58101047d0de5e727567f524cc",
".git/objects/c0/61e747e7723d07631cb2c22c8ed3c0dc9fff78": "eb640b52edc321c1031bef4f066372d0",
".git/objects/c4/5dfd1e1b1bcb19ce85ac1862b716f61d56d4d0": "7773e63343ede13d6db2a7f4f9fc97f3",
".git/objects/c7/97423d76640ae5ec7121c6cec3860f658f0c58": "5ba2f3ec0196197eb09436976c546719",
".git/objects/cf/17785b99a1005b1612457a4fa5c730aa813016": "b2eb5ebb2bcea450aa8fd2b10208c2f6",
".git/objects/d2/cf2d7d9b2139cce39f56a8d8612ce313924911": "6315b6b887d3ccb4a355c7e922efe43f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/785ae3f40cebbed6ca83b36c4a538a2362e4bb": "3b4ce8b54e41ec1e7f963bd52454dbab",
".git/objects/de/46f99ade02ac5bc2f31d325606ee393f7c69cb": "10dc3515a7118b90f1c48ade7a84143a",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/75f4cbf11c80f4e7f4b9ed9b9d94b66fe8b377": "9e83da9eed6935cc13a3cc5d3da03952",
".git/objects/e9/2aa835e59016f2dda51a3f458c424be305c669": "13390d9d10ee8a7badf4ad49ac298ca2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/fe6fdcf6d37cf975256288e6d9623dd131470a": "51dd89b4401e232bb90db3b94a957989",
".git/objects/f0/a8853245eea6c1b585267ca88ac0d87d3739ed": "070264befdf76b27bc740bb0b9dec0ef",
".git/objects/f2/989617ced1c1937274b6ceed48c3fae2fd915f": "ba226418bbb0adb1d5e47f443dfcdddf",
".git/objects/f6/943cf2e8eb6f1b7305bed03c8afb5033c20d8a": "85b15bdf038f178ff436931bfd0a4d50",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/refs/heads/main": "8f085ecdbb7b7e178364a2f951fd5fec",
".git/refs/remotes/origin/main": "8f085ecdbb7b7e178364a2f951fd5fec",
"assets/AssetManifest.json": "76c08ac5f7fde518c90590f02e967706",
"assets/assets/fonts/EnimalsIcons.ttf": "62b188ae5f92bf567956165f60e6d274",
"assets/FontManifest.json": "ae48973a6b6b2b330954628e0f6de163",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/markers/beer.png": "78a909057a95ec1b000bc678e695805a",
"assets/images/markers/goods.png": "3f1f6b19a6c7ab6c6586b94904da932a",
"assets/images/markers/pizza.png": "28e17ff29fa9129aca8ab8da67b9690e",
"assets/images/markers/products.png": "6cbe7422240638d4dc3a913fac5f99d5",
"assets/images/markers/sushi.png": "738d4bfbda07c6f1a9db1106dd311653",
"assets/images/menu/beauty.png": "54bd3244f20f0032d3644754d1cac4ea",
"assets/images/menu/beer.png": "3d39c183d95ae42bcf8132e40ffe2195",
"assets/images/menu/pizza.png": "aef1f175e4ad8509e02a3900cb00a6ee",
"assets/images/menu/products.jpg": "6848cb26f9df20ad8dd1e1c516cef4de",
"assets/images/menu/products.png": "147d594276909da4b55f4c4d3c6841cd",
"assets/images/menu/roll.png": "8fddddb614b07307120e5cf13cbbf895",
"assets/images/menu/setting.jpg": "7461a9cfc196b6df6296e31a56e774c1",
"assets/images/menu/setting.png": "46be8582fcc73ea1acd2917242f6e141",
"assets/images/menu/taxi.jpg": "f99f1e1a43760e9ebe356013444197ec",
"assets/images/menu/tovari.png": "1921f1c99b1bdecb449c2e975e2782f2",
"assets/images/menu/travel.png": "66e31dd9a596293287316e590701a6e1",
"assets/images/menu/travels.jpeg": "5150d322ad32e5c6976656e1db01bd0e",
"assets/images/net_error.png": "3348b1e088feac278af8d3f43e4a260e",
"assets/images/nofoto.png": "2ae8ee76df5bf5878c8df5974e45c262",
"assets/images/tara/botle.jpg": "27ff0629f24db59e2b10f5b6e3ce48dd",
"assets/images/tomskbeer.jpg": "827a5f9a1881347c3c18ca10a825e174",
"assets/images/tomskbeer.png": "14f131ef2d0309c57cacc25532f98192",
"assets/NOTICES": "1d663b888ed340da6329fa7b9baf6e3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/flutter_osm_web/src/asset/map.html": "7d086430a306855e23beaed2d4e9880f",
"assets/packages/flutter_osm_web/src/asset/map.js": "83129f802f0e2a4b867e1e76170697ca",
"assets/packages/flutter_osm_web/src/asset/map_init.js": "2015aa560219ada6e8bbb721afc62159",
"assets/packages/flutter_osm_web/src/asset/map_leaflet.js": "a331079409eb3b5d7bf0d49e9b3368cc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"auth.html": "c291f6ab2b8b569c8f3837c878b9f559",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "cf6e33f56715da9fb96d8d0f1a6d5e42",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "845bc4defe21eb4d94b33a440d7c911d",
"/": "845bc4defe21eb4d94b33a440d7c911d",
"main.dart.js": "7118d311d84d0a4031ad6c357a70168f",
"manifest.json": "eb9d148ba4015eea0deb5ccb2b1f0494",
"version.json": "b1faffdf7f5f80f8c66c26a47c4fdc61"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
