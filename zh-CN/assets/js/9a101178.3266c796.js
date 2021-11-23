"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2505],{3905:(t,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>g});var e=n(67294);function l(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function p(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function i(t,a){if(null==t)return{};var n,e,l=function(t,a){if(null==t)return{};var n,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(l[n]=t[n]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=e.createContext({}),d=function(t){var a=e.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):p(p({},a),t)),n},k=function(t){var a=d(t.components);return e.createElement(m.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},N=e.forwardRef((function(t,a){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),N=d(n),g=l,o=N["".concat(m,".").concat(g)]||N[g]||u[g]||r;return n?e.createElement(o,p(p({ref:a},k),{},{components:n})):e.createElement(o,p({ref:a},k))}));function g(t,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=N;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return e.createElement.apply(null,p)}return e.createElement.apply(null,n)}N.displayName="MDXCreateElement"},42047:(t,a,n)=>{n.r(a),n.d(a,{frontMatter:()=>i,contentTitle:()=>m,metadata:()=>d,toc:()=>k,default:()=>N});var e=n(87462),l=n(63366),r=(n(67294),n(3905)),p=["components"],i={id:"build-ss58-registry",title:"SS58 Registry",sidebar_label:"SS58 Registry",description:"Information about SS58 encoding.",slug:"../build-ss58-registry"},m=void 0,d={unversionedId:"build/build-ss58-registry",id:"build/build-ss58-registry",isDocsHomePage:!1,title:"SS58 Registry",description:"Information about SS58 encoding.",source:"@site/../docs/build/build-ss58-registry.md",sourceDirName:"build",slug:"/build-ss58-registry",permalink:"/zh-CN/docs/build-ss58-registry",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-ss58-registry.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1637533312,formattedLastUpdatedAt:"2021/11/21",frontMatter:{id:"build-ss58-registry",title:"SS58 Registry",sidebar_label:"SS58 Registry",description:"Information about SS58 encoding.",slug:"../build-ss58-registry"},sidebar:"docs",previous:{title:"Substrate Connect",permalink:"/zh-CN/docs/build-substrate"},next:{title:"Integration Initiation",permalink:"/zh-CN/docs/build-integration"}},k=[],u={toc:k};function N(t){var a=t.components,n=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,e.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Substrate-based chains, including the Polkadot and Kusama relay chains, use an\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/advanced/ss58/"},"SS58 encoding")," for\ntheir address formats. This page serves as a registry for teams to see which chain corresponds to a\ngiven prefix, and which prefixes are available."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Symbols"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimals"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Website"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot Relay Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"DOT"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polkadot.network"},"https://polkadot.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Bare 32-bit Schnorr/Ristretto (S/R 25519) public key."),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"kusama"),(0,r.kt)("td",{parentName:"tr",align:null},"Kusama Relay Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"KSM"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kusama.network"},"https://kusama.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Bare 32-bit Ed25519 public key."),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"katalchain"),(0,r.kt)("td",{parentName:"tr",align:null},"Katal Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"plasm"),(0,r.kt)("td",{parentName:"tr",align:null},"Plasm Network"),(0,r.kt)("td",{parentName:"tr",align:null},"PLM"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://plasmnet.io"},"https://plasmnet.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"bifrost"),(0,r.kt)("td",{parentName:"tr",align:null},"Bifrost"),(0,r.kt)("td",{parentName:"tr",align:null},"BNC"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bifrost.finance/"},"https://bifrost.finance/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"edgeware"),(0,r.kt)("td",{parentName:"tr",align:null},"Edgeware"),(0,r.kt)("td",{parentName:"tr",align:null},"EDG"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://edgewa.re"},"https://edgewa.re"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"karura"),(0,r.kt)("td",{parentName:"tr",align:null},"Karura"),(0,r.kt)("td",{parentName:"tr",align:null},"KAR"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://karura.network/"},"https://karura.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"reynolds"),(0,r.kt)("td",{parentName:"tr",align:null},"Laminar Reynolds Canary"),(0,r.kt)("td",{parentName:"tr",align:null},"REY"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://laminar.network/"},"http://laminar.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"acala"),(0,r.kt)("td",{parentName:"tr",align:null},"Acala"),(0,r.kt)("td",{parentName:"tr",align:null},"ACA"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://acala.network/"},"https://acala.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"laminar"),(0,r.kt)("td",{parentName:"tr",align:null},"Laminar"),(0,r.kt)("td",{parentName:"tr",align:null},"LAMI"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://laminar.network/"},"http://laminar.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"polymesh"),(0,r.kt)("td",{parentName:"tr",align:null},"Polymesh"),(0,r.kt)("td",{parentName:"tr",align:null},"POLYX"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polymath.network/"},"https://polymath.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"substratee"),(0,r.kt)("td",{parentName:"tr",align:null},"SubstraTEE"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.substratee.com"},"https://www.substratee.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"totem"),(0,r.kt)("td",{parentName:"tr",align:null},"Totem"),(0,r.kt)("td",{parentName:"tr",align:null},"XTX"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://totemaccounting.com"},"https://totemaccounting.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"synesthesia"),(0,r.kt)("td",{parentName:"tr",align:null},"Synesthesia"),(0,r.kt)("td",{parentName:"tr",align:null},"SYN"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://synesthesia.network/"},"https://synesthesia.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"kulupu"),(0,r.kt)("td",{parentName:"tr",align:null},"Kulupu"),(0,r.kt)("td",{parentName:"tr",align:null},"KLP"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kulupu.network/"},"https://kulupu.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"dark"),(0,r.kt)("td",{parentName:"tr",align:null},"Dark Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"darwinia"),(0,r.kt)("td",{parentName:"tr",align:null},"Darwinia Network"),(0,r.kt)("td",{parentName:"tr",align:null},"RING, KTON"),(0,r.kt)("td",{parentName:"tr",align:null},"9, 9"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://darwinia.network/"},"https://darwinia.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"geek"),(0,r.kt)("td",{parentName:"tr",align:null},"GeekCash"),(0,r.kt)("td",{parentName:"tr",align:null},"GEEK"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://geekcash.org"},"https://geekcash.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"stafi"),(0,r.kt)("td",{parentName:"tr",align:null},"Stafi"),(0,r.kt)("td",{parentName:"tr",align:null},"FIS"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stafi.io"},"https://stafi.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"dock-testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"Dock Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"DCK"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dock.io"},"https://dock.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"dock-mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"Dock Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"DCK"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dock.io"},"https://dock.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"shift"),(0,r.kt)("td",{parentName:"tr",align:null},"ShiftNrg"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"zero"),(0,r.kt)("td",{parentName:"tr",align:null},"ZERO"),(0,r.kt)("td",{parentName:"tr",align:null},"PLAY"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://zero.io"},"https://zero.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"zero-alphaville"),(0,r.kt)("td",{parentName:"tr",align:null},"ZERO Alphaville"),(0,r.kt)("td",{parentName:"tr",align:null},"PLAY"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://zero.io"},"https://zero.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"jupiter"),(0,r.kt)("td",{parentName:"tr",align:null},"Jupiter"),(0,r.kt)("td",{parentName:"tr",align:null},"jDOT"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://jupiter.patract.io"},"https://jupiter.patract.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"subsocial"),(0,r.kt)("td",{parentName:"tr",align:null},"Subsocial"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"cord"),(0,r.kt)("td",{parentName:"tr",align:null},"Dhiway CORD Network"),(0,r.kt)("td",{parentName:"tr",align:null},"DCU"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dhiway.com/"},"https://dhiway.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"phala"),(0,r.kt)("td",{parentName:"tr",align:null},"Phala Network"),(0,r.kt)("td",{parentName:"tr",align:null},"PHA"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://phala.network"},"https://phala.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"litentry"),(0,r.kt)("td",{parentName:"tr",align:null},"Litentry Network"),(0,r.kt)("td",{parentName:"tr",align:null},"LIT"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://litentry.com/"},"https://litentry.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"robonomics"),(0,r.kt)("td",{parentName:"tr",align:null},"Robonomics"),(0,r.kt)("td",{parentName:"tr",align:null},"XRT"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://robonomics.network"},"https://robonomics.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"datahighway"),(0,r.kt)("td",{parentName:"tr",align:null},"DataHighway"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"ares"),(0,r.kt)("td",{parentName:"tr",align:null},"Ares Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"ARES"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.aresprotocol.com/"},"https://www.aresprotocol.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"vln"),(0,r.kt)("td",{parentName:"tr",align:null},"Valiu Liquidity Network"),(0,r.kt)("td",{parentName:"tr",align:null},"USDv"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://valiu.com/"},"https://valiu.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"centrifuge"),(0,r.kt)("td",{parentName:"tr",align:null},"Centrifuge Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"CFG"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://centrifuge.io/"},"https://centrifuge.io/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"nodle"),(0,r.kt)("td",{parentName:"tr",align:null},"Nodle Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"NODL"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nodle.io/"},"https://nodle.io/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"kilt"),(0,r.kt)("td",{parentName:"tr",align:null},"KILT Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"KILT"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://kilt.io/"},"https://kilt.io/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"mathchain"),(0,r.kt)("td",{parentName:"tr",align:null},"MathChain mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"MATH"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mathwallet.org"},"https://mathwallet.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"mathchain-testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"MathChain testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"MATH"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mathwallet.org"},"https://mathwallet.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"41"),(0,r.kt)("td",{parentName:"tr",align:null},"poli"),(0,r.kt)("td",{parentName:"tr",align:null},"Polimec Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polimec.io/"},"https://polimec.io/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"42"),(0,r.kt)("td",{parentName:"tr",align:null},"substrate"),(0,r.kt)("td",{parentName:"tr",align:null},"Substrate"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://substrate.io/"},"https://substrate.io/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"43"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Bare 32-bit ECDSA SECP-256k1 public key."),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"44"),(0,r.kt)("td",{parentName:"tr",align:null},"chainx"),(0,r.kt)("td",{parentName:"tr",align:null},"ChainX"),(0,r.kt)("td",{parentName:"tr",align:null},"PCX"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://chainx.org/"},"https://chainx.org/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"45"),(0,r.kt)("td",{parentName:"tr",align:null},"uniarts"),(0,r.kt)("td",{parentName:"tr",align:null},"UniArts Network"),(0,r.kt)("td",{parentName:"tr",align:null},"UART, UINK"),(0,r.kt)("td",{parentName:"tr",align:null},"12, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://uniarts.me"},"https://uniarts.me"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"46"),(0,r.kt)("td",{parentName:"tr",align:null},"reserved46"),(0,r.kt)("td",{parentName:"tr",align:null},"This prefix is reserved."),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"47"),(0,r.kt)("td",{parentName:"tr",align:null},"reserved47"),(0,r.kt)("td",{parentName:"tr",align:null},"This prefix is reserved."),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"48"),(0,r.kt)("td",{parentName:"tr",align:null},"neatcoin"),(0,r.kt)("td",{parentName:"tr",align:null},"Neatcoin Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"NEAT"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://neatcoin.org"},"https://neatcoin.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"63"),(0,r.kt)("td",{parentName:"tr",align:null},"hydradx"),(0,r.kt)("td",{parentName:"tr",align:null},"HydraDX"),(0,r.kt)("td",{parentName:"tr",align:null},"HDX"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hydradx.io"},"https://hydradx.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"65"),(0,r.kt)("td",{parentName:"tr",align:null},"aventus"),(0,r.kt)("td",{parentName:"tr",align:null},"AvN Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"AVT"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aventus.io"},"https://aventus.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"66"),(0,r.kt)("td",{parentName:"tr",align:null},"crust"),(0,r.kt)("td",{parentName:"tr",align:null},"Crust Network"),(0,r.kt)("td",{parentName:"tr",align:null},"CRU"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://crust.network"},"https://crust.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"67"),(0,r.kt)("td",{parentName:"tr",align:null},"equilibrium"),(0,r.kt)("td",{parentName:"tr",align:null},"Equilibrium Network"),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown, USD, EQ, ETH, BTC, EOS, DOT, CRV"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 9, 9, 9, 9, 9, 9, 9"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://equilibrium.io"},"https://equilibrium.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"69"),(0,r.kt)("td",{parentName:"tr",align:null},"sora"),(0,r.kt)("td",{parentName:"tr",align:null},"SORA Network"),(0,r.kt)("td",{parentName:"tr",align:null},"XOR"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://sora.org"},"https://sora.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"73"),(0,r.kt)("td",{parentName:"tr",align:null},"zeitgeist"),(0,r.kt)("td",{parentName:"tr",align:null},"Zeitgeist"),(0,r.kt)("td",{parentName:"tr",align:null},"ZTG"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://zeitgeist.pm"},"https://zeitgeist.pm"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"77"),(0,r.kt)("td",{parentName:"tr",align:null},"manta"),(0,r.kt)("td",{parentName:"tr",align:null},"Manta network"),(0,r.kt)("td",{parentName:"tr",align:null},"MA"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://manta.network"},"https://manta.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"78"),(0,r.kt)("td",{parentName:"tr",align:null},"calamari"),(0,r.kt)("td",{parentName:"tr",align:null},"Calamari: Manta Canary Network"),(0,r.kt)("td",{parentName:"tr",align:null},"KMA"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://manta.network"},"https://manta.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"98"),(0,r.kt)("td",{parentName:"tr",align:null},"polkasmith"),(0,r.kt)("td",{parentName:"tr",align:null},"PolkaSmith Canary Network"),(0,r.kt)("td",{parentName:"tr",align:null},"PKS"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polkafoundry.com"},"https://polkafoundry.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"99"),(0,r.kt)("td",{parentName:"tr",align:null},"polkafoundry"),(0,r.kt)("td",{parentName:"tr",align:null},"PolkaFoundry Network"),(0,r.kt)("td",{parentName:"tr",align:null},"PKF"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polkafoundry.com"},"https://polkafoundry.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"101"),(0,r.kt)("td",{parentName:"tr",align:null},"origintrail-parachain"),(0,r.kt)("td",{parentName:"tr",align:null},"OriginTrail Parachain"),(0,r.kt)("td",{parentName:"tr",align:null},"TRAC"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"secp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://origintrail.io"},"https://origintrail.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"110"),(0,r.kt)("td",{parentName:"tr",align:null},"heiko"),(0,r.kt)("td",{parentName:"tr",align:null},"Heiko"),(0,r.kt)("td",{parentName:"tr",align:null},"HKO"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://parallel.fi/"},"https://parallel.fi/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"136"),(0,r.kt)("td",{parentName:"tr",align:null},"altair"),(0,r.kt)("td",{parentName:"tr",align:null},"Altair"),(0,r.kt)("td",{parentName:"tr",align:null},"AIR"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://centrifuge.io/"},"https://centrifuge.io/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"172"),(0,r.kt)("td",{parentName:"tr",align:null},"parallel"),(0,r.kt)("td",{parentName:"tr",align:null},"Parallel"),(0,r.kt)("td",{parentName:"tr",align:null},"PARA"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://parallel.fi/"},"https://parallel.fi/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"252"),(0,r.kt)("td",{parentName:"tr",align:null},"social-network"),(0,r.kt)("td",{parentName:"tr",align:null},"Social Network"),(0,r.kt)("td",{parentName:"tr",align:null},"NET"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://social.network"},"https://social.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1284"),(0,r.kt)("td",{parentName:"tr",align:null},"moonbeam"),(0,r.kt)("td",{parentName:"tr",align:null},"Moonbeam"),(0,r.kt)("td",{parentName:"tr",align:null},"GLMR"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"secp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://moonbeam.network"},"https://moonbeam.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1285"),(0,r.kt)("td",{parentName:"tr",align:null},"moonriver"),(0,r.kt)("td",{parentName:"tr",align:null},"Moonriver"),(0,r.kt)("td",{parentName:"tr",align:null},"MOVR"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"secp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://moonbeam.network"},"https://moonbeam.network"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10041"),(0,r.kt)("td",{parentName:"tr",align:null},"basilisk"),(0,r.kt)("td",{parentName:"tr",align:null},"Basilisk"),(0,r.kt)("td",{parentName:"tr",align:null},"BSX"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"*","25519"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bsx.fi"},"https://bsx.fi"))))))}N.isMDXComponent=!0}}]);