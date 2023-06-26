'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f84a3a2ebbb3c259bb827e88c7404e64",
"index.html": "4352400ad5ebb55c845f464cb36d082d",
"/": "4352400ad5ebb55c845f464cb36d082d",
"main.dart.js": "fe314a09b71610a1b96b654a347c7377",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "59f23b8af4352f30c84d9945690501b3",
"icons/Icon-192.png": "dcae0f91e53a7b6bfd61751f529ebf2a",
"icons/Icon-maskable-192.png": "dcae0f91e53a7b6bfd61751f529ebf2a",
"icons/Icon-maskable-512.png": "aa75348d264d824d5361d493c124a630",
"icons/Icon-512.png": "aa75348d264d824d5361d493c124a630",
"manifest.json": "cfc531c7cf2bdaef9a1610a5172c8a36",
".git/config": "b2056e703623302fa966e3f5b8ccb8ec",
".git/objects/95/0b21b91af042b43e56ebcce21fe9c4f6e5576d": "aef463340f110b8cbfe8d96a9fb0c83a",
".git/objects/59/72be890b32661078a0e4597591b6f6e61154f4": "904379cacfbd035aa3e6ead5befcfb20",
".git/objects/92/f3db88607115fa754d5ba193b12fc7a3a230b6": "59ff355875954629d901370c76e0b0ad",
".git/objects/92/abd7dcc6005200d827c10a140ee242dd18e238": "8354b6c17de944e01ce12ecc66b5385a",
".git/objects/0c/cd56f2521630f4c811f28a9c478fd8d1e044f9": "d8f6899b1cee6b6b37036b964da9187e",
".git/objects/66/28d47fb890ab0d954dad498114f7a651333da6": "e43c35620b7958d61e3f796d730eccd9",
".git/objects/9b/b37e9b21da823f21b650085749fc830f62a883": "2a88e1770124a9546863acf6a8202ac1",
".git/objects/3d/bfaad592f03662269d67ff6cdfb0cc4e2ce399": "3d70cdb862ac1f258fd56534ee61af5b",
".git/objects/9c/0a04084161ccf4cbd958a99ec069cb2114a7b4": "e35f21cbbcd72864c11341c9e71da329",
".git/objects/9c/18e54f564b6a1bb24dbbf3768b49e5613de20e": "2ac5864e43ba743ca08b0cf2f966b964",
".git/objects/d9/bde97efc592a293cc23e2d92248e5217053217": "6e25e448dfa751105b54a2c4dca35dec",
".git/objects/bb/8c40dd8b3b8e2757450c347701a8ab747a9370": "fb1ed1fefa1ca527485ae490c3aafc33",
".git/objects/d0/bf6a10b02398eec97aa5e5e910451c7e5b9acb": "e1b7f17f471c0cc81558b7766d0ffe2c",
".git/objects/da/2793b5938ad6170ca8264917f9c8c83fadf506": "d0fa1a033f40a7e097f0e0a4aa8e46fb",
".git/objects/ae/c1cde9b06489b9dec92aabe7ea916008428555": "f8142cc8782460b147fcb5b11491ee00",
".git/objects/d8/3a08738e31b6378dc147b1c16a6ecb2e1c99bb": "d246b2857312bafe831fb2d8f25e5058",
".git/objects/e5/584ed3b7e445da986a047a86127ff51685ab20": "6244a080549a17d339616e5c8e64bb54",
".git/objects/e2/293d56f9133f48dbf7032979a1b69704a4b318": "e9731c2c65bcc8af12a8681107c818b2",
".git/objects/c7/df90225a35a9101e7e9ec13a5bedbe2a371070": "97dc1161ade11b33f16f9c791711a79a",
".git/objects/c9/fafdcb3a19f07544f8d372b76fb002363a7576": "a9cfc645cd5946c39c6eb505bc1b998f",
".git/objects/c9/eb31e21926d304f5d1b66b3e17bffa761a4ea7": "99a3974061e76063e6b6d600e6e4fc29",
".git/objects/f5/47aa3938beef5984289e0123741e862200236b": "0a5ed39f5fe37bff3804dbd8d80f9e43",
".git/objects/f5/e610b9e943400e92c7e0b17bb0fed8df31b488": "34fd9855438c477b3e059bdf774b924e",
".git/objects/f5/a03ba3331592e4af76ee82a2cf52aa290ea508": "a737cf28d4648f4d614cb2b897d131e8",
".git/objects/c8/e453e148fbfdeed832ce54c87f5d8e242f1ae7": "d97f46d934cc73a4f1ab4903450bca2e",
".git/objects/c6/d06ff6d81182e3522f341d357a172a50132b67": "91e8293a00fa5aec12a11484c7eb4fa8",
".git/objects/4e/470add8a76685d9bc9d703b045093cd6237216": "abee0c40cd6c3138e6c5964a94bc7389",
".git/objects/18/5c39aaa4dd40f6f80e32b409fe16a16529685f": "15a198f524fab6e9db64908630eb157c",
".git/objects/27/93b98fa15e3f5f6136a20806f009f470a75e57": "65e1549a4bd6b29fb9babee57f34ee0c",
".git/objects/4b/7bf4ce7ac8c8901e036bf75659f7c502639902": "791d2e6fd503315491dfe6c259811a17",
".git/objects/pack/pack-44967914300156c42fcc25b5e9e23a7a19de07ac.pack": "b33ba9a5aa9d044361965d327b43e67c",
".git/objects/pack/pack-44967914300156c42fcc25b5e9e23a7a19de07ac.idx": "26d7487081196db42c12459fdaaacc8a",
".git/objects/16/27ae7c9ad912b98ea74c930f38b4861758508b": "ce6b21dde597317de7144c36c5e60d5f",
".git/objects/16/022344953cb3230291982d398cda1ee819a54d": "ca2e1c6a0f135a9a058a6f7c9ad69840",
".git/objects/45/320a8eb37944b1d7c0a4fc58705fa3acb01653": "ed10be71b4b06d403dac902c60d88a45",
".git/objects/1f/05f51f9ab25f50cd987ceaf55f10358df88cdf": "4e309b98ba8cdf313378e3ee20e29ac1",
".git/objects/80/2746928be417061efd35d56cd37dfe39d69650": "14515e7137dbfa0cc78814796f203c0d",
".git/objects/7e/cd6ac88afbeca506dc2039c6774d1a867ea3dd": "7c3141a3024c97ea00d5d8f123226bf7",
".git/objects/21/83bf8fd9ea62fccf66745a32a03b066642ee41": "989fcb8e5116bef23fb83bdee1f40069",
".git/objects/86/dcd585e389db16565acf704b54159eb1e71c90": "80f9a5b1475e96dcda558f4eb3280e25",
".git/objects/72/b05b1102737212e24bd804808ad6357faeb065": "530d3b61f21ab4b32b7b0dc2dd69a32e",
".git/objects/88/f75d29ba95b44f7cd238c2830083be0b7a5bb4": "2860b57fb8114011e581702830269a6c",
".git/objects/88/054b18531a221b2437bdb28234dda44b3a48ff": "00c143b3bbd0225ee55e855bd9ec00f8",
".git/objects/07/0ead89bebbcc4f97f4604b7e5868fd3e1aab4d": "3113d926c52bb0742da422a646d6f074",
".git/objects/07/3721134becb911e6a14b84e352ab4eee5b96b1": "f32478af150f03451778697290b6c73c",
".git/objects/38/394d3e4dfb8198760c534ced1cc7c6039b8afd": "cd135a92de2dc414db87e66ef906fa48",
".git/objects/00/cc4e57dd607e5ca50b897a130ad5ed7f89efb6": "b906bc4d1cd24cfb86aab6b4e7452cf6",
".git/objects/6e/8891f44fbc261637c281af4a8a93d0dc4d6240": "f8e4a81e881038f5becb99a784a736e7",
".git/objects/62/13ad9e550155162e4a685fec6694e1a5245506": "ac417957d3c4213ff4d00e26e4919913",
".git/objects/96/2f4e3b39ea327c336badf2d133598cbf4687d1": "ce1ec3bf77065fca09ca55c3cbdbbf33",
".git/objects/96/5453cc30bfdabc7ea02165f51eecf25024bbb4": "3d1664259756a0f6aff0045b36ab7cec",
".git/objects/3a/f94012b18d4b3b3c7d3e8310343850fc15d95f": "a848cc94aed3c1eaf388ab5d1cfd5318",
".git/objects/54/4620b378db079e41cd3653a4166ec3724a6694": "aa16a927757985bd7860b0bf9b868a48",
".git/objects/98/6e435ba60cd8f6d511e5a0c790dfafaf91786a": "f20ee959728018aa18451816263eb34f",
".git/objects/53/aa767511f9ad87932c15c549db835a4b1ad053": "f6cf9b83b4b5ea4f416ba1680e1ad99d",
".git/objects/3f/a9e99d79135c5793105a4964cfed33232f2f8e": "f7ea91409f72b5fe32d41a2dc4dd07bf",
".git/objects/01/a5fecf0d658ddb884ab3f12579bdb8622a5b64": "5ae85448c9fd4893a6d760eb7de0ade0",
".git/objects/0f/52f87ffc5b045e82cd2de48499589cc16f5464": "25e0b9c356155feccd4920387c9c5950",
".git/objects/0f/2323929f2d06f84a3a2f7043659eb88f6884b7": "62e7d956903dd5cc82b556488da6962d",
".git/objects/b6/75f3cfe29730b097ff06a746b98a60f8b197d6": "9ef106911231d5139e3054cd7e07e861",
".git/objects/a9/159073701b20870b53b299b3e647e5ee6ba0c7": "bf2d599f4c30c8b7693b2dd312301b03",
".git/objects/d5/3583dcb8e9f010ffab98cd819402b6a94fd62d": "ec4559c58d3669213f43eeb52260a384",
".git/objects/d5/824065990c726590bc271b4ad1eed58be8d385": "cf8b36071544fa0807ccfb67123200cd",
".git/objects/d2/662ee798bb70a868060e643f6a8abbc1ce0a26": "bbd09f51ca73030c5f9dfea6df244447",
".git/objects/af/c5ef24777537fbf4e343f9c0cb38e7a130cdbc": "52ece9e241a3c342f8b235f866e9fc2b",
".git/objects/db/6edfcf0a03069c99cdcf87bb288f0f95114459": "cbba724cf4906fa7a59f9120a0db7666",
".git/objects/db/480e0d370ed8349ad62710fc2a6337f2af3012": "913f758be101856b6182564158a4df1f",
".git/objects/de/4e8abfeb0f63d8c50cf411ce51a119a33733c3": "68c98087f195273af56e23ad059d5e31",
".git/objects/ea/8b0736c7e88ad6ecd9d30ed0273ccf4909ca28": "09fbdca4dc8fb1da8473a496df8310ca",
".git/objects/e8/5f988760203e46557d38aa07b81ef1ef8771f0": "b2219f17003bc83e1984233f62dcc282",
".git/objects/fa/6a6e8ae74f7cd9636ad2eda1b46b8731429f08": "251c5143796e33f1c9c951529b6276bc",
".git/objects/fa/12e73e4605996acd814c992f6409fa2d49d393": "4513d65ae60dcfe9efe36a29ddfe596d",
".git/objects/c2/bb215f202697f45d0d915ac883e8da7e9f15f3": "0c471750dd22d3147a688ad6f5ba8e15",
".git/objects/e9/10120fa06f6ebea6d63a6b1efd690e2cb1eb26": "81991a3531108fe2ce9637fe5f3385ab",
".git/objects/ce/fafc7d01b492ba978458cc82f0a49ebf46ff89": "b85ad8b92f08892ce9251acf783fe584",
".git/objects/41/bfed32366827d3e6d5e4341422f26e0b20ec96": "ab9b77cc541ad2c51b59c440b15b45a4",
".git/objects/41/35e29094358c9acb5b63ce15a700297e30ac43": "f39f29761f4fc720d5aba20dcfee2aaf",
".git/objects/23/11a8804e7de8a363b1f1d407237f33ac1fe9df": "88ce607a4932b7fdb3d16e15e54a6be5",
".git/objects/8d/8da0f786448ada8ae8624d2df41febca9c6322": "1da5466baeef063f4bc8077926649f18",
".git/objects/12/08ad6d1fb0616ce57749357c35ae4123180c68": "d8c9cd3096069e5ad5fcd96854ab1f35",
".git/objects/1d/ecfbdf169660c4a2fad0036984b5ca3b662482": "6ef03e2c9b8d0c780e3cb0845ca912f9",
".git/objects/82/3bef8e00403b6cecfeb3f730b7acac572028c1": "09d7247da5cf1993919293da8a713579",
".git/objects/40/c7ebb09c920709f08755d9d2dd95b3b27eef7b": "cf2bd82dc21e2b676cbe93388fd00ab0",
".git/objects/47/bef02240c73930050fc1aba0dcc16e41342889": "fb6411b7da6953eb0b407902e9ff0f27",
".git/objects/8b/d1348fd9f003668185e6ecc1305ddd61b8f6db": "065f480fbdd0385dfc6bd64c7ce4b6eb",
".git/objects/7a/97c773b90ca3d2c60aa96f2541bb983f2c6bd9": "e0b05a78f2d007df2fd41377bf84de72",
".git/objects/25/c8b160b4f3d5f34cec6e2e62f5658251ac7d8e": "c2236be8608c07d8f880e9ff545c33e1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/main": "09604048bf83b57802ded1dcbb4e5559",
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
".git/refs/remotes/origin/main": "a7713aa3351940eadff3dd94d09bf8e4",
".git/FETCH_HEAD": "1cdfa07b12b46ff60b8bebe37117e30a",
"assets/AssetManifest.json": "91e5213373d6836b411163c42d6f9e34",
"assets/NOTICES": "a2a98682546f894aa047a5425d3fc804",
"assets/FontManifest.json": "9e1868353b98ab4022f7fb1ad4c3a063",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "36b43bbb2f6884a51dd323062afa24f1",
"assets/fonts/MaterialIcons-Regular.otf": "0c800ad1e9ddd8021b9845c0f8a24d27",
"assets/assets/images/fooyee.png": "f8810f65c8f0023045fdcd436e8937ef",
"assets/assets/images/hpalmobil.png": "0a0c0b4ca8cfe311a6fd3f61db798abf",
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
"assets/assets/prj/hpal3.png": "32902437d17d7b8b851913a9305320b7",
"assets/assets/prj/stk9.png": "a555de9bf2b6835bae192ec33d1f980e",
"assets/assets/prj/health1.png": "457c4aee14ba214a3d16a4cc19ffdc44",
"assets/assets/prj/ky1.png": "20bdbb5151f631227849cd0181af031b",
"assets/assets/prj/stk8.png": "6e9852aea051806519fa788043a4495e",
"assets/assets/prj/hpal2.png": "dd19249c419d3dee44ae73d69262b992",
"assets/assets/prj/ky3.png": "d92f95ce7549677f521c79e3d44a8d26",
"assets/assets/prj/health2.png": "f2cdf6a7fd685121362ed01a36d3e319",
"assets/assets/prj/health3.png": "a30f1096103bb0d4af35dfc75512d951",
"assets/assets/prj/ky2.png": "f831b3852ccac0b46d8a50b9f8bf04a5",
"assets/assets/prj/mz8.png": "b5d487bb0178e2640cd502513ed5a0f7",
"assets/assets/prj/hpal1.png": "2273156cb2268f90c979be4eb6fd8d4b",
"assets/assets/prj/hpal5.png": "59b4710921434f6a26997bf89f87f4d1",
"assets/assets/prj/health7.png": "d747112eaf97de733932e9f206e5de27",
"assets/assets/prj/health6.png": "0191f77a2f5346be4b6d9a905f4be973",
"assets/assets/prj/hpal4.png": "e1e16720ac6eabb880f90889c390f292",
"assets/assets/prj/hpal6.png": "a4e8dd822746abbd3607377c56044407",
"assets/assets/prj/health4.png": "812f3c442c0c06bba17ec036a338d2a8",
"assets/assets/prj/health5.png": "97e4bec133e81236864dc4abb8a75f55",
"assets/assets/prj/hpal7.png": "521c9ba1d5d2026b6d49f73648da449b",
"assets/assets/prj/mz3.png": "c782d39e1a6d240365e6f2370de3e3ed",
"assets/assets/prj/foo1.png": "a722aa3d2ef11c24e8187638ab060519",
"assets/assets/prj/health8.png": "e631ebb477745a4c4ac5e05743a59b07",
"assets/assets/prj/health9.png": "697d12964c912f2f02b471aa86847127",
"assets/assets/prj/mz2.png": "82b8b317cdb952790769600e6ad4b09c",
"assets/assets/prj/stk1.png": "ab2996a678e517cb99c3f66dc75b8925",
"assets/assets/prj/hpal9.png": "40d0be76ee29840e95eb43130bc2eb5c",
"assets/assets/prj/stk3.png": "63390319e46cadbfb122fc6aa0a505d1",
"assets/assets/prj/foo2.png": "85da833d68216b2746befd4efb5b5c9a",
"assets/assets/prj/foo15.png": "c04336c5dfdca7b30479f3f96ecb5409",
"assets/assets/prj/foo14.png": "689592890bd507aba78538b904cd67f7",
"assets/assets/prj/foo3.png": "6511908a81c8b763ee886b99c748a94c",
"assets/assets/prj/mz1.png": "ba6bb1412cfb1de0bcb9e791b3bd9549",
"assets/assets/prj/stk2.png": "b258d27363db234d9bc000be6db278db",
"assets/assets/prj/hpal8.png": "268cd09f2427292ec7e397f702a96de9",
"assets/assets/prj/stk6.png": "10bef5d6a182bb8117b39244fe3461c0",
"assets/assets/prj/hpal10.png": "96661c8d050b741a2487cad0b7fb657e",
"assets/assets/prj/mz5.png": "da5bbbb71d0c797eab3ef57c810c9fe3",
"assets/assets/prj/foo11.png": "8cf97e823e03bc72aeb15f6a214b20a9",
"assets/assets/prj/mz4.png": "ba93f61afdeaa7473b394f9fa006cb0a",
"assets/assets/prj/foo6.png": "9bf07f6da6eec12d3ed5a6dc7d30aa69",
"assets/assets/prj/stk7.png": "18aa080c406690033a977f589106ed49",
"assets/assets/prj/stk5.png": "12785dec850e27fb59231d809cbcdb5d",
"assets/assets/prj/foo4.png": "224c65defbbabce2053bfabf38900c06",
"assets/assets/prj/mz6.png": "c4e9251f8e5f64fcf2b683939e220489",
"assets/assets/prj/foo13.png": "4c3fb34147bd0c0a4c3ffe5959b31373",
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
