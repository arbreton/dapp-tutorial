import {address, ABI} from './constants/casinoContract'
const Web3 = require('web3')

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.ethereum)
  let casinoContract = web3.eth.contract(ABI)
  let casinoContractInstance = casinoContract.at(address)
  console.log(casinoContract)
  console.log(casinoContractInstance)
  resolve(casinoContractInstance)
})

export default getContract
