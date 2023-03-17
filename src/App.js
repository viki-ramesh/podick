import Team from "./components/team"
import Media from "./components/media"
import Roadmap from "./components/roadmap"

import Logo from "./assests/png-logo.png"
import vector1 from "./assests/Vector-1.svg"
import vector2 from "./assests/Vector-2.svg"
import vector3 from "./assests/Vector-3.svg"
import vector4 from "./assests/Vector-4.svg"
import music1 from "./assests/music-1.jpg"
import music2 from "./assests/music-2.jpg"
import searchImg from "./assests/search-icon.svg"
import listenImg from "./assests/listen-icon.svg"
import earnImg from "./assests/earn-icon.svg"
import bnbLogo from "./assests/bnb-logo.svg"
import androidLogo from "./assests/android-logo.svg"
import iosLogo from "./assests/ios-logo.svg"
import oculusLogo from "./assests/oculus-logo.svg"
import viveLogo from "./assests/vive-logo.svg"
import tokenomicsImg from "./assests/media/tokenomics.png"

import media1 from "./assests/media/media-logo-1.png"
import media2 from "./assests/media/media-logo-2.png"
import media3 from "./assests/media/media-logo-3.png"
import media4 from "./assests/media/media-logo-4.png"
import media5 from "./assests/media/media-logo-5.png"
import media6 from "./assests/media/media-logo-6.png"
import media7 from "./assests/media/media-logo-7.png"
import media8 from "./assests/media/media-logo-8.png"
import media9 from "./assests/media/media-logo-9.png"
import media10 from "./assests/media/media-logo-10.png"
import media11 from "./assests/media/media-logo-11.png"
import media12 from "./assests/media/media-logo-12.png"
import media13 from "./assests/media/media-logo-13-4.png"
import media14 from "./assests/media/media-logo-14-4.png"
import media15 from "./assests/media/media-logo-15-4.png"
import vector17 from "./assests/vector17.png"


import { FiTarget } from "react-icons/fi"
import { AiFillPieChart, AiOutlineDropbox, AiFillTwitterCircle } from "react-icons/ai"
import { BsPieChartFill } from "react-icons/bs"
import { GiToken } from "react-icons/gi"
import { MdOutlinePriceChange } from "react-icons/md"
import { SlArrowDown } from "react-icons/sl"
import { SiTelegram } from "react-icons/si"
import { FaFileContract, FaCopy } from "react-icons/fa"

import ProgressBar from "@ramonak/react-progress-bar";

import { useRef, useState, useEffect } from "react"
import { Contract, ethers } from "ethers"
import Swal from 'sweetalert2'

import metamaskConfig from './components/wallet/connection'

import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

// const defaultOptions = {
//   significantDigits: 2,
//   thousandsSeparator: ',',
//   decimalSeparator: '.',
//   symbol: ''
// }

// export function currencyFormatter(value, options) {
//   if (typeof value !== 'number') value = 0.0
//   options = { ...defaultOptions, ...options }
//   value = value.toFixed(options.significantDigits)

//   const [currency, decimal] = value.split('.')
//   return `${currency.replace(
//     /\B(?=(\d{3})+(?!\d))/g,
//     options.thousandsSeparator
//   )}`
// }

// async function fetchAirdrop(connectContract, TOTAL_AIRDROP, setAirdropClaimed) {
//   const remainAir = await connectContract.airdropClaimed()
//   setAirdropClaimed(TOTAL_AIRDROP - parseInt(ethers.utils.formatEther(remainAir)))
// }


