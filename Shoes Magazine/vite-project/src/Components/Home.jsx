import { useState } from 'react'
import { render } from 'react-dom'
import {delay, motion} from 'framer-motion'

import React from 'react'
import Vector from '../Images/Vector.svg'
import Krasovka1 from '../Images/Krasovka1.png'
import Krasovka2 from '../Images/Ellipse 10.png'
import Krasovka3 from '../Images/Ellipse 11.png'
import Krasovka4 from '../Images/Ellipse 12.png'
import Qizil from '../Images/QizilKrasovka-removebg-preview.png'
import Qora from '../Images/11-30-removebg-preview.png'


function Home() {
  const [ignor, setIgnor] = useState(Krasovka1)
  const [rotate, setRotate] = useState(false);
  const [animate, setAnimate] = useState(false);

  const FirstChange = () => {
    setTimeout(() => {
      setIgnor(Krasovka1)
      setAnimate(!animate)
    }, 850);
    setRotate(!rotate)
  }
  const SecondChange = () => {
    setTimeout(() => {
      setIgnor(Qizil)
      setAnimate(!animate)
    }, 850);
    setRotate(!rotate)
  }
  const ThirdChange = () => {
    setTimeout(() => {
      setIgnor(Qora)
      setAnimate(!animate)
    }, 850);
    setRotate(!rotate)
  }
  return (
    
    <>

<motion.div  className='nmadir'
animate={{scale:1,   rotate : rotate ? 720: 0}}
transition={{
  ease: "linear",
  duration: 0.7,
  x: { duration: 0.5 }
}}


>
      <img src={Vector} alt="" className='Vector'/>
      <div className='Group36'>
        <p className='Home'>Home</p>
        <p className='Product'>Product</p>
        <p className='About'>About</p>
        <p className='Review'>Review</p>
      </div>
      <button className='button1' style={{backgroundColor: ignor == Qizil ? "red": ignor == Qora ?  "black": "#5CBE3A"}}>Shop now</button>
      <h1 className='bring' style={{color: ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}}>BRING POWER TO YOUR STEPS.</h1>
      <svg className="redVC" xmlns="http://www.w3.org/2000/svg" width="51" height="18" viewBox="0 0 51 18" fill="none">
<path d="M28.6036 5.96097L25.4862 6.74806L16.8365 8.92538C13.7818 9.65216 11.1097 10.6202 8.53487 9.77278C5.03484 8.31923 5.09756 4.53756 7.70691 0.514648C3.09351 4.17568 -5.2081 15.8826 6.01961 17.0647C7.44974 17.2456 9.99636 16.7631 12.7625 15.6443L25.4862 10.6232L50.5823 0.755903L28.6036 5.96097Z" fill={ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}/>
</svg>
      <h1 className='Walk'>Walk the line.</h1>
      <h4 className='H4_1'>Now that you have a ready strategy to move forward, it's time to come up with some ideas.</h4>
      <h4 className='H4_2'>Now that you have a <span style={{color: ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}} className='span1'><b>ready strategy</b></span> to move forward, </h4>
      <h1 style={{color: ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}} className='H4_3'><strong>Price : $125    <span className='cheg'>$169</span> </strong></h1>
      <button style={{backgroundColor: ignor == Qizil ? "red": ignor == Qora ?  "black": "#5CBE3A"}} className='btn2'>Shop now</button>
      <button className='btn3'>Learn more</button>
      <p style={{color: ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}} className='k1'>70k</p>
      <p style={{color: ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}} className='k3'>CUSTOMERS</p>
      <p style={{color: ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}} className='k2'>17k</p>
      <p style={{color: ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}} className='k4'>REVIEW</p>
      <img src={ignor} className={ignor == Qizil ? "krasovkaa2" : ignor == Qora ? "krasovkaa3": "krasovka1"} alt="" />
      <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="111" viewBox="0 0 40 111" fill="none">
<path d="M23.3504 0.466013C24.1517 0.255642 24.9718 0.734662 25.1822 1.53593L28.6103 14.5934C28.8207 15.3947 28.3417 16.2148 27.5404 16.4251C26.7392 16.6355 25.9191 16.1565 25.7087 15.3552L22.6614 3.74858L11.0548 6.79585C10.2535 7.00622 9.4334 6.5272 9.22303 5.72593C9.01267 4.92466 9.49168 4.10456 10.293 3.89419L23.3504 0.466013ZM38.9082 110.947C19.9682 109.22 9.19396 101.427 4.00273 90.4385C-1.1194 79.5964 -0.640858 65.971 2.10385 52.8422C4.85756 39.6703 9.94622 26.7491 14.3285 17.1457C16.5223 12.338 18.5453 8.34863 20.0211 5.55879C20.7591 4.16364 21.3606 3.06783 21.7787 2.31901C21.9877 1.94457 22.151 1.65684 22.2625 1.46175C22.3182 1.3642 22.3611 1.28981 22.3903 1.23932C22.4048 1.21408 22.416 1.19481 22.4237 1.18161C22.4275 1.17501 22.4305 1.16992 22.4326 1.16636C22.4336 1.16458 22.4345 1.16306 22.435 1.16218C22.4357 1.16105 22.4361 1.1603 23.7313 1.91684C25.0266 2.67339 25.0266 2.67341 25.0263 2.67381C25.0259 2.67446 25.0255 2.67524 25.0247 2.67652C25.0232 2.67909 25.0209 2.68319 25.0176 2.6888C25.0111 2.70001 25.0011 2.71727 24.9877 2.74049C24.9608 2.78693 24.9204 2.85719 24.867 2.95052C24.7603 3.1372 24.602 3.41615 24.3981 3.78146C23.9902 4.51212 23.3995 5.58798 22.6729 6.96158C21.2194 9.70924 19.2232 13.6456 17.0577 18.3912C12.7213 27.8942 7.7303 40.5892 5.04036 53.4561C2.3414 66.3661 2.01225 79.2021 6.71525 89.157C11.3492 98.9656 21.0329 106.305 39.1806 107.959L38.9082 110.947Z" fill={ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}/>
</svg>
      <svg className='Star' xmlns="http://www.w3.org/2000/svg" width="170" height="168" viewBox="0 0 170 168" fill="none">
<path d="M81.0403 2.04313C83.0106 -0.0250812 86.3102 -0.0250787 88.2806 2.04313L106.126 20.7751C107.204 21.9067 108.749 22.4691 110.303 22.2952L136.014 19.4166C138.853 19.0988 141.38 21.2197 141.56 24.0706L143.19 49.891C143.288 51.4508 144.111 52.8749 145.412 53.74L166.958 68.0617C169.337 69.643 169.91 72.8925 168.216 75.192L152.867 96.0192C151.94 97.2774 151.654 98.8968 152.095 100.396L159.395 125.217C160.201 127.957 158.551 130.815 155.775 131.487L130.63 137.576C129.111 137.944 127.851 139.001 127.225 140.433L116.862 164.139C115.718 166.756 112.618 167.884 110.059 166.615L86.8827 155.116C85.4826 154.422 83.8382 154.422 82.4382 155.116L59.2621 166.615C56.7033 167.884 53.6026 166.756 52.4585 164.139L42.0959 140.433C41.4698 139.001 40.2102 137.944 38.6912 137.576L13.546 131.487C10.7697 130.815 9.11993 127.957 9.92589 125.217L17.2255 100.396C17.6664 98.8968 17.3809 97.2774 16.4537 96.0192L1.10515 75.192C-0.589494 72.8925 -0.0165195 69.643 2.36242 68.0617L23.9086 53.74C25.2103 52.8749 26.0324 51.4508 26.1309 49.891L27.7607 24.0706C27.9407 21.2197 30.4683 19.0988 33.3071 19.4166L59.0183 22.2952C60.5715 22.4691 62.1167 21.9067 63.1947 20.7751L81.0403 2.04313Z" fill={ignor == Qizil ? "red" : ignor == Qora ? "black" : "#5CBE3A"}/>
</svg>
      <p className='off'>25%</p>
      <p className='sale'>OFF</p>
      <div className='posledniy'>
        <div className='perviy'>
          <img src={Krasovka2} className='odin' alt="" onClick={FirstChange}/>
        </div>
        <div className='vtoroy'>
          <img src={Krasovka3} className='dva' alt="" onClick={SecondChange}/>
        </div>
        <div className='tretiy'>
          <img src={Krasovka4} className='tri' alt="" onClick={ThirdChange}/>
        </div>
      </div>

    </motion.div>
    </>
  )
}

export default Home
