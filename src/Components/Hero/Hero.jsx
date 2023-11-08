import React from 'react'
import backgroundImg from "../../assets/Image/backgroundBG.png"
import rightSideImg from "../../assets/Image/image3.png"
import Container from '../Hooks/Container'
import { heroButton, heroDescription, subTitle } from '../../../public/allData'
const Hero = () => {
  return (
    <div className='h-[872px] w-full bg-[#000000] z-50' style={{backgroundImage : `url(${backgroundImg})`}}>
        <Container>
            <div className='flex flex-col md:flex-row justify-between items-center pt-24'>
                <div className=' lg:w-2/3 w-full'>
                    <h3 className='text-[21px] tracking-widest  text-primaryClr mb-3'>{subTitle}</h3>   
                    <h1 className='text-[30px] md:text-[40px] text-whiteClr lg:text-[80px] font-bold  leading-[35px] lg:leading-[80px] md:leading-[60px]'>WE ARE <span className='text-primaryClr'>CREATIVE</span> DESIGN AGENCY</h1> 
                    <div className='border-2 rounded lg:my-8 my-6 border-primaryClr w-[180px]'></div>
                    <p className='text-[21px] text-whiteClr tracking-wide mt-2 font-light lg:w-[600px] w-full'>{heroDescription}</p>
                    <button className='border-4 border-primaryClr rounded-sm py-2 px-5 mt-6 text-whiteClr'>{heroButton}</button>
                </div>
                <div className='w-1/3 pt-48'>
                    <img className='w-full h-full' src={rightSideImg} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero