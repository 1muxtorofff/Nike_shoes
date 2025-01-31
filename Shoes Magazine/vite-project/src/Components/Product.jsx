import React from 'react'
import Kok from "../Images/kok_chiziqli.jpg"
import Oq from "../Images/oq_krasovka.jpg"
import Seriy from "../Images/seriy_karasovka.jpg"
import {delay, motion} from 'framer-motion'
export default function Product() {
  return (
    <motion.div animate={{x:10}} initial={{x:1000}} transition={{
        ease: "linear",
        duration: 0.7,
        x: { duration: 0.5 }
      }} className='cont'>
        <center>
        <h1 className='title_text'>Our Latest Product</h1>
        <p className='p_text'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
        <div className='imges'>
            <div className='div_img'>
                <div className='first_img'>
                    <img className='IMG' src={Kok} alt="" />
                </div>
                <p className='text_p'>Aliquam lobortis</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="27" viewBox="0 0 155 27" fill="none">
                    <path d="M13.5771 0.046875L16.5296 9.13387L26.0843 9.13387L18.3544 14.7499L21.3069 23.8369L13.5771 18.2209L5.84723 23.8369L8.79977 14.7499L1.06992 9.13387L10.6245 9.13387L13.5771 0.046875Z" fill="#F1E809"/>
                    <path d="M45.4604 0.046875L48.4129 9.13387L57.9676 9.13387L50.2377 14.7499L53.1902 23.8369L45.4604 18.2209L37.7305 23.8369L40.6831 14.7499L32.9532 9.13387L42.5078 9.13387L45.4604 0.046875Z" fill="#F1E809"/>
                    <path d="M77.3437 0.046875L80.2962 9.13387L89.8509 9.13387L82.121 14.7499L85.0735 23.8369L77.3437 18.2209L69.6138 23.8369L72.5664 14.7499L64.8365 9.13387L74.3911 9.13387L77.3437 0.046875Z" fill="#F1E809"/>
                    <path d="M109.227 0.046875L112.18 9.13387L121.734 9.13387L114.004 14.7499L116.957 23.8369L109.227 18.2209L101.497 23.8369L104.45 14.7499L96.7198 9.13387L106.274 9.13387L109.227 0.046875Z" fill="#F1E809"/>
                    <path d="M141.11 0.046875L144.063 9.13387L153.617 9.13387L145.888 14.7499L148.84 23.8369L141.11 18.2209L133.38 23.8369L136.333 14.7499L128.603 9.13387L138.158 9.13387L141.11 0.046875Z" fill="#EDEBB9"/>
                </svg>
                <p className='price_p'>$75.00 – $85.00</p>
                <button>Shop now</button>
            </div>
            <div className='div_img'>
                <div className='second_img'>
                    <img className='IMG' src={Oq} alt="" />
                </div>
                <p className='text_p'>FUSCE ALIQUAM</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="27" viewBox="0 0 155 27" fill="none">
                <path d="M13.5771 0.046875L16.5296 9.13387L26.0843 9.13387L18.3544 14.7499L21.3069 23.8369L13.5771 18.2209L5.84723 23.8369L8.79977 14.7499L1.06992 9.13387L10.6245 9.13387L13.5771 0.046875Z" fill="#F1E809"/>
                <path d="M45.4604 0.046875L48.4129 9.13387L57.9676 9.13387L50.2377 14.7499L53.1902 23.8369L45.4604 18.2209L37.7305 23.8369L40.6831 14.7499L32.9532 9.13387L42.5078 9.13387L45.4604 0.046875Z" fill="#F1E809"/>
                <path d="M77.3437 0.046875L80.2962 9.13387L89.8509 9.13387L82.121 14.7499L85.0735 23.8369L77.3437 18.2209L69.6138 23.8369L72.5664 14.7499L64.8365 9.13387L74.3911 9.13387L77.3437 0.046875Z" fill="#F1E809"/>
                <path d="M109.227 0.046875L112.18 9.13387L121.734 9.13387L114.004 14.7499L116.957 23.8369L109.227 18.2209L101.497 23.8369L104.45 14.7499L96.7198 9.13387L106.274 9.13387L109.227 0.046875Z" fill="#F1E809"/>
                <path d="M141.11 0.046875L144.063 9.13387L153.617 9.13387L145.888 14.7499L148.84 23.8369L141.11 18.2209L133.38 23.8369L136.333 14.7499L128.603 9.13387L138.158 9.13387L141.11 0.046875Z" fill="#EDEBB9"/>
                </svg>
                <p className='price_p'>$65.00 – $75.00</p>
                <button>Shop now</button>
            </div>
            <div className='div_img'>
                <div className='third_img'> 
                    <img className='IMG' src={Seriy} alt="" />
                </div>
                <p className='text_p'>AIR SUPERIORITY</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="27" viewBox="0 0 155 27" fill="none">
                    <path d="M13.5771 0.046875L16.5296 9.13387L26.0843 9.13387L18.3544 14.7499L21.3069 23.8369L13.5771 18.2209L5.84723 23.8369L8.79977 14.7499L1.06992 9.13387L10.6245 9.13387L13.5771 0.046875Z" fill="#F1E809"/>
                    <path d="M45.4604 0.046875L48.4129 9.13387L57.9676 9.13387L50.2377 14.7499L53.1902 23.8369L45.4604 18.2209L37.7305 23.8369L40.6831 14.7499L32.9532 9.13387L42.5078 9.13387L45.4604 0.046875Z" fill="#F1E809"/>
                    <path d="M77.3437 0.046875L80.2962 9.13387L89.8509 9.13387L82.121 14.7499L85.0735 23.8369L77.3437 18.2209L69.6138 23.8369L72.5664 14.7499L64.8365 9.13387L74.3911 9.13387L77.3437 0.046875Z" fill="#F1E809"/>
                    <path d="M109.227 0.046875L112.18 9.13387L121.734 9.13387L114.004 14.7499L116.957 23.8369L109.227 18.2209L101.497 23.8369L104.45 14.7499L96.7198 9.13387L106.274 9.13387L109.227 0.046875Z" fill="#F1E809"/>
                    <path d="M141.11 0.046875L144.063 9.13387L153.617 9.13387L145.888 14.7499L148.84 23.8369L141.11 18.2209L133.38 23.8369L136.333 14.7499L128.603 9.13387L138.158 9.13387L141.11 0.046875Z" fill="#EDEBB9"/>
                </svg>
                <p className='price_p'>$35.00 – $45.00</p>
                <button>Shop now</button>
            </div>
        </div>
        </center>
    </motion.div>
  )
}