function App() {

  // const ABI = [{ "inputs": [{ "internalType": "address payable", "name": "depositAddr", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "stateMutability": "nonpayable", "type": "fallback" }, { "inputs": [], "name": "_cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "airdrop", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "airdropClaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner_", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buy", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "newDepositAddr", "type": "address" }], "name": "changeDeposite", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deposit", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]
  // const CONTRACT_ADDRESS = "0x0f823A5c58423Bb60B68646AFd597E29998a61d0"

  // const connectContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, metamaskConfig.signer)


  // const [Addr, setAddr] = useState(undefined)
  // const [isConnected, setConnected] = useState(false)

  // // token details
  // const perTokenPrice = 0.000016
  // const TOTAL_AIRDROP = 21000000
  // const [airdropClaimed, setAirdropClaimed] = useState(0)
  // fetchAirdrop(connectContract, TOTAL_AIRDROP, setAirdropClaimed)

  // const TOTAL_SALE = 6300000
  // const [saleProgress, setSaleProgress] = useState(TOTAL_SALE)

  // const AirdropSecRef = useRef(null)

  // const GoToAirdropSection = (e) => {
  //   AirdropSecRef.current.scrollIntoView()
  // }

  // const connectWallet = async () => {
  //   if (metamaskConfig.isMetamaskInstalled) {
  //     const chainId = await metamaskConfig.getChainId()

  //     if (parseInt(chainId, 16) !== 97) {
  //       alert("Please Switch to BSC Smart Chain")
  //       return
  //     } else {
  //       await metamaskConfig.connectToAccount()
  //       const account = await metamaskConfig.getAccounts()
  //       account > 0 && setAddr(account[0])
  //       setConnected(true)
  //     }

  //     return await metamaskConfig.isMetamaskConnected()
  //   }
  //   else {
  //     alert('Install Metamask extension to connect with DApp!')
  //     return false
  //   }
  // }

  // const ClaimAirdrop = async (e) => {

  //   if (isConnected) {
  //     const bal = await metamaskConfig.getBalance()
  //     if (bal > 0.0009) {

  //       try {
  //         const buyAir = await connectContract.airdrop({ value: ethers.utils.parseEther("0.0009") })
  //         Swal.fire({
  //           title: "Claim Success",
  //           text: "210 POD sent to your wallet.",
  //           icon: 'success',
  //           showCancelButton: true,
  //           cancelButtonText: "Exit",
  //           confirmButtonText: "View transfers",
  //           background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
  //           color: "#FFF",
  //         }).then((result) => {
  //           if (result.value) {
  //             window.location.href = "https://testnet.bscscan.com/tx/" + buyAir.hash + "";
  //           }
  //         });
  //         fetchAirdrop(connectContract, TOTAL_AIRDROP, setAirdropClaimed)

  //       } catch (err) {
  //         err.code !== 4001 && alert("Transaction Failed! Please try again.")
  //       }
  //     } else {
  //       alert("Airdrop Claim Fee 0.0009 BNB")
  //     }

  //     // const _totalSupply = await connectContract.totalSupply()
  //     // // const buyAir = await connectContract.airdrop({value: ethers.utils.parseEther("0.0009")})
  //     // console.log(ethers.utils.formatEther(_totalSupply))
  //     // // console.log(buyAir)
  //     // const bal = await metamaskConfig.getBalance()
  //     // console.log(bal)

  //   } else {
  //     connectWallet()
  //   }


  // }

  const BuyToken = async (e) => {

    // window.ethereum.request({
    //   method: "wallet_watchAsset",
    //   params: {
    //     type: "ERC20",
    //     options: {
    //       address: "0x0cf608B4c0eBe6C6fBedbA1E3DDe62B913c88feC",
    //       symbol: "VLC",
    //       decimals: "18",
    //       image: "images/favicon.png",
    //     },
    //   },
    //   id: Math.round(Math.random() * 300000),
    // })

    // Swal.fire({
    //   title: "Claim Success",
    //   text: "210 POD sent to your wallet.",
    //   icon: 'success',
    //   showCancelButton: true,
    //   cancelButtonText: "Exit",
    //   confirmButtonText: "View transfers",
    //   background: "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
    //   color: "#FFF",
    // }).then((result) => {
    //   if (result.value) {

    //   }
    // });
  }

  // event triggered when metamask is disconnected from chain and can not make rpc request
  // window.ethereum.on('disconnect', (chainId) => {
  //   console.log(chainId)
  //   console.log('Metamask Connected:', window.ethereum.isConnected())
  //   setAddr(undefined)
  // })

  // useEffect(() => {
  //   alert(claimedAirdrop)
  //   setAirdropClaimed(TOTAL_AIRDROP - claimedAirdrop)
  // }, [claimedAirdrop])


  return (
    <div className="App-ctn">
      <img className="vector-4" src={vector4} />
      <img className="vector-1" src={vector1} />
      <img className="vector-2" src={vector2} />
      <img className="vector-3" src={vector3} />

      <div className="App container">

        <section className='Navbar'>
          <div className='logo-ctn'>
            <img src={Logo} />
            <h2 className="logo-name up-txt gr-txt">Podick</h2>
          </div>
          <div className="navigation-ctn">
            <div className="border-btn">
            
          {/*<p className="up-txt bold-font font-12 connetwallet" onClick={connectWallet}>
            {isConnected ? <p>
              {Addr.substring(0, 5)}.......{Addr.substring((Addr.length - 5), Addr.length)}  </p>
              : "connect wallet"}
            </p>*/}
            </div>
          </div>

          <ConnectButton />
        </section>

       

      </div>
    </div>
  );
}

export default App;


