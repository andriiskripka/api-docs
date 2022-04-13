"use strict";(self.webpackChunkwhitebit_docs=self.webpackChunkwhitebit_docs||[]).push([[142],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,c=k["".concat(o,".").concat(d)]||k[d]||u[d]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o="Public HTTP API V1",s={unversionedId:"Public/http-v1",id:"Public/http-v1",title:"Public HTTP API V1",description:"Public endpoints V1",source:"@site/docs/Public/http-v1.md",sourceDirName:"Public",slug:"/Public/http-v1",permalink:"/api-docs/docs/Public/http-v1",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Public",permalink:"/api-docs/docs/category/public"},next:{title:"Public HTTP API V2",permalink:"/api-docs/docs/Public/http-v2"}},m={},u=[{value:"Public endpoints V1",id:"public-endpoints-v1",level:2},{value:"Error messages V1 format:",id:"error-messages-v1-format",level:4},{value:"Terminology",id:"terminology",level:3},{value:"Pair:",id:"pair",level:4},{value:"Market Info",id:"market-info",level:3},{value:"Market Activity",id:"market-activity",level:3},{value:"Single market activity",id:"single-market-activity",level:3},{value:"Kline",id:"kline",level:3},{value:"Symbols",id:"symbols",level:3},{value:"Order depth",id:"order-depth",level:3},{value:"Trade History",id:"trade-history",level:3}],k={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"public-http-api-v1"},"Public HTTP API V1"),(0,l.kt)("h2",{id:"public-endpoints-v1"},"Public endpoints V1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#market-info"},"Market info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#market-activity"},"Market activity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#single-market-activity"},"Single market activity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kline"},"Kline")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#symbols"},"Symbols")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#order-depth"},"Order depth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trade-history"},"Trade history"))),(0,l.kt)("p",null,"Base URL is ",(0,l.kt)("a",{parentName:"p",href:"https://whitebit.com"},"https://whitebit.com")),(0,l.kt)("p",null,"Endpoint example: ",(0,l.kt)("a",{parentName:"p",href:"https://whitebit.com/api/v1/public/%7Bendpoint%7D"},"https://whitebit.com/api/v1/public/{endpoint}")),(0,l.kt)("p",null,"All endpoints return time in Unix-time format."),(0,l.kt)("p",null,"All endpoints return either a ",(0,l.kt)("strong",{parentName:"p"},"JSON")," object or array."),(0,l.kt)("p",null,"For receiving responses from API calls please use http method ",(0,l.kt)("strong",{parentName:"p"},"GET")),(0,l.kt)("p",null,"If an endpoint requires parameters you should send them as ",(0,l.kt)("inlineCode",{parentName:"p"},"query string")),(0,l.kt)("h4",{id:"error-messages-v1-format"},"Error messages V1 format:"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "success": false,\n    "message": "ERROR MESSAGE",\n    "params": []\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"terminology"},"Terminology"),(0,l.kt)("h4",{id:"pair"},"Pair:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Stock")," - currency that you want to buy or sell"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Money")," - currency that you are using to buy or sell something"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Maker")," - person who puts an order and waiting till this order will be finished"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Taker")," - person who finishes existing order"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Precision")," - is the number of digits to the right of the decimal point"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Bid")," - buy order"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Ask")," - sell order"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"market-info"},"Market Info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[GET] /api/v1/public/markets\n")),(0,l.kt)("p",null,"This endpoint retrieves all information about available markets."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,l.kt)("em",{parentName:"p"},"1 second")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": [\n    {\n      "name": "BTC_USDT",      // Name of market pair\n      "stock": "BTC",          // Ticker of stock currency\n      "money": "USDT",         // Ticker of money currency\n      "stockPrec": "6",        // Precision of stock currency\n      "moneyPrec": "2",        // Precision of money currency\n      "feePrec": "4",          // Precision of fee\n      "makerFee": "0.001",     // Default maker fee ratio\n      "takerFee": "0.001",     // Default taker fee ratio\n      "minAmount": "0.0001"    // Minimal amount of stock to trade\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"market-activity"},"Market Activity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[GET] /api/v1/public/tickers\n")),(0,l.kt)("p",null,"This endpoint retrieves information about recent trading activity on all markets."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,l.kt)("em",{parentName:"p"},"1 second")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": {\n    "BTC_USDT": {                         // Name of market pair\n      "ticker": {\n        "bid": "9412.1",                  // Highest bid\n        "ask": "9416.33",                 // Lowest ask\n        "low": "9203.13",                 // Lowest price for 24h\n        "high": "9469.99",                // Highest price for 24h\n        "last": "9414.4",                 // Last deal price\n        "vol": "27324.819448",            // Volume in stock currency\n        "deal": "254587570.43407191",     // Volume in money currency\n        "change": "1.53"                  // Change in percent between open and last prices\n      },\n      "at": 159423219                     // Timestamp in seconds\n    },\n    "ETH_BTC": {\n      ...\n    }\n  }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"single-market-activity"},"Single market activity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[GET] /api/v1/public/ticker?market=ETH_BTC\n")),(0,l.kt)("p",null,"This endpoint retrieves information about recent trading activity on the requested market."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,l.kt)("em",{parentName:"p"},"1 second")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"market"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"Available market. Example: BTC_USDT")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": {\n    "open": "9267.98",               // Open price for day\n    "bid": "9417.4",                 // The highest bid currently available\n    "ask": "9421.64",                // The lowest ask currently available\n    "low": "9203.13",                // Lowest price for day\n    "high": "9469.99",               // Highest price for day\n    "last": "9419.55",               // Latest deal price\n    "volume": "27303.824558",        // Volume in stock\n    "deal": "254399191.68843464",    // Volume in money\n    "change": "1.63"                 // Change between open and close price in percentage\n  }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"kline"},"Kline"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[GET] /api/v1/public/kline?market=BTC_USDT&interval=1h\n")),(0,l.kt)("p",null,"This endpoint retrieves information about market kline."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,l.kt)("em",{parentName:"p"},"1 second")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Max numbers of candles cannot exceed:"),"\n",(0,l.kt)("em",{parentName:"p"},"1440")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"market"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"Available market. Example: BTC_USDT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"No")),(0,l.kt)("td",{parentName:"tr",align:null},"Start time in seconds, default value is current start day. Cannot be greater or equal to End Time. Example: 1596848400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"No")),(0,l.kt)("td",{parentName:"tr",align:null},"End time in seconds, default value is current time. Cannot be smaller or equal to Start Time. Example: 1596927600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"NO")),(0,l.kt)("td",{parentName:"tr",align:null},"Possible values - 1m, 3m, 5m, 15m, 30m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 3d, 1w, 1M. Default value is 1h")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"NO")),(0,l.kt)("td",{parentName:"tr",align:null},"Possible values from 1 to 1440. Default value is 1440")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": [\n    [\n        1631440800,            // Time in seconds\n        "45865.62",            // Open\n        "45958.14",            // Close\n        "45981.3",             // High\n        "45750.23",            // Low\n        "15.327634",           // Volume stock\n        "703140.24230131"      // Volume money\n    ],\n    [...]\n  ]\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"symbols"},"Symbols"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[GET] /api/v1/public/symbols\n")),(0,l.kt)("p",null,"This endpoint retrieves information about all available markets for trading."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,l.kt)("em",{parentName:"p"},"1 second")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": [\n    "BTC_USDT",      // Name of market pair\n    "ETH_BTC",       // Name of market pair\n    "ETH_USDT",      // Name of market pair\n    ...\n  ]\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"order-depth"},"Order depth"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[GET] /api/v1/public/depth/result?market=BTC_USDT\n")),(0,l.kt)("p",null,"This endpoint retrieves the current order book as two arrays (bids / asks)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,l.kt)("em",{parentName:"p"},"1 second")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"market"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"Available market. Example: BTC_USDT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"No")),(0,l.kt)("td",{parentName:"tr",align:null},"Limit of results. Default: 100 Max: 100 Example: 100")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "asks": [\n    [\n      "9431.9",            // Price of lowest ask\n      "0.705088"           // Amount of lowest ask\n    ],\n    [\n      "9433.67",           // Price of next ask\n      "0.324509"           // Amount of next ask\n    ],\n    [...]\n  ],\n  "bids": [\n    [\n      "9427.65",           // Price of highest bid\n      "0.547909"           // Amount of highest bid\n    ],\n    [\n      "9427.3",            // Price of next bid\n      "0.669249"           // Amount of next bid\n    ],\n    [...]\n  ]\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trade-history"},"Trade History"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[GET] /api/v1/public/history?market=BTC_USDT&lastId=1\n")),(0,l.kt)("p",null,"This endpoint retrieves trades that have been executed for the requested market."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response is cached for:"),"\n",(0,l.kt)("em",{parentName:"p"},"1 second")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"market"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"Available market. Example: BTC_USDT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastId"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"Largest id of last returned result. Example: request deals starting from id equals to 6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"No")),(0,l.kt)("td",{parentName:"tr",align:null},"Limit of results. Default: 50 Example: 100")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "success": true,\n  "message": null,\n  "result": [\n    {\n      "id": 156720314,              // Deal id\n      "time": 1594240477.849703,    // Deal time in seconds\n      "price": "9429.66",           // Deal price\n      "amount": "0.002784",         // Deal amount\n      "type": "sell"                // Deal type (buy or sell)\n    },\n    {\n      "id": 156720309,\n      "time": 1594240476.832347,\n      "price": "9429.66",\n      "amount": "0.002455",\n      "type": "sell"\n    },\n    {...}\n  ]\n}\n')),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);