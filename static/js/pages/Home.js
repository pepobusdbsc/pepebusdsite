import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import smokyP from '../assets/logo/smokyP.png'
import ps from '../assets/icons/pancakeswap-cake-logo.svg'
import cmc from '../assets/images/CMC-02-300x55-1.png'
import chart2 from '../assets/images/image.png'
import coin from '../assets/images/CoinGecko_logo_PNG3-2048x640.png'
import binance from '../assets/images/binance-smart-chain-e1619982959201.png'
import buyBinance from '../assets/images/bnb-bnb-logo-1536x1536.png'
import metaMask from '../assets/images/MetaMask_Fox.svg.png'
import pankswap from '../assets/images/color-black-1024x159-1-1024x159.png'
import dext from '../assets/images/dext.png'
import moneybag from '../assets/images/Sans-titre-2022-09-08T111117.614.png'
import telegram from '../assets/icons/telegram-svgrepo-com.svg'
import twitter from '../assets/icons/icons8-twitter-48.png'
import fire from '../assets/images/icons8-fire-48.png'

export default function Home() {
    return ( <
        >
        <
        Navbar / >
        <
        div className = 'container m-auto px-6 font-Poppins text-white' >
        <
        div className = 'flex flex-col items-center justify-center' >
        <
        div className = 'flex items-center justify-center' >
        <
        p className = 'md:text-[3rem] sm:text-[2rem] text-[22px] mb-10  font-bold px-4 py-2 text-center rounded-xl border-2 shadow-lg hover:text-white hover:bg-[#4C9540] text-[#264A20]  bg-white border-[#264A20]  hover:opacity-600 transition-all duration-300 ease-in-out' > Welcome to Pepe BUSD < /p> <
        /div> <
        div className = 'font-bold md:mt-[-20px] flex md:flex-row flex-col items-center justify-center md:space-y-3 space-y-6' >
        <
        img src = {
            smokyP
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'md:w-2/5' / >
        <
        div className = 'md:text-left text-center' >
        <
        p className = 'mb-10 border p-4 rounded-xl w-auto font-medium' > < span className = 'text-[25px] font-bold' > " " Hodl $PEPEB and receive BUSD just like that, because yes, because you deserve it."" < br / > < /span> <span className='text-[20px]'>Why does PEPE want to give you BUSD and not another currency? Very easy, because BUSD is a stable coin while the others (BNB, BTC, ETH…) are a roller coaster and could give you a heart attack if the crypto market suddenly crashes (I know, you’re reading your life here).<strong></strong > , We are here to help you Reduce < strong > STRESS < /strong>with<strong> MEMEs</strong > < br / > We created a meme out of it to keep you happy and < strong > STRESS FREE < /strong><br / > We WELCOME < strong > dreamers < /strong> to join our Community.</span > < /p> <
        /div> <
        /div> <
        div className = "flex items-center justify-center lg:flex-row flex-col lg:space-x-8" >
        <
        a href = "https://t.me/PepeBusdBSC"
        target = "_blank"
        rel = "noopener noreferrer"
        className = 'flex md:w-80 font-medium items-center justify-center cursor-pointer mb-5 text-center text-white border-2 bg-[#264A20] md:p-4 p-3 px-8 rounded-xl shadow-lg hover:bg-[#4C9540] transition-all duration-300 ease-in-out' > Join Our Telegram < img src = {
            telegram
        }
        alt = "no-img"
        className = 'w-6 ml-4 border-2 rounded-full' / > < /a> <
        a href = "https://twitter.com/pepebusd_"
        target = "_blank"
        rel = "noopener noreferrer"
        className = 'flex md:w-80 font-medium items-center justify-center cursor-pointer mb-5 text-center  md:p-4 p-3 px-8 rounded-xl border-2 text-[#264A20]  shadow-lg hover:text-white hover:bg-[#4C9540] bg-white border-[#264A20] hover:opacity-600 transition-all duration-300 ease-in-out' > Join Our Twitter < img src = {
            twitter
        }
        alt = "no-img"
        className = 'w-6 ml-4 rounded-full ' / > < /a> <
        /div> <
        /div> <
        /div> <
        div id = 'home' >
        <
        div className = 'container m-auto px-6 font-Poppins text-white' >
        <
        div className = 'felx items-center justify-center space-y-5' >
        <
        div className = "text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-10 pt-20  " >
        <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        span className = 'text-[2rem]' > About Pepe BUSD < /span> <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        /div> <
        div className = 'flex items-center justify-center' >
        <
        p className = 'flex text-[22px] text-center mx-auto font-bold' > $PEPEB is Deflationary token < /p> <
        /div> <
        p className = 'text-[20px]' > Deep inside we all love to see the MEMEs, Pepe smoky is the community of Smokers, who like the MEMEs culture, so we turned that into a meme coin
        for even more FUN ? < /p> <
        p className = 'flex text-[20px] items-center pb-10 font-bold' > PEPE SMOKY IS THE MEME COIN THAT SMOKER COMMUNITY ALWAYS DESERVED. < /p> <
        div className = 'flex items-center pb-10 md:flex-row flex-col justify-center' >
        <
        a href = "https://pancakeswap.finance/swap?outputCurrency="
        target = "_blank"
        rel = "noopener noreferrer"
        className = 'md:mr-4 flex items-center justify-center cursor-pointer mb-5 text-center border-2 border-[#fff] bg-[#264A20] text-white md:p-4 p-3 px-8 rounded-xl shadow-lg hover:bg-[#4C9540] transition-all duration-300 ease-in-out' > Buy on Pancakeswap < img src = {
            ps
        }
        alt = "no-img"
        className = 'w-5 ml-4' / > < /a> <
        a href = "https://www.dextools.io/app/en/bnb/pair-explorer/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = 'flex items-center justify-center cursor-pointer mb-5 text-center text-[#264A20] border-2  md:p-4 p-3 px-8 rounded-xl shadow-lg hover:text-white hover:bg-[#4C9540] bg-white border-[#264A20] transition-all duration-300 ease-in-out' > $pepeb Chart < /a> <
        /div> <
        div className = "bg-white rounded-xl p-4 md:px-8 " >
        <
        div className = "grid grid-cols-3 md:grid-cols-5 md:gap-8 gap-8 items-center " >
        <
        div className = "md:col-span-1 col-span-3" >
        <
        img src = {
            binance
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-full' / >
        <
        /div> <
        div className = "md:col-span-1 col-span-3" >
        <
        img src = {
            dext
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-full' / >
        <
        /div> <
        div className = "md:col-span-1 col-span-3" >
        <
        img src = {
            pankswap
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-full' / >
        <
        /div> <
        div className = "md:col-span-1 col-span-3" >
        <
        img src = {
            coin
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-full' / >
        <
        /div> <
        div className = "md:col-span-1 col-span-3" >
        <
        img src = {
            cmc
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-full' / >
        <
        /div> <
        /div> <
        /div> <
        div className = "text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-10 pt-20  " >
        <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        span className = 'text-[2rem]'
        id = 'tokenomics' > Tokenomics < /span> <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        /div> <
        p className = 'md:text-5xl text-3xl pb-10 font-Leckerli font-bold text-center' > Token Supply : 100, 000, 000 < /p> <
        div className = "bg-[#264A20] text-white rounded-xl flex items-center justify-center mb-20" >
        <
        div className = "grid md:grid-cols-2 grid-cols-1" >
        <
        div className = 'flex items-center justify-center' >
        <
        p className = "text-[20px] p-4 text-center md:text-left" > 100 % of the supply will be given out to the community, No rug as no one will be holding a larger amount not even DEVs. < br / > We believe every meme coin belongs to the community and this is why 100 % of the token supply will be given out to the community 95 % via pre - sale and 2.5 % via public airdrops & Last 2.5 %
        for Marketing. < br / > All the money that we will receive from the pre - sale will be locked in
        for 1 year in the Liquidity Pool. < /p> <
        /div> <
        div >
        <
        img src = {
            chart2
        }
        alt = "no-img"
        className = "right-0 rounded-xl w-full mx-auto" / >
        <
        /div> <
        /div> <
        /div> <
        div className = "text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-32 pt-20  " >
        <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        span className = 'text-[2rem]'
        id = 'taxes' > Tax Breakdown < /span> <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        /div> <
        div className = 'flex items-center justify-center' >
        <
        div className = "grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-36" >
        <
        div className = "md:col-span-1 col-span-3 " >
        <
        div className = 'relative bg-[#264A20] rounded-xl flex flex-col items-center justify-center p-5 md:h-[20rem] h-64' >
        <
        img src = {
            buyBinance
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'absolute mt-[-20rem] w-32 animate-bounce' / >
        <
        h2 className = 'font-bold text-3xl mb-5 ' > Liquidity < /h2> <
        p className = 'text-center text-[16px]' > 1 % auto liquidly tax on every sell transaction, liquidity is locked. < /p> <
        /div> <
        /div> <
        div className = "md:col-span-1 col-span-3 " >
        <
        div className = 'relative bg-[#264A20] rounded-xl flex flex-col items-center justify-center p-5 md:h-[20rem] h-64' >
        <
        img src = {
            moneybag
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'absolute mt-[-20rem] w-32 animate-bounce' / >
        <
        h2 className = 'font-bold text-3xl mb-5' > Marketing < /h2> <
        p className = 'text-center text-[16px]' > 1 % marketing tax on every sell transaction to help fund our project < /p> <
        /div> <
        /div> <
        div className = "md:col-span-1 col-span-3 " >
        <
        div className = 'relative bg-[#264A20] rounded-xl flex flex-col items-center justify-center p-5 md:h-[20rem] h-64' >
        <
        img src = {
            smokyP
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'absolute mt-[-20rem] w-32 animate-bounce' / >
        <
        h2 className = 'font-bold text-3xl mb-5' > Dev < /h2> <
        p className = 'text-center text-[16px]' > 1 % Dev tax on every transaction to help the devs of $Pepe BUSD < /p> <
        /div> <
        /div> <
        div className = "md:col-span-1 col-span-3 " >
        <
        div className = 'relative bg-[#264A20] rounded-xl flex flex-col items-center justify-center p-5 md:h-[20rem] h-64' >
        <
        img src = {
            fire
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'absolute mt-[-20rem] w-32 animate-bounce' / >
        <
        h2 className = 'font-bold text-3xl mb-5' > Auto Burn < /h2> <
        p id = 'roadmap'
        className = 'text-center text-[16px]' > 1 % tax auto burn on every buy transaction to decrease the circulating supply as we progress < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-20 pt-20  " >
        <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        span className = 'text-[2rem]' > Road Map < /span> <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        /div> <
        div className = "py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0 text-white" >
        <
        div className = "relative" >
        <
        div className = "hidden sm:block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2" > < /div> <
        div className = "mt-6 sm:mt-0 sm:mb-12" >
        <
        div className = "flex flex-col sm:flex-row items-center" >
        <
        div className = "flex justify-start w-full mx-auto items-center" >
        <
        div className = "w-full sm:w-1/2 sm:pr-8" >
        <
        div className = "p-4 rounded md:mb-0 mb-12" >
        <
        ol className = 'list-disc' >
        <
        li > Website Launch < /li> <
        li > Presale Listings < /li> <
        li > CoinGecko / Coinmarketcap Listings < /li> <
        /ol> <
        /div> <
        /div> <
        /div> <
        div className = "rounded-full md:mt-0 mt-[-2rem] bg-[#264A20] border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center" > 1 < /div> <
        /div> <
        /div> <
        div className = "mt-6 sm:mt-0 sm:mb-12" >
        <
        div className = "flex flex-col sm:flex-row items-center" >
        <
        div className = "flex justify-end w-full mx-auto items-center" >
        <
        div className = "w-full sm:w-1/2 sm:pl-8" >
        <
        div className = "p-4 rounded md:mb-0 mb-12" >
        <
        ol className = 'list-disc' >
        <
        li > Social Media Push < /li> <
        li > Get $PEPEB Trending on twitter with our memetic power < /li> <
        li > 1, 000 + Holders < /li> <
        li > Community Partnerships $PEPEB Times digital newsletter < /li> <
        /ol> <
        /div> <
        /div> <
        /div> <
        div className = "rounded-full md:mt-0 mt-[-2rem] bg-[#264A20] border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center" > 2 < /div> </div >
        <
        /div> <
        div className = "mt-6 sm:mt-0 sm:mb-12" >
        <
        div className = "flex flex-col sm:flex-row items-center" >
        <
        div className = "flex justify-start w-full mx-auto items-center" >
        <
        div className = "w-full sm:w-1/2 sm:pr-8" >
        <
        div className = "p-4 rounded " >
        <
        ol className = 'list-disc' >
        <
        li > $PEPEB #1 Degen coin</li>
                          <li>CEX Listings 10,000+holders</li>
                          <li>Meme Takeover</li>
                        </ol>
                          </div>
                      </div>
                    </div>
                    <div className= "rounded-full md:mt-0 mt-[-2rem] bg-[#264A20] border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center" > 3 < /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "text-[2rem] font-bold text-center flex justify-center items-center space-x-2 pb-20 pt-10  " >
        <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        span className = 'text-[2rem]'
        id = "buy" > How to buy ? < /span> <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        /div> <
        div className = 'mb-32' >
        <
        div className = "grid lg:grid-cols-2 grid-col-1 gap-6 text-center mb-20" >
        <
        div className = "col-span-1" >
        <
        div className = 'bg-[#264A20] rounded-xl flex flex-col items-center justify-center py-8 p-5 h-96 w-auto' >
        <
        img src = {
            metaMask
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-28' / >
        <
        h2 className = 'font-bold text-2xl mt-[1.5rem]' > Step 1 - Create MetaMask wallet < /h2> <
        p className = 'text-center mt-[1rem] px-4 max-w-md text-[16px]' > Create a MetaMask Wallet using either a desktop computer or an iOS / Android mobile device.That will allow you to buy, sell, send, and receive $PEPEB < /p> <
        /div> <
        /div> <
        div className = "col-span-1" >
        <
        div className = 'bg-[#264A20]  rounded-xl flex flex-col items-center justify-center py-8 p-5 h-96 w-auto' >
        <
        img src = {
            buyBinance
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-28' / >
        <
        h2 className = 'font-bold text-2xl mt-[1.5rem]' > Step 2 - Send BNB to your wallet < /h2> <
        p className = 'text-center mt-[1rem] px-4 max-w-md text-[16px]' > You can transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc.Make sure to use the BEP - 20 network when transferring BNB. < /p> <
        /div> <
        /div> <
        div className = "col-span-1" >
        <
        div className = 'bg-[#264A20]  rounded-xl flex flex-col items-center justify-center py-8 p-5 h-96 w-auto' >
        <
        img src = {
            ps
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-28' / >
        <
        h2 className = 'font-bold text-2xl mt-[1.5rem]' > Step 3 - Connect your wallet to Pancakeswap < /h2> <
        p className = 'text-center mt-[1rem] px-4 max-w-md text-[16px]' > Access your wallet to Pancakeswap by clicking‘ Connect Wallet’ and selecting MetaMask. < /p> <
        /div> <
        /div> <
        div className = "col-span-1" >
        <
        div className = 'bg-[#264A20]  rounded-xl flex flex-col items-center justify-center py-8 p-5 h-96 w-auto' >
        <
        img src = {
            smokyP
        }
        alt = "no-img"
        width = {
            500
        }
        height = {
            500
        }
        className = 'w-28' / >
        <
        h2 className = 'font-bold text-2xl mt-[1.5rem]' > Step 4 - Swap BNB
        for $pepeb < /h2> <
        p className = 'text-center mt-[1rem] px-4 max-w-md text-[16px]' > You can start swapping as soon as you have BNB available!Press‘ Select a currency’ and enter the $pepeb token address : < a href = "https://pancakeswap.finance/swap?outputCurrency="
        target = "_blank"
        rel = "noopener noreferrer"
        className = 'hover:underline' > 0x39aa9a863c....... < /a> </p >
        <
        /div> <
        /div> <
        /div> <
        div className = "text-[2rem] font-bold text-center flex justify-center items-center space-x-2 mb-10" >
        <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        span className = 'text-[2rem]' > Public Disclaimer < /span> <
        hr className = "border border-white md:w-[9rem] w-[3rem]" / >
        <
        /div> <
        p className = 'flex text-[22px]' > Pepe BUSD is a meme coin with no intrinsic value or expectation of financial
        return .There is no roadmap, no fake promises of providing a utility.The coin is made
        for the community, the community will be running it as far as they want it and
        for entertainment purposes only.Dev will Re - announce the contract. < /p> <
        /div> <
        /div> <
        /div> <
        Footer / >
        <
        />
    )
}