/*

{Addr && <p className="font-12">{Addr.substring(0, 7)}....{Addr.substring((Addr.length - 7), Addr.length)}</p>}





















 <section className="info">
          <div className="info-txt">
            <h3 className="font-46 info-title"><span className="gr-txt">Dive</span> Into The Depths</h3>
            <h3 className="font-46 info-title">Of<span className="gr-txt"> Music World.</span></h3>
            <p className="info-pr">Podick is a blockchain-based music streaming platform that leverages the power of Binance Smart Chain to provide a fair, transparent, and rewarding experience for both artists and listeners. </p>

            <div className="info-btns">
              <div className="claim-airdrop-btn0 gr-btn" onClick={GoToAirdropSection}>claim airdrop</div>
              <div className="buy-btn0 gr-btn" onClick={GoToAirdropSection}>buy $POD</div>
            </div>
          </div>

          <div className="info-img">
            <div className="info-img-ctn">
              <div className="img-back-info" />
              <img className="music1-img" src={music1} />
            </div>
          </div>
        </section>

        <section className="details mrgn-top-2">
          <div className="search-ctn details-ctn">
            <div className="search-wrapper ">
              <img src={searchImg} className="logo-50" />
              <div className="search-content">
                <h3 className="font-24">Search Your Favourite Music</h3>
                <p className="font-14 mrgn-top-05 cap-txt">one-stop for the latest songs.</p>
              </div>
            </div>
            <div className="hr-line-div "></div>
          </div>

          <div className="listen-ctn details-ctn">
            <div className="listen-wrapper">
              <img src={listenImg} className="logo-50" />
              <div className="search-content">
                <h3 className="font-24">Listen +10M Songs</h3>
                <p className="font-14 mrgn-top-05 cap-txt">you can play millions of songs.</p>
              </div>
            </div>
            <div className="hr-line-div"></div>
          </div>

          <div className="earn-ctn search-ctn details-ctn">

            <div className="search-wrapper ">
              <img src={earnImg} className="logo-50" />
              <div className="search-content">
                <h3 className="font-24">Earn When You Listen</h3>
                <p className="font-14 mrgn-top-05 cap-txt">earning $POD Token Reward.</p>
              </div>
            </div>
          </div>

        </section>

        <section className="buy-airdrop mrgn-top-2" ref={AirdropSecRef}>
          <div className="token-sale-info ">
            <span className="center theme-txt"><FiTarget /> Total Raised</span>
            <h3 className="mrgn-top-1 center"><img src={bnbLogo} className="icon-20" /> &nbsp;100 BNB</h3>

            <span className="center theme-txt mrgn-top-3"><AiFillPieChart /> Initial values</span>
            <p className="mrgn-top-1 center">Market cap: &nbsp;<b>$ 8,95,350</b></p>
            <p className="mrgn-top-1 center">Circulating : &nbsp;<b>65,100,000</b></p>

            <span className="center theme-txt mrgn-top-3"><BsPieChartFill /> Token allocation</span>
            <p className="mrgn-top-1 center">Total supply: &nbsp;<b> 21,000,00,00</b></p>
            <p className="mrgn-top-1 center">Public sale: &nbsp;<b> 3%</b></p>
          </div>

          <div className="token-airdrop-info ">
            <span className="center theme-txt"><GiToken /> Token Info</span>
            <p className="mrgn-top-1 center">Name: &nbsp;<b>PODICK</b></p>
            <p className="mrgn-top-1 center">Ticker: &nbsp;<b>$ POD</b></p>
            <p className="mrgn-top-1 center">Decimals : &nbsp;<b>18</b></p>
            <p className="mrgn-top-1 center">Network: &nbsp;<img src={bnbLogo} className="icon-15" /><b> BSC-20</b></p>

            <p className="mrgn-top-1 center contract-addr">Addr : &nbsp;<b>{CONTRACT_ADDRESS.substring(0, 5)}.......{CONTRACT_ADDRESS.substring((CONTRACT_ADDRESS.length - 5), CONTRACT_ADDRESS.length)}</b></p>

            <p className="mrgn-top-3 center theme-txt bold-font">Invite People to get 100% POD on Every Airdrop and Presale.</p>
            <button className="claim-btn mrgn-top-3 bold-font" onClick={ClaimAirdrop}>
              CLAIM 210 POD
            </button>
            {isConnected
              ? <p className="theme-txt mrgn-top-1">{Addr.substring(0, 10)}....{Addr.substring((Addr.length - 10), Addr.length)}</p>
              : <p className="red-txt mrgn-top-1">Please connect wallet</p>
            }
          </div>

          <div className="token-sale-ctn ">
            <div className="vrtcl-div">
              <div>
                <span className="center theme-txt"><GiToken /> Tokens for sale</span>
                <h3 className="mrgn-top-1 center">63,000,00 POD</h3>
              </div>
              <div>
                <span className="center theme-txt"><MdOutlinePriceChange /> Price</span>
                <h3 className="mrgn-top-1 center"><img src={bnbLogo} className="icon-15" /> &nbsp;1 BNB = 62,500 POD</h3>
              </div>
            </div>
            <p className="mrgn-top-3 center">Listining price: &nbsp;<b>1 BNB = 6250 POD</b></p>
            <ProgressBar
              className="mrgn-top-3"
              completed={30}
              maxCompleted={100}
              customLabel={30 + '%'}
              bgColor="linear-gradient(to right, #C0B7E8 , #8176AF)"
              baseBgColor="#413d55"
              borderRadius="5px"
              width='100%'
              height="25px"
            />
            <div className="buy-btn-div">
              <div className="input-div mrgn-top-1">
                <p className="font-14 light-txt mrgn-btm-05">Min:  &nbsp;0.1 BNB </p>
                <input type="text" className="buy-input" placeholder="0.1 BNB"></input>
              </div>
              <button className="buy-btn mrgn-top-1 claim-btn" onClick={BuyToken}>
                {
                  isConnected ? "Buy POD" : "connect wallet"
                }
              </button>
            </div>
          </div>

        </section>

        <section className="technology mrgn-top-2">
          <div className="tech-img-ctn">
            <h3 className="tech-txt font-36">TECHNOLOGIES & PLATFORM</h3>
            <h3 className="light-font font-18">USED & SUPPORT BY PODICK.</h3>
            <div className="arrow">
              <div className="dark-arrow">
                <SlArrowDown size={20} />
              </div>
            </div>
          </div>

          <div className="tech-brand-ctn mrgn-top-1">
            <img src={androidLogo} />
            <img src={iosLogo} />
            <img src={oculusLogo} />
            <img src={viveLogo} />
          </div>

        </section>

        <section className="roadmap">
          <h3 className="mrgn-top-3 font-24 theme-txt">--- OUR ROADMAP (2023) --- </h3>
          <div className="mrgn-top-2" >
            <Roadmap />
          </div>
        </section>

        <section className="mrgn-top-2">
          <h3 className="mrgn-top-3 font-24 theme-txt text-center">--- OUR TEAM --- </h3>
          <div className="team mrgn-top-3">
            <Team name="Dylan Grant" role="Co-Founder & CEO" />
            <Team name="Shashwat Eternal" role="Co-Founder" />
            <Team name="Jay Mitic" role="Marketing and Operations Manager" />
            <Team name="Djordje Dovedan" role="Ex-Head of Marketing" />
            <Team name="Vladimir Ilic" role="Lead Devloper" />
            <Team name="Cameron Pino" role="border" />
            <Team name="Joarley Waybus" role="Web3 Devloper" />
            <Team name="Rossem covas" role=" Advisory" />
            <Team name="Ryan Salimi" role="LEAD PRODUCER" />
            <Team name="Carl Jeremie" role="ANGEL INVESTOR" />
          </div>
        </section>

        <section className="media-about">
          <h3 className="mrgn-top-3 font-24 theme-txt text-center">--- MEDIA ABOUT PODICK --- </h3>
          <div className="media-img-ctn mrgn-top-3">
            <Media image={media1} />
            <Media image={media2} />
            <Media image={media3} />
            <Media image={media4} />
            <Media image={media5} />
            <Media image={media6} />
            <Media image={media7} />
            <Media image={media8} />
            <Media image={media9} />
            <Media image={media10} />
            <Media image={media11} />
            <Media image={media12} />
            <Media image={media13} />
            <Media image={media14} />
            <Media image={media15} />

          </div>
        </section>

        <section className="tokenomics">
          <h3 className="mrgn-top-3 font-24 theme-txt text-center up-txt">--- tokenomics --- </h3>
          <img className="mrgn-top-3 tokenmics-img" src={tokenomicsImg} />
        </section>

        <section className="bottom">
          <h3 className="mrgn-top-3 font-24 theme-txt text-center up-txt">--- Social Media --- </h3>

          <div className="bootom-section mrgn-top-1 ">
            <AiFillTwitterCircle size={33} />
            <SiTelegram size={30} />
            <SiTelegram size={30} />
          </div>
          <img src={vector17} className="mrgn-top-3 bottom-vector" />
          <h3 className="mrgn-top-05 font-18 text-center padding-1">Copyright © 2023. All Rights Reserved.</h3>
        </section>

*/