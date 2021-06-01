const TronWeb = require('tronweb')
const request = require('request');


//https://api.shasta.trongrid.io
//c46550c38f5f57b8833a3806b1342328dbd4aba004c834405e6a5b55105b6db8
//privateKey:'ca389783-d4e3-4b36-8d93-020f3a30ea70'
const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey:'',
    fullNode: 'https://api.trongrid.io',
    solidityNode: 'https://api.trongrid.io',
    eventServer: 'https://api.trongrid.io'
})

//创建账户
//console.log(tronWeb.createAccount())

// const tradeobj =  tronWeb.transactionBuilder.sendTrx("TRj9nC5EwgusFthUPWMBFwi2QWFctiiMqy", 1,"TQgpRAjg8XWDYG2QjeDEMFRyXftXCEeyAB");  
// //const signedtxn =  tronWeb.trx.sign(tradeobj, '');
 
// tradeobj.then(function(result){
// 	console.log(result)
// const signedtxn =  tronWeb.trx.sign(result, '');


// })
var abi=[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_feeRate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"oldFeeRate","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newFeeRate","type":"uint256"}],"name":"FeeRateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"contract IERC20","name":"inToken","type":"address"},{"indexed":true,"internalType":"contract IERC20","name":"outToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"inAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"outAmount","type":"uint256"}],"name":"Order","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Shutdown","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20","name":"inToken","type":"address"},{"indexed":true,"internalType":"contract IERC20","name":"outToken","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"inAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"outAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referrerFee","type":"uint256"}],"name":"Swapped","type":"event"},{"inputs":[{"internalType":"uint256","name":"_feeRate","type":"uint256"}],"name":"changeFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isShutdown","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shutdown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"inToken","type":"address"},{"internalType":"contract IERC20","name":"outToken","type":"address"},{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"uint256","name":"minOutAmount","type":"uint256"},{"internalType":"uint256","name":"guaranteedAmount","type":"uint256"},{"internalType":"address payable","name":"referrer","type":"address"},{"internalType":"address[]","name":"addressesToCall","type":"address[]"},{"internalType":"bytes","name":"dataToCall","type":"bytes"},{"internalType":"uint256[]","name":"offsets","type":"uint256[]"},{"internalType":"uint256[]","name":"gasLimitsAndValues","type":"uint256[]"}],"name":"swap","outputs":[{"internalType":"uint256","name":"outAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
//TBF8vfUCnQ7TuKtHKd43mhjpjdSATxVWAv

tronWeb.trx.sendToken("TPoQxgkjFZcXbrNiJNxXiq4XayGaJ2XsDm", 1,'1003657','').then(console.log)


//console.log( tronWeb.address.toHex("TBF8vfUCnQ7TuKtHKd43mhjpjdSATxVWAv"))
//swap(address,address,uint256,uint256,uint256,address,address[],bytes,uint256[],uint256[])

 
//var parameter =[{type:'address',value:'TV3nb5HYFe2xBEmyb3ETe93UGkjAhWyzrs'},{type:'uint256',value:100}]

/*
async function test(){
	 let instance = await tronWeb.contract(abi,"TBF8vfUCnQ7TuKtHKd43mhjpjdSATxVWAv");
 	console.log(instance)

	const tradeobj =await tronWeb.transactionBuilder.triggerSmartContract("TBF8vfUCnQ7TuKtHKd43mhjpjdSATxVWAv", "swap(address,address,uint256,uint256,uint256,address,address[],bytes,uint256[],uint256[])", options,
    parameter,"41a170610196ac9178396c09f2ed6cc9d553a75204");
    console.log(tradeobj)

 	 var signedTx = await tronWeb.trx.sign(tradeobj.transaction);
    
    console.log(signedTx)

 //    const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
	// console.log(receipt)


}
test()

  	*/


//tronWeb.transactionBuilder.triggerSmartContract()




// async function getContract(){
//     let instance = await tronWeb.contract(abi,"TBF8vfUCnQ7TuKtHKd43mhjpjdSATxVWAv");
//   	console.log(instance)


//   	// let res = await instance.methods.swap(i, u, s, o, p, "0x0000000000000000000000000000000000000000", y, d, r, m).send({  
//   	// 	feeLimit: 300000000,

//    //      callValue: "100000000"})


//   	// console.log(res)


// }
//var con=getContract()


//tronWeb.trx.sendTransaction("TRj9nC5EwgusFthUPWMBFwi2QWFctiiMqy", 1000,'c46550c38f5f57b8833a3806b1342328dbd4aba004c834405e6a5b55105b6db8').then(console.log);
//web3.eth.getTransaction(txh).then(
//         function(result){
            
//             if(result!=null){
//               from = result.from
            
//               if(from==="0x471e00ef1fE21005a1480DfD27cf32E5A1084537"){
//                 console.log("看看")
//               console.log(txh+"----"+from)
//             }

//             }
//            // if(from==="")
//             //to = result.to;
            
