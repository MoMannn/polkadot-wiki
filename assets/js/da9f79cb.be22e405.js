(self.webpackChunk=self.webpackChunk||[]).push([[2248],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(74165),a=n(15861),i=n(67294),r=n(92519),s=n(9545),l=n(67425);function d(e,t,n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,o.Z)().mark((function e(t,n,a){var i,l,d,m,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new r.U(i),e.next=21,s.G.create({provider:d});case 21:m=e.sent,(p=n.split(".")).forEach((function(e){e in m&&(m=m[e])})),e.t1=p[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=m.toString(),e.abrupt("break",35);case 29:return e.next=31,m();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,n,o){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,o);break;case"precise":(0,l.Precise)(e,n,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"percentage":(0,l.Percentage)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,n=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,m=(0,i.useState)(""),c=m[0],h=m[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?p(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,h);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?p(a,l,t,h):h(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),c}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,o){var a=void 0;if("polkadot"===n||"statemint"===n)a=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");a=6}e=parseFloat(e),o((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(a)+" "+t[n].symbol).toString())},Precise:function(e,n,o){o(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},92916:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=n(47940),s=["components"],l={id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},d=void 0,m={unversionedId:"learn/learn-nomination-pools",id:"learn/learn-nomination-pools",title:"Nomination Pools",description:"Learn about Nomination Pools and their features",source:"@site/../docs/learn/learn-nomination-pools.md",sourceDirName:"learn",slug:"/learn-nomination-pools",permalink:"/docs/learn-nomination-pools",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nomination-pools.md",tags:[],version:"current",lastUpdatedBy:"alineherzman",lastUpdatedAt:1680530836,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Learn about Nomination Pools and their features",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},sidebar:"docs",previous:{title:"Introduction to Staking",permalink:"/docs/learn-staking"},next:{title:"Accounts",permalink:"/docs/learn-account-advanced"}},p={},c=[{value:"Key Components",id:"key-components",level:2},{value:"Pool Member Lifecycle",id:"pool-member-lifecycle",level:2},{value:"Join a pool",id:"join-a-pool",level:3},{value:"Claim rewards",id:"claim-rewards",level:3},{value:"Unbond and withdraw funds",id:"unbond-and-withdraw-funds",level:3},{value:"Limitations of Nomination Pools",id:"limitations-of-nomination-pools",level:3},{value:"Pool Administration",id:"pool-administration",level:2},{value:"States",id:"states",level:3},{value:"Roles",id:"roles",level:3},{value:"Pool Lifecycle",id:"pool-lifecycle",level:2},{value:"Nomination Pools - Slashing",id:"nomination-pools---slashing",level:2},{value:"Nominating vs Joining a Pool",id:"nominating-vs-joining-a-pool",level:2}],h={toc:c},u="wrapper";function k(e){var t=e.components,l=(0,a.Z)(e,s);return(0,i.kt)(u,(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Nomination Pools are live on Polkadot!",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Nomination pools are a new feature for Polkadot\u2019s staking system that allows users to pool their\nDOT tokens together on-chain to nominate\nvalidators and receive rewards, significantly improving the system\u2019s scalability. Now, anyone with\nas little as\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/nomination-pools-are-live-stake-natively-with-just-1-dot/"},"1 DOT can receive rewards for staking natively on Polkadot"),".\nNote that rewards are not guaranteed for those pools that do not have enough bonded funds to be\nincluded within the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced#bags-list"},"bags list"),". ",(0,i.kt)("strong",{parentName:"p"},"Only members of active\npools will receive rewards.")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"There are currently\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.counterForPoolMembers",defaultValue:4376,mdxType:"RPC"}),"\nmembers. (There can be a maximum of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.maxPoolMembers",defaultValue:16384,mdxType:"RPC"}),"\nmembers.)"),(0,i.kt)("li",{parentName:"ul"},"There are currently\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.lastPoolId",defaultValue:80,mdxType:"RPC"}),"\npools. (There can be a maximum of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.maxPools",defaultValue:64,mdxType:"RPC"}),"\npools)"),(0,i.kt)("li",{parentName:"ul"},"No limit on\n","\nmembers per pool."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Learn the key differences between\n",(0,i.kt)("a",{parentName:"p",href:"#nominating-vs-joining-a-pool"},(0,i.kt)("strong",{parentName:"a"},"Staking directly vs Joining a Nomination Pool")),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"For Ledger users:")," Joining a nomination pool is possible only with the XL version of the Polkadot\nLedger App. This should be installed by default on Ledger Nano X and S Plus, but not on the Nano S.")),(0,i.kt)("admonition",{title:"Have questions on Nomination Pools?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Please join the ",(0,i.kt)("a",{parentName:"p",href:"https://dot.li/discord"},"Polkadot Discord")," for asking general questions about\nNomination Pools. If you are a developer, please join our\n",(0,i.kt)("a",{parentName:"p",href:"https://matrix.to/#/#nompools-support:matrix.parity.io"},"nomination pools support channel"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nomination Pools",src:n(85408).Z,width:"1720",height:"963"})),(0,i.kt)("p",null,"Nomination pools are one of the key features from the roadmap of staking improvements on\nPolkadot. They are designed to\npermissionlessly allow members to pool their funds together and act as a single nominator account."),(0,i.kt)("p",null,"Due to the current runtime constraints,\nPolkadot can only handle\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.electionProviderMultiPhase.maxElectingVoters",defaultValue:22500,mdxType:"RPC"}),"\n","\nnominators comfortably in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator#staking-election-stages"},"electing set"),". As one of\nthe objectives of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"NPoS algorithm")," is to maximize the overall stake on the\nnetwork, it can be inferred that the staking system on\nPolkadot favors nominators with a larger\nstake. Only the nominator accounts which back the validators in the active set are eligible for\nreceiving staking rewards. This leaves out nomination intents from the accounts with lower token\nbalance than the min-active nomination and places them in a waiting queue to enter electing set.\nNomination pools will be handy for members who want to participate in the staking system with a\nstake much lower than the dynamic min-active nomination threshold on the network. All operations are\nconstant space and time complexity relative to the number of members, eliminating any theoretical\nupper bound on the number of members the system can handle and thus scaling the number of accounts\nthat can participate and earn rewards in the staking system on\nPolkadot. In summary, each nomination pool is\nviewed as a single nominator from the NPoS system point of view."),(0,i.kt)("admonition",{title:"Why aren't the members in the nomination pools called delegators?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"delegator")," is associated too much with Delegated Proof of Staking (DPoS), and since\nPolkadot implements Nominated Proof of Staking\n(NPoS), naming them delegators would be misleading. The term ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," is our generic replacement for\n",(0,i.kt)("inlineCode",{parentName:"p"},"delegator"),". In action, members are quite similar to delegators and delegate their nomination power\nto the pool.")),(0,i.kt)("p",null,"The pool\u2019s earnings are split pro rata to a member's stake in the bonded pool (and thus, the staking\nrewards for members will be the same as if they were a nominator). Importantly, slashes are also\napplied proportionally to members who may have been actively bonded."),(0,i.kt)("h2",{id:"key-components"},"Key Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bonded Pool: Tracks the distribution of actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Reward Pool: Tracks rewards earned by actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Unbonding Sub Pools: Collection of pools at different phases (i.e. eras) of the unbonding\nlifecycle."),(0,i.kt)("li",{parentName:"ul"},"Members: Accounts that nominate to the pools."),(0,i.kt)("li",{parentName:"ul"},"Point: Unit of measure for a member\u2019s portion of a pool's funds. All pools start with a point to\nPlanck ratio of 1. Over time, if the pool receives rewards, they increase in value, and if the\npool is slashed, it decreases in value.")),(0,i.kt)("h2",{id:"pool-member-lifecycle"},"Pool Member Lifecycle"),(0,i.kt)("h3",{id:"join-a-pool"},"Join a pool"),(0,i.kt)("p",null,"A member delegates funds to a pool by transferring some amount to the pool\u2019s bonded account with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"join")," extrinsic. The pool then increases its bond with the new funds. A member is afforded the\nability to bond additional funds or re-stake rewards as long as they are already actively bonded.\nNote that a member may only belong to one pool at a time."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The current minimum bond to join a pool on"),"\n",(0,i.kt)("strong",{parentName:"p"},"Polkadot"),"","\n",(0,i.kt)("strong",{parentName:"p"},"is ",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.minJoinBond",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"."),"\n",""),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The funds nominated to a pool will not be visible in the member's account balance on Polkadot JS\nApps UI. This is because the member funds are transferred from their account to the pool's\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#system-accounts"},"system account"),". This pool account is not accessible\nby anyone (including the pool root or depositor) and only the pool's internal logic can access the\naccount.")),(0,i.kt)("admonition",{title:"Use Non-Transfer Proxy Accounts to join Nomination Pools",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Only ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies#non-transfer-proxy"},"non-transfer proxies")," can be used to participate in\nnomination pools. ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies#staking-proxy"},"staking proxies")," cannot be used as they cannot\nmake calls to the nomination pools pallet.")),(0,i.kt)("p",null,'Check the "How to join a pool" section in\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("h3",{id:"claim-rewards"},"Claim rewards"),(0,i.kt)("p",null,'The member can claim their portion of any rewards that have accumulated since the previous time they\nclaimed (or in the case that they have never claimed, any rewards that have accumulated since the\nera after they joined). Rewards are split pro rata among the actively bonded members. Check the "How\nto claim rewards" section in\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("h3",{id:"unbond-and-withdraw-funds"},"Unbond and withdraw funds"),(0,i.kt)("p",null,"At any point in time after joining the pool, a member can start the process of exiting by unbonding.\n",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," will unbond part or all of the member's funds. After unbond has been called and the\nunbonding duration has passed\n(",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.staking.bondingDuration",defaultValue:28,mdxType:"RPC"}),"\n","\neras which correspond to\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.staking.bondingDuration",defaultValue:28,mdxType:"RPC"}),"\n","\ndays on Polkadot),  a member may withdraw\ntheir funds with ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),'. Withdrawing effectively ends a member\'s relationship with their\npool, allowing them to join a different pool if desired. Check the "Withdraw unbonded funds" section\nin\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("admonition",{title:"Unbonding transaction automatically triggers withdrawal of rewards",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When there is a change in the bonded balance, the accumulated rewards in the pool thus far are\nautomatically withdrawn to the account. The rewards are then accrued based on the updated bonded\nbalance.")),(0,i.kt)("h3",{id:"limitations-of-nomination-pools"},"Limitations of Nomination Pools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A member cannot vote (e.g. in Referenda or for Council members) with their nominated funds. This\nmay be changed in the future once accounts are afforded the ability to split votes."),(0,i.kt)("li",{parentName:"ul"},"For a member to switch pools, all funds from the account must be unbonded. This process takes 28\neras."),(0,i.kt)("li",{parentName:"ul"},"A member can partially unbond the staked funds in the pool (at most 16 partial unbonds).")),(0,i.kt)("h2",{id:"pool-administration"},"Pool Administration"),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open: The pool is open to be joined by anyone."),(0,i.kt)("li",{parentName:"ul"},"Blocked: The pool is blocked; no joiners are permitted."),(0,i.kt)("li",{parentName:"ul"},"Destroying: The pool is in the process of being destroyed. Once in this state, the pool may never\nrevert to any other state; it can only proceed to be destroyed. All members can be\npermissionlessly unbonded; this allows the pool to be dismantled regardless of any member\u2019s\nproactivity.")),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Depositor: Creates the pool and is the initial member. The depositor can only leave the pool once\nall other members have left. Once they leave by withdrawing, the pool is fully removed from the\nsystem."),(0,i.kt)("li",{parentName:"ul"},"Nominator: Can select the validators the pool nominates."),(0,i.kt)("li",{parentName:"ul"},"State-Toggler: Can change the pool\u2019s state and kick (permissionlessly unbond/withdraw) members if\nthe pool is blocked."),(0,i.kt)("li",{parentName:"ul"},"Root: Can change the nominator, state-toggler, or itself. Further, it can perform any of the\nactions the nominator or state-toggler can.")),(0,i.kt)("h2",{id:"pool-lifecycle"},"Pool Lifecycle"),(0,i.kt)("admonition",{title:"Advanced How-to Guides",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking-guides#nomination-pools"},"this page")," for more information about the lifecycle\nof nomination pools. The cycle includes creation, upkeep and destruction.")),(0,i.kt)("h2",{id:"nomination-pools---slashing"},"Nomination Pools - Slashing"),(0,i.kt)("p",null,"Suppose the staking system slashes a pool\u2019s underlying nomination account. In that case, the slash\nis distributed evenly across the bonded pool, and the unbonding pools from slash era+1 through the\nslash apply era. Thus, any member who either a) was unbonding or b) was actively bonded in the\naforementioned range of eras will be affected by the slash. In other words, a member who may have\nbeen actively bonded during the offence is slashed pro rata based on its stake relative to the total\nslash amount."),(0,i.kt)("p",null,"Unbonding pools need to be slashed to ensure all nominators who were in the bonded pool while it was\nbacking a validator that committed an offense are punished. Without these measures a nominator could\nunbond right after a validator equivocated with no consequences."),(0,i.kt)("p",null,"This strategy is unfair to members who joined after the slash because they get slashed as well, but\nit spares members who unbond. The latter is much more important for security: if a pool's validators\nattack the network, their members need to unbond fast! Avoiding additional slashes gives them an\nincentive to do that if validators get repeatedly slashed."),(0,i.kt)("h2",{id:"nominating-vs-joining-a-pool"},"Nominating vs Joining a Pool"),(0,i.kt)("p",null,"Nominating is the action of choosing validators. It does not simply involve bonding tokens.\nNominating is an active task, which implies that you regularly monitor that your stake is backing an\nactive validator in all the eras and check if you are receiving your staking rewards. More\nimportantly, ensure that the validators you chose always act in the best interests of the network\nprotocol and have less chance of getting slashed. To nominate, you need a minimum of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.staking.minNominatorBond",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"",",\nand to receive rewards, you need at least a balance greater than the minimum active bond. Depending\non your validators, if your active validator is oversubscribed, you will earn rewards only if your\nstake is within that of the top\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:512,mdxType:"RPC"}),"","\nnominators. If the validator misbehaves, It is worth noting that your stake is subject to slashing,\nirrespective of whether you are at the top\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:512,mdxType:"RPC"}),"","\nnominators or not."),(0,i.kt)("p",null,"As the minimum active bond is a dynamic value, it can make your nomination inactive when the\nthreshold goes above your bonded balance. Hence, to be eligible to earn rewards while nominating,\nyou would need to stake a much higher balance than the minimum active bond."),(0,i.kt)("p",null,"Nomination pools are a way to participate in staking with as little as 1 DOT and earn staking\nrewards. Nomination pools differ from custodial solutions (like staking through central exchanges)\nbecause they are non-custodial, native to Polkadot's protocol, permissionless, transparent, and run\nin a decentralized way by the community. Before joining a nomination pool, you must ensure that the\npool is earning rewards and nominating the validators that match your preferences. Participating in\npools is more of a set-and-forget action than nominating by yourself. The pool operator maintains\nthe list of validators nominated by the pool, and so, in a way, you are trusting the pool operator\nto act in your best interests. However, it is advised to check the validators nominated by the pool\nfrom time to time and change the pool if necessary."),(0,i.kt)("admonition",{title:"Minimum Active Nomination Value is Dynamic",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The minimum amount required to become an active nominator and earn rewards is\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(r.Z,{network:"polkadot",path:"query.staking.minimumActiveStake",defaultValue:2937e9,filter:"humanReadable",mdxType:"RPC"})),".\n","\nIf you have less DOT than the minimum active\nnomination and still want to participate in staking, you can join the nomination pools. You can now\nstake on Polkadot natively with just\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.minJoinBond",filter:"humanReadable",defaultValue:1e10,mdxType:"RPC"})),"\n","\nin the nomination pools and earn staking rewards. For additional information, see\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/nomination-pools-are-live-stake-natively-with-just-1-dot/"},"this blog post"),".\nCheck the wiki doc on ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pools")," for more information.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Nominating"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Joining a Pool"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Minimum 250 DOT to nominate."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Minimum 1 DOT to be a member.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Rewards can be compounded automatically or sent to any account."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rewards can be manually claimed to the pool member's account and be bonded in the pool again to compound them.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"If the active validator gets slashed, all active nominators are subjected to slashing, also those that do not receive rewards due to the oversubscription issue."),(0,i.kt)("td",{parentName:"tr",align:"center"},"If the active validator gets slashed, all pool members are subjected to slashing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Can bond and stake DOT indefinitely."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Can bond and stake DOT until the pool exists.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Unbonding period of 28 days. Can switch validators without unbonding."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unbonding period of 28 days. Need to unbond before switching to a different pool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum uncapped."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum uncapped.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Should bond more than the ",(0,i.kt)("a",{parentName:"td",href:"/docs/learn-nominator#minimum-active-nomination-to-receive-staking-rewards"},"minimum active nomination")," in an era to be eligible to earn staking rewards, although it can depend on multiple other factors outlined in the linked document."),(0,i.kt)("td",{parentName:"tr",align:"center"},"A nomination pool earns rewards in an era if it satisfies all the conditions mentioned for the nominator (as the nomination pool is just a nominator from ",(0,i.kt)("a",{parentName:"td",href:"/docs/learn-phragmen"},"the NPoS system")," perspective).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Staked tokens can be used for participation in Governance."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Staked tokens cannot be used for participation in Governance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/docs/learn-staking-advanced#claiming-rewards"},"Rewards payout")," can be triggered permissionlessly by anyone (typically done by the validator)."),(0,i.kt)("td",{parentName:"tr",align:"center"},"The pool member must claim the rewards.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Bonded funds remain in your account."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Bonded funds are transferred to a pool account which is administered by the network protocol and is not accessible to anyone else. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/learn-account-advanced#system-accounts"},"System Accounts")," for more information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Nominator manages the list of staked validators (up to 16)."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Nominations managed by the pool operator.")))))}k.isMDXComponent=!0},85408:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/NPoS-Pools-b758caea750e9e772fe7fcdbd6babeca.png"},46601:()=>{}}]);