(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(t,e,n){t.exports=n(321)},141:function(t,e,n){},155:function(t,e){},177:function(t,e){},179:function(t,e){},244:function(t,e){},250:function(t,e){},293:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=293},319:function(t,e,n){},321:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(131),o=n.n(s),r=(n(140),n(141),n(32)),u=n.n(r),p=n(132),l=n(46),c=n(48),d=n(47),y=n(33),m=n(49),b=n(19),f=n(50),h=n.n(f),v=(n(319),[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"devMintLocked",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"maxMintsPerTx",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"maxTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"nextTokenId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"startingBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"contractURI_",type:"string"}],name:"setContractURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"contractURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function",payable:!0},{inputs:[{internalType:"uint256",name:"_startingBlock",type:"uint256"}],name:"setStartingBlock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"devMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"lockDevMint",outputs:[],stateMutability:"nonpayable",type:"function"}]),w=n(134),T=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(c.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={mintQuantity:1},n.handleInput=function(t){n.setState({mintQuantity:t})},n}return Object(m.a)(e,t),Object(y.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"container-fluid mt-5"},i.a.createElement("div",{className:"row"},i.a.createElement("main",{role:"main",className:"col-lg-12 d-flex text-center"},i.a.createElement("div",{className:"content mr-auto ml-auto"},i.a.createElement("h1",null,"Mint Neighborhood NFT"),i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(t.state.mintQuantity),t.props.mint(t.state.mintQuantity)}},"Mint Quantity (limit 10):",i.a.createElement(w.a,{value:this.state.mintQuantity,onChange:this.handleInput}),i.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",value:"MINT (50 FTM each)"}))))))}}]),e}(a.Component),g=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={account:"",taskCount:0,tasks:[],loading:!1,expectedNetwork:!1},n.createTask=n.createTask.bind(Object(b.a)(Object(b.a)(n))),n.toggleCompleted=n.toggleCompleted.bind(Object(b.a)(Object(b.a)(n))),n}return Object(m.a)(e,t),Object(y.a)(e,[{key:"componentWillMount",value:function(){this.loadBlockchainData()}},{key:"loadBlockchainData",value:function(){var t=Object(p.a)(u.a.mark(function t(){var e,n,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=4;break}return window.web3=new h.a(window.ethereum),t.next=4,window.ethereum.enable();case 4:return"0xfa"!=window.web3.currentProvider.chainId?(console.log("Please connect to Fantom. Neighborhood NFT resides on Fantom mainnet."),this.state.expectedNetwork=!1):this.state.expectedNetwork=!0,e=new h.a(h.a.givenProvider||"https://rpc.ftm.tools/"),t.next=8,e.eth.getAccounts();case 8:n=t.sent,this.setState({account:n[0]}),this.setState({loading:!1}),a=new e.eth.Contract(v,"0xE02E7dc0700bdf590918E50EC2dd3AcCc88B58A8"),this.setState({neighborhood:a});case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),Object(y.a)(e,[{key:"createTask",value:function(t){var e=this;this.setState({loading:!0}),this.state.todoList.methods.createTask(t).send({from:this.state.account}).once("receipt",function(t){e.setState({loading:!1})})}},{key:"toggleCompleted",value:function(t){var e=this;this.setState({loading:!0}),this.state.todoList.methods.toggleCompleted(t).send({from:this.state.account}).once("receipt",function(t){e.setState({loading:!1})})}},{key:"mint",value:function(t){var e=5e19*t;"0xfa"==window.web3.currentProvider.chainId&&this.state.neighborhood.methods.mint(t).send({from:this.state.account,value:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"all"},this.state.expectedNetwork?i.a.createElement("div",null):i.a.createElement("div",{className:"header-text"},"Connect to Fantom mainnet before minting"),i.a.createElement("br",null),i.a.createElement("h1",{className:"header-text"},"Neighborhood"),i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"col-lg-12 d-flex justify-content-center"},i.a.createElement("img",{className:"header-image",src:"14.jpg",alt:"",height:"480",width:"640"}))),i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("main",{role:"main",className:"col-lg-12 d-flex justify-content-center"},this.state.loading?i.a.createElement("div",{id:"loader",className:"text-center"},i.a.createElement("p",{className:"text-center"},"Loading...")):i.a.createElement(T,{expectedNetwork:this.state.expectedNetwork,account:this.state.account,mint:this.mint,state:this.state})))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"header-text"},i.a.createElement("div",{className:"about-text"},"'Neighborhood' is a collection of 144 photos that were taken around the neighborhood during sunny days in October 2021. Deployed to Fantom mainnet.")),i.a.createElement("br",null),i.a.createElement("br",null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[135,1,2]]]);
//# sourceMappingURL=main.aa41178e.chunk.js.map
