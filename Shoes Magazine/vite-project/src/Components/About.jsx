import React from 'react'
import Vid_rasm from "../Images/video_krasovka.jpg"
import Kacok from "../Images/kachok_brat.jpg"

export default function About() {
  return (
    <>
        <div className='d'>
        <h1 className='view_text'>View</h1>
        <div className='div_text'>
            <h1 className='about_text'>Telling your story with videos</h1>
            <p className='smal_text'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
        </div>
        <div className='cont_first'>
            <div className='sont_second'>
            <button className='btn_click'>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                    <path d="M27.7939 15.2502C28.4606 15.6351 28.4606 16.5973 27.7939 16.9822L2.35185 31.6712C1.68518 32.0561 0.851847 31.575 0.851847 30.8052L0.851848 1.42718C0.851848 0.65738 1.68518 0.176255 2.35185 0.561156L27.7939 15.2502Z" fill="white"/>
                </svg>
            </button>
            <img className='video_rasm' src={Vid_rasm} alt=""  />
            </div>
        </div>
    </div>

    <div className='people_cont'>
        <div className='rasm_cont'>
            <div className="Kachok_div">
                <img className="Kachok_img" src={Kacok} alt="" />
            </div>
        </div>
        <div className='texts_cont'>
        <svg xmlns="http://www.w3.org/2000/svg" width="727" height="472" viewBox="0 0 767 472" fill="none">
            <path d="M433.295 183.693L386.3 210.512L255.876 284.814C209.625 310.343 170.67 338.279 125.087 335.176C61.7628 325.87 45.6917 261.823 69.826 182.643C11.559 264.428 -70.1587 497.925 117.25 469.076C141.258 465.913 180.374 446.711 220.174 415.824L403.811 275.863L766.178 0.416545L433.295 183.693Z" fill="#EFFFEA"/>
        </svg>
            <div className='texts'>
            <h1 className="h1_text">The best shoes for the best people.</h1>
            <p className='p_smal_text'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
<path d="M17.9749 8.23615L16.1145 9.29783L10.9514 12.2392C9.12045 13.2499 7.57831 14.3557 5.77382 14.2329C3.267 13.8645 2.63079 11.3291 3.5862 8.19457C1.27957 11.4322 -1.95539 20.6757 5.46358 19.5336C6.414 19.4084 7.96246 18.6483 9.53803 17.4255L16.8077 11.8849L31.1528 0.98075L17.9749 8.23615Z" fill="black"/>
</svg> Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
            <p className='p_smal_text'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
<path d="M17.9749 8.23615L16.1145 9.29783L10.9514 12.2392C9.12045 13.2499 7.57831 14.3557 5.77382 14.2329C3.267 13.8645 2.63079 11.3291 3.5862 8.19457C1.27957 11.4322 -1.95539 20.6757 5.46358 19.5336C6.414 19.4084 7.96246 18.6483 9.53803 17.4255L16.8077 11.8849L31.1528 0.98075L17.9749 8.23615Z" fill="black"/>
</svg> Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
            <p className='p_smal_text'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
<path d="M17.9749 8.23615L16.1145 9.29783L10.9514 12.2392C9.12045 13.2499 7.57831 14.3557 5.77382 14.2329C3.267 13.8645 2.63079 11.3291 3.5862 8.19457C1.27957 11.4322 -1.95539 20.6757 5.46358 19.5336C6.414 19.4084 7.96246 18.6483 9.53803 17.4255L16.8077 11.8849L31.1528 0.98075L17.9749 8.23615Z" fill="black"/>
</svg> Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
            <p className='p_smal_text'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
<path d="M17.9749 8.23615L16.1145 9.29783L10.9514 12.2392C9.12045 13.2499 7.57831 14.3557 5.77382 14.2329C3.267 13.8645 2.63079 11.3291 3.5862 8.19457C1.27957 11.4322 -1.95539 20.6757 5.46358 19.5336C6.414 19.4084 7.96246 18.6483 9.53803 17.4255L16.8077 11.8849L31.1528 0.98075L17.9749 8.23615Z" fill="black"/>
</svg> Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
            </div>
        </div>
    </div>
    </>
  )
}
