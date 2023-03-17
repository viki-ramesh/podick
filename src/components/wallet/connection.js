// import { ethers } from "ethers";

// const ethereum = window.ethereum

// const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
// const signer = provider.getSigner()

// // function to check if metamask is installed

// var isMetamaskInstalled = () => ethereum.isMetamaskInstalled

// // function to check if metamask is connected to the current chain 
// var isMetamaskConnected = () => ethereum.isConnected()

// /*function to enable metamask if its disconnected
// const enableMetamask = async () => {
//     await ethereum.on('connect', (chainId) => {
//         console.log({ chainId })
//         console.log('Metamask Connected:', ethereum.isConnected())
//     })
// }*/


// //  function to get chainID
// const getChainId = async () =>{
//     return await ethereum.request({method: 'eth_chainId'})
// }

// // function to get metamask networkId
// const getNetworkId = async () => {
//     return await ethereum.request({method: 'net_version'})
// }

// //  function to get metamask networkId 
// const getAccounts = async() => {
//     try {
//         let account = await ethereum.request({method:'eth_accounts'})
//         return account
//     }catch (err){
//         console.log("Error getting account:\n", err)
//         return err
//     }
// }

// // function to request metamask to connect with account
// const connectToAccount = async () => {
//     try {
//         let account = await ethereum.request({method: 'eth_requestAccounts'})
//         return account
//     } catch (error) {
//         console.log('Error connecting to metamask account:\n',error)
//         return error
//     }
// }

// // function to get the balance of the connected account
// const getBalance = async () => {
//     try {
//         let account = await getAccounts()
//         if (account.length === 0) {
//             return 'Connect to account first!'
//         }
    
//         let balance = await signer.getBalance()
//         return ethers.utils.formatEther(balance)
//     } catch (error) {
//         console.log('Error getting balance:\n',error)
//         return error
//     }
// }

// export default {
//     signer,
//     provider,
//     isMetamaskInstalled,
//     isMetamaskConnected,
//     getChainId,
//     getNetworkId,
//     getAccounts,
//     connectToAccount,
//     getBalance
// }