import React from 'react'
import Blatnoy from "../Images/blatnoy_brat.svg"

export default function Review() {
  return (
    <div>
        <div className='review_cont'>
            <div className='left_cont'>
                <div className='arrow_cont'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="23" viewBox="0 0 35 23" fill="none">
                        <path d="M1.28318 10.5272C0.697392 11.113 0.697392 12.0628 1.28318 12.6486L10.8291 22.1945C11.4149 22.7803 12.3647 22.7803 12.9504 22.1945C13.5362 21.6087 13.5362 20.659 12.9504 20.0732L4.46516 11.5879L12.9504 3.10261C13.5362 2.51682 13.5362 1.56708 12.9504 0.981289C12.3647 0.395502 11.4149 0.395502 10.8291 0.981289L1.28318 10.5272ZM34.8438 10.0879L2.34384 10.0879V13.0879L34.8438 13.0879V10.0879Z" fill="#5CBE3A"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="23" viewBox="0 0 35 23" fill="none">
                        <path d="M34.4043 10.5272C34.9901 11.113 34.9901 12.0628 34.4043 12.6486L24.8584 22.1945C24.2726 22.7803 23.3228 22.7803 22.7371 22.1945C22.1513 21.6087 22.1513 20.659 22.7371 20.0732L31.2223 11.5879L22.7371 3.10261C22.1513 2.51682 22.1513 1.56708 22.7371 0.981289C23.3228 0.395502 24.2726 0.395502 24.8584 0.981289L34.4043 10.5272ZM0.84375 10.0879L33.3437 10.0879V13.0879L0.84375 13.0879L0.84375 10.0879Z" fill="#5CBE3A"/>
                    </svg>
                </div>
                <button className='btn_left_cont'>More Reciew</button><br />
                <div className="svg_cr">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle opacity="0.3" cx="13.0189" cy="12.7621" r="12.3246" fill="#5CBE3A"/>
                    </svg>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                        <circle cx="12.3437" cy="12.7621" r="12.3246" fill="#5CBE3A"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle opacity="0.3" cx="13.0189" cy="12.7621" r="12.3246" fill="#5CBE3A"/>
                    </svg>  
                </div>
            </div>
            <div className='middle_cont'>
                <h1 className='text_top'>Greatest Reviews</h1>
                <div className='data'>
                    <img src={Blatnoy} alt="" />
                    <div className='data_text'>
                        <h2 className='name1'>Shahriar Sohag</h2>
                        <p className='data_p'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="21" viewBox="0 0 119 21" fill="none">
                            <path d="M10.4937 0.103516L12.7626 7.08657L20.105 7.08657L14.1649 11.4023L16.4338 18.3854L10.4937 14.0696L4.55353 18.3854L6.82246 11.4023L0.882317 7.08657L8.22474 7.08657L10.4937 0.103516Z" fill="#F1E809"/>
                            <path d="M34.9951 0.103516L37.2641 7.08657L44.6065 7.08657L38.6663 11.4023L40.9353 18.3854L34.9951 14.0696L29.055 18.3854L31.3239 11.4023L25.3838 7.08657L32.7262 7.08657L34.9951 0.103516Z" fill="#F1E809"/>
                            <path d="M59.4961 0.103516L61.765 7.08657L69.1075 7.08657L63.1673 11.4023L65.4363 18.3854L59.4961 14.0696L53.556 18.3854L55.8249 11.4023L49.8848 7.08657L57.2272 7.08657L59.4961 0.103516Z" fill="#F1E809"/>
                            <path d="M83.9976 0.103516L86.2665 7.08657L93.6089 7.08657L87.6688 11.4023L89.9377 18.3854L83.9976 14.0696L78.0574 18.3854L80.3264 11.4023L74.3862 7.08657L81.7286 7.08657L83.9976 0.103516Z" fill="#F1E809"/>
                            <path d="M108.499 0.103516L110.768 7.08657L118.11 7.08657L112.17 11.4023L114.439 18.3854L108.499 14.0696L102.559 18.3854L104.828 11.4023L98.8877 7.08657L106.23 7.08657L108.499 0.103516Z" fill="#EDEBB9"/>
                        </svg> <p className='name2'>UI Designer</p>
                    <div className='hr_div'></div>
                    </div>
                </div>
            </div>
            <div className='right_div'></div>
            <h1 className='twenty'>2023</h1>
        </div>

        <center>
        <div className='last_div'>
            <h1 className='last_text'>Get Started Now</h1>
            <p className='last_smal_text'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
            <button className='last_btn'>SUBESCRIBE</button>
        </div>
        </center>
    </div>
  )
}
