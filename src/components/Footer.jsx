import { FacebookLogo, InstagramLogo, TwitchLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import React from 'react'

const Footer = () => {
  return (
    
<footer class="bg-gray-950 text-white text-xl flex justify-center p-5 dark:bg-gray-900">
    <div className='flex gap-20 sm:flex-col sm:gap-5 sm:justify-center sm:items-center'>
    <div>
            <h2 class="mb-6 font-semibold  uppercase dark:text-white">Download</h2>
            <ul class="text-gray-500 dark:text-gray-400  ">
                <li class="mb-4">
                    <a href="/" class="hover:underline">Home</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Movie</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">TV Shows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Network</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 font-semibold  uppercase dark:text-white">Download</h2>
            <ul class="text-gray-500 dark:text-gray-400  ">
                <li class="mb-4">
                    <a href="/" class="hover:underline">Home</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Movie</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">TV Shows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Network</a>
                </li>
            </ul>
        </div>  
        <div className=''>
            <span className='text-4xl font-extrabold'>Connect With Us</span>  
            <div className='flex gap-5 mt-4 ml-10'>
                <a className='' href="#"><FacebookLogo size={50} color="#e6e6ea" weight="fill" /></a> 
                <a className='' href="#"><InstagramLogo size={50} color="#e6e6ea" weight="fill" /></a> 
                <a className='' href="#"><TwitterLogo size={50} color="#e6e6ea" weight="fill" /></a> 
                <a className='' href="#"><YoutubeLogo size={50} color="#e6e6ea" weight="fill" /></a> 
            </div>    
        </div> 
        <div>
            <span className='text-4xl font-extrabold'>Download Our App</span>  
            <div className='flex gap-2 sm:flex-col justify-center items-center mt-4'>
                <img className='w-[200px] h-[70px]' src="https://th.bing.com/th/id/OIP.tyafX8l5LiySmMs7o4gvQQHaCj?pid=ImgDet&rs=1" alt="googleplay" />
                <img className='w-[200px] h-[70px]' src="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png" alt="apppleplay" />

            </div>
        </div>
    </div>
        
</footer>

  )
}

export default Footer