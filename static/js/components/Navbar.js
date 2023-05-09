import React from 'react'
export default function Navbar() {
    return ( <
        >
        <
        nav className = ' bg-[#3A963D]  shadow-xl z-[1] top-0 font-Poppins text-[18px] text-white mb-20' >
        <
        div className = 'conatiner m-auto ' >
        <
        div className = 'flex items-center justify-around' >
        <
        div >
        <
        ul className = 'flex items-center space-x-4' >
        <
        li className = 'lg:block py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out' > < a href = "#home" > About < /a></li >
        <
        li className = 'lg:block hidden py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out' > < a href = "#tokenomics" > Tokenomics < /a></li >
        <
        li className = 'lg:block hidden py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out' > < a href = "#taxes" > Taxes < /a></li >
        <
        li className = 'lg:block hidden py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out' > < a href = "#roadmap" > Roadmap < /a></li >
        <
        li className = 'lg:block hidden py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out' > < a href = "#buy" > How to buy ? < /a></li >
        <
        /ul> <
        /div> <
        div > < a href = "https://pancakeswap.finance/swap?outputCurrency="
        target = "_blank"
        rel = "noopener noreferrer"
        className = 'cursor-pointer flex items-center justify-center border border-white bg-[#264A20] text-white md:p-4 p-3 rounded-xl drop-shadow-xl hover:bg-[#4F9843] transition-all duration-300 ease-in-out hover:border hover:border-black hover:text-black' > $pepeb < svg xmlns = "http://www.w3.org/2000/svg "
        width = "16"
        height = "16"
        fill = "currentColor"
        className = "bi bi-cart w-4 h-4 md:w-6 md:h-6 ml-1"
        viewBox = "0 0 16 16" > < path d = "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" / > < /svg></a > < /div> <
        /div> <
        /div> <
        /nav> <
        />
    )
}