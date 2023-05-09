import React from 'react'
import smokyP from '../assets/logo/smokyP.png'
import tg from '../assets/icons/telegram-svgrepo-com.svg'
import tw from '../assets/icons/twitter-circle-blue-logo-16617.svg'
export default function Footer() {
    return ( <
        >
        <
        div className = " text-white bg-[#3A963D] md:felx-row flex-col items-center justify-between pb-6" >
        <
        hr class = "my-6 border-white lg:my-8" / >

        <
        div className = 'flex items-center justify-around md:flex-row  flex-col md:space-y-0 space-y-5 mb-5' >
        <
        span className = 'flex flex-row flex-wrap items-center justify-center' > < img src = {
            smokyP
        }
        alt = ""
        className = 'w-20 mr-5' / > < p className = 'font-bold text-[24px]' > Pepe Smoky < /p></span >
        <
        p className = 'font-bold text-[16px]' > Follow
        for more <
        ul className = "flex items-center justify-center space-x-2" >
        <
        li >
        <
        a href = "https://twitter.com/pepebusd_"
        target = "_blank"
        rel = "noopener noreferrer" > < img src = {
            tw
        }
        alt = ""
        className = 'w-6' / > < /a> <
        /li> <
        li >
        <
        a href = "https://t.me/pepebusdbsc.netlify.app"
        target = "_blank"
        rel = "noopener noreferrer" > < img src = {
            tg
        }
        alt = ""
        className = 'w-6' / > < /a> <
        /li> <
        /ul> <
        /p> <
        /div> <
        span className = "block text-center text-sm " > ©2023 < a href = "#0"
        className = "hover:underline" > Pepe BUSD < /a>. All Rights Reserved.</span >
        <
        /div> <
        />
    )
}