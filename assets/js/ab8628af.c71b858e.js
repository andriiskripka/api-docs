"use strict";(self.webpackChunkwhitebit_docs=self.webpackChunkwhitebit_docs||[]).push([[348],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},d="WebHook HTTP API",l={unversionedId:"WebHook/web-hook",id:"WebHook/web-hook",title:"WebHook HTTP API",description:"* How to use",source:"@site/docs/WebHook/web-hook.md",sourceDirName:"WebHook",slug:"/WebHook/web-hook",permalink:"/api-docs/docs/WebHook/web-hook",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Web Hook",permalink:"/api-docs/docs/category/web-hook"}},u={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Requirements:",id:"requirements",level:2},{value:"For web hook keys generation",id:"for-web-hook-keys-generation",level:3},{value:"For processing web-hook requests",id:"for-processing-web-hook-requests",level:3},{value:"Body data",id:"body-data",level:4},{value:"Request headers",id:"request-headers",level:4},{value:"WebHook Methods",id:"webhook-methods",level:2},{value:"WhiteBIT code apply",id:"whitebit-code-apply",level:3},{value:"WhiteBIT deposit to main balance",id:"whitebit-deposit-to-main-balance",level:3},{value:"WhiteBIT withdraw from main balance",id:"whitebit-withdraw-from-main-balance",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webhook-http-api"},"WebHook HTTP API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-use"},"How to use")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#webhook-methods"},"Webhook methods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#whitebit-withdraw-from-main-balance"},"WhiteBIT withdraw from main balance"))),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to your account on whitebit.com.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the API keys tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the web-hook configuration tab for your API keys.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste correct URI to your web server which will process web-hook calls.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Press Generate a new key button and toggle the activation switcher to "Activated".'),(0,r.kt)("p",{parentName:"li"},"\u26a0 Please pay attention that secret key will be shown only once, so make sure you save it in any secure key store"))),(0,r.kt)("h2",{id:"requirements"},"Requirements:"),(0,r.kt)("h3",{id:"for-web-hook-keys-generation"},"For web hook keys generation"),(0,r.kt)("p",null,"Before starting using webhooks, you'll be asked to verify ownership of the domain, you are set as webhook destination. You can do it in one of three ways"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can add TXT DNS record to your domain with your webhook public key."),(0,r.kt)("li",{parentName:"ol"},"You can add plain text file ",(0,r.kt)("inlineCode",{parentName:"li"},"whiteBIT-verification.txt")," into your root domain folder and provide public web access to this file from your server. In this file should be placed your public webhook key."),(0,r.kt)("li",{parentName:"ol"},"You can implement ",(0,r.kt)("inlineCode",{parentName:"li"},"/whiteBIT-verification")," endpoint. This endpoint should respond with 200 OK and return JSON array which contains your public webhook key. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},'["<your-public-webhook-key>"]'))),(0,r.kt)("p",null,"Passing just one of these checks will be able you to switch webhook on"),(0,r.kt)("h3",{id:"for-processing-web-hook-requests"},"For processing web-hook requests"),(0,r.kt)("p",null,"All web hook requests are performing using POST method and with application/json content type. Consumer server should respond with 200 HTTP status code. If consumer was unable to handle web-hook, the request will be retry every 10 minutes but not more than 5 times."),(0,r.kt)("h4",{id:"body-data"},"Body data"),(0,r.kt)("p",null,"All web-hook requests are performing with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n   "method": "string",\n   "params": {\n\n       "nonce": 0\n   },\n   "id": "uniqueID"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"method")," - string. The name of method which was evaluated. Web hooks API supports such web-hook methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"code.apply"),". Performs when code owned by a customer was applied.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"id")," - string. Uuid to identify every request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"params")," - the request payload. Here you can find useful data about passed actions, which triggered web hook call. Also in this field placed a nonce. ",(0,r.kt)("strong",{parentName:"p"},"'nonce'")," - a number that is always ",(0,r.kt)("strong",{parentName:"p"},"greater")," than the previous request\u2019s nonce number"),(0,r.kt)("h4",{id:"request-headers"},"Request headers"),(0,r.kt)("p",null,"Also, all request contains additional data in headers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"'Content-type': 'application/json'")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"'X-TXC-APIKEY': api_key")," - where api_key is your WhiteBit webhook API key"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"'X-TXC-PAYLOAD': payload'")," - where payload is base64-encoded body data"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"'X-TXC-SIGNATURE': signature")," - where signature is ",(0,r.kt)("inlineCode",{parentName:"li"},"hex(HMAC_SHA512(payload), key=api_secret))"))),(0,r.kt)("p",null,"On consumer side you can process security headers to be sure request was performed by WhiteBIT."),(0,r.kt)("h2",{id:"webhook-methods"},"WebHook Methods"),(0,r.kt)("h3",{id:"whitebit-code-apply"},"WhiteBIT code apply"),(0,r.kt)("p",null,"Performed when code was applied. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n   "method": "code.apply",\n   "params": {\n       "code": "<SOME_WHITE_BIT_CODE>",\n       "nonce": 1\n   },\n   "id": "45a1d85d-2fdf-483e-8dfa-6d253148c730"\n}\n')),(0,r.kt)("h3",{id:"whitebit-deposit-to-main-balance"},"WhiteBIT deposit to main balance"),(0,r.kt)("p",null,"Performed when deposit was accepted. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  method: "deposit.accepted",\n  params: {\n    "address": "wallet address",                  // deposit address\n    "amount": "0.000600000000000000",             // amount of deposit\n    "createdAt": 1593437922,                      // timestamp of deposit\n    "currency": "Bitcoin",                        // deposit currency\n    "description": "",                            // deposit description\n    "fee": "0.000000000000000000",                // deposit fee\n    "memo": "",                                   // deposit memo\n    "method": 1,                                  // called method 1 - deposit, 2 - withdraw\n    "network": "TRC20",                           // if currency is multi network\n    "status": 15,                                 // transactions status\n    "ticker": "BTC",                              // deposit currency ticker\n    "transactionHash": "transaction hash",        // deposit transaction hash\n    "uniqueId": null,                             // unique Id of deposit\n    "confirmations": {                            // if transaction has confirmations info it will display here\n        "actual": 1,                              // current block confirmations\n        "required": 2                             // required block confirmation for successful deposit\n    }\n  },\n  id: \'uuid\'\n}\n')),(0,r.kt)("p",null,"Performed when deposit was update. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  method: "deposit.update",\n  params: {\n    "address": "wallet address",                  // deposit address\n    "amount": "0.000600000000000000",             // amount of deposit\n    "createdAt": 1593437922,                      // timestamp of deposit\n    "currency": "Bitcoin",                        // deposit currency\n    "description": "update",                      // deposit description\n    "fee": "0.000000000000000000",                // deposit fee\n    "memo": "",                                   // deposit memo\n    "network": "TRC20",                           // if currency is multi network\n    "status": 15,                                 // transactions status\n    "ticker": "BTC",                              // deposit currency ticker\n    "transactionHash": "transaction hash",        // deposit transaction hash\n    "uniqueId": null,                             // unique Id of deposit\n    "confirmations": {                            // if transaction has confirmations info it will display here\n        "actual": 1,                              // current block confirmations\n        "required": 2                             // required block confirmation for successful deposit\n    }\n  },\n  id: \'uuid\'\n}\n')),(0,r.kt)("p",null,"Performed when deposit was processed, so it is available on your balance. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  method: "deposit.processed",\n  params: {\n    "address": "wallet address",                  // deposit address\n    "amount": "0.000600000000000000",             // amount of deposit\n    "createdAt": 1593437922,                      // timestamp of deposit\n    "currency": "Bitcoin",                        // deposit currency\n    "description": "",                            // deposit description\n    "fee": "0.000000000000000000",                // deposit fee\n    "memo": "",                                   // deposit memo\n    "method": 1,                                  // called method 1 - deposit, 2 - withdraw\n    "network": "ERC20",                           // if currency is multi network\n    "status": 15,                                 // transactions status\n    "ticker": "BTC",                              // deposit currency ticker\n    "transactionHash": "transaction hash",        // deposit transaction hash\n    "uniqueId": null,                             // unique Id of deposit\n    "confirmations": {                            // if transaction has confirmations info it will display here\n        "actual": 1,                              // current block confirmations\n        "required": 2                             // required block confirmation for successful deposit\n    }\n  },\n  id: \'uuid\'\n}\n')),(0,r.kt)("p",null,"Performed when deposit was canceled. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  method: "deposit.canceled",\n  params: {\n    "address": "wallet address",                  // deposit address\n    "amount": "100.00",                           // amount of deposit\n    "createdAt": 1593437922,                      // timestamp of deposit\n    "currency": "Tether US",                      // deposit currency\n    "description": "",                            // deposit description\n    "fee": "0.000000000000000000",                // deposit fee\n    "memo": "",                                   // deposit memo\n    "method": 1,                                  // called method 1 - deposit, 2 - withdraw\n    "network": "TRC20",                           // if currency is multi network, "null" if no multi network\n    "status": 15,                                 // transactions status\n    "ticker": "USDT",                             // deposit currency ticker\n    "transactionHash": "transaction hash",        // deposit transaction hash\n    "uniqueId": null,                             // unique Id of deposit\n    "confirmations": {                            // if transaction has confirmations info it will display here\n        "actual": 1,                              // current block confirmations\n        "required": 32                             // required block confirmation for successful deposit\n    }\n  },\n  id: \'uuid\'\n}\n')),(0,r.kt)("p",null,"Deposit status codes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pending - 15")),(0,r.kt)("h3",{id:"whitebit-withdraw-from-main-balance"},"WhiteBIT withdraw from main balance"),(0,r.kt)("p",null,"Performed when withdraw was created. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  method: "withdraw.unconfirmed",\n  params: {\n    "address": "wallet address",                  // withdraw address\n    "amount": "100.00",                           // amount of withdraw\n    "createdAt": 1593437922,                      // timestamp of withdraw\n    "currency": "Tether US",                      // withdraw currency\n    "ticker": "USDT",                             // withdraw currency ticker\n    "description": null,                            // withdraw description\n    "fee": "0.000000000000000000",                // withdraw fee\n    "memo": "",                                   // withdraw memo\n    "method": 2,                                  // called method 1 - deposit, 2 - withdraw\n    "network": "TRC20",                           // if currency is multi network, "null" if no multi network\n    "status": 15,                                 // transactions status\n    "transactionHash": "transaction hash",        // withdraw transaction hash\n    "uniqueId": null,                             // unique Id of withdraw\n  },\n  id: \'uuid\'\n}\n')),(0,r.kt)("p",null,"Performed when withdraw is pending. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  method: "withdraw.pending",\n  params: {\n    "address": "wallet address",                  // withdraw address\n    "amount": "100.00",                           // amount of withdraw\n    "createdAt": 1593437922,                      // timestamp of withdraw\n    "currency": "Tether US",                      // withdraw currency\n    "ticker": "USDT",                             // withdraw currency ticker\n    "description": null,                            // withdraw description\n    "fee": "0.000000000000000000",                // withdraw fee\n    "memo": "",                                   // withdraw memo\n    "method": 2,                                  // called method 1 - deposit, 2 - withdraw\n    "network": "TRC20",                           // if currency is multi network, "null" if no multi network\n    "status": 15,                                 // transactions status\n    "transactionHash": "transaction hash",        // withdraw transaction hash\n    "uniqueId": null,                             // unique Id of withdraw\n  },\n  id: \'uuid\'\n}\n')),(0,r.kt)("p",null,"Performed when withdraw was canceled. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  method: "withdraw.canceled",\n  params: {\n    "address": "wallet address",                  // withdraw address\n    "amount": "100.00",                           // amount of withdraw\n    "createdAt": 1593437922,                      // timestamp of withdraw\n    "currency": "Tether US",                      // withdraw currency\n    "ticker": "USDT",                             // withdraw currency ticker\n    "description": null,                            // withdraw description\n    "fee": "0.000000000000000000",                // withdraw fee\n    "memo": "",                                   // withdraw memo\n    "method": 2,                                  // called method 1 - deposit, 2 - withdraw\n    "network": "TRC20",                           // if currency is multi network, "null" if no multi network\n    "status": 15,                                 // transactions status\n    "transactionHash": "transaction hash",        // withdraw transaction hash\n    "uniqueId": null,                             // unique Id of withdraw\n  },\n  id: \'uuid\'\n}\n')),(0,r.kt)("p",null,"Performed when withdraw was completed. Request example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  method: "withdraw.successful",\n  params: {\n    "address": "wallet address",                  // withdraw address\n    "amount": "100.00",                           // amount of withdraw\n    "createdAt": 1593437922,                      // timestamp of withdraw\n    "currency": "Tether US",                      // withdraw currency\n    "ticker": "USDT",                             // withdraw currency ticker\n    "description": null,                            // withdraw description\n    "fee": "0.000000000000000000",                // withdraw fee\n    "memo": "",                                   // withdraw memo\n    "method": 2,                                  // called method 1 - deposit, 2 - withdraw\n    "network": "TRC20",                           // if currency is multi network, "null" if no multi network\n    "status": 15,                                 // transactions status\n    "transactionHash": "transaction hash",        // withdraw transaction hash\n    "uniqueId": null,                             // unique Id of withdraw\n  },\n  id: \'uuid\'\n}\n')))}m.isMDXComponent=!0}}]);