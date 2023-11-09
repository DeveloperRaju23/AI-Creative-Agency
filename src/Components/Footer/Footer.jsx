import React from 'react'
import logo from "../../assets/Image/LOGO.png"
import footerImg from "../../assets/Image/Ellipse 2.png"
import icon1 from "../../assets/Image/Vector (9).png"
import icon2 from "../../assets/Image/Vector (8).png"
import icon3 from "../../assets/Image/Vector (7).png"
import icon4 from "../../assets/Image/Vector (4).png"
import icon5 from "../../assets/Image/Vector (5).png"
import icon6 from "../../assets/Image/Vector (6).png"
import FadeIn from '../Motion/FadeIn'
const Footer = () => {
    const navLinks = [
        { title: "Home", href: "/" },
        { title: "About Us", href: "#" },
        { title: "Services", href: "#" },
        { title: "Portfolio", href: "#" },
        { title: "Pages", href: "#" },
        { title: "Contact Us", href: "#" },
      ];
  return (
    <div className='bg-blackClr pb-8'>
            <div className='md:w-[700px] w-full mx-auto'>
               <div className='flex justify-center'>
               <FadeIn delay={0.2} direction="up">
                <img className='mx-auto' src={logo} alt="" />
                </FadeIn>
               </div>
             
            <ul className="flex items-center justify-center flex-wrap pt-2 gap-2 lg:space-x-5 md:space-x-[12px]">
            {navLinks.map((link, index) => (
                 <FadeIn key={index} delay={(index + 1) * 0.2} direction="up">
                      <li>
                <a
                  href={link.href}
                  className=" text-lg text-primaryClr transition duration-300"
                >
                  {link.title}
                </a>
              </li>
                 </FadeIn>
            
            ))}
             
          </ul>
          <FadeIn delay={0.2} direction="up">
          <p className='text-[#ccc] text-center text-lg tracking-wider lg:px-20 md:px-8 px-4 py-3'>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque   </p>
          </FadeIn>

        
         
            <div className='flex justify-center items-center '>
            <FadeIn delay={0.3} direction="up">
            <div className='flex justify-center items-center gap-5 pb-24'>
            <img  src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
            <img src={icon5} alt="" />
            <img src={icon6} alt="" />
            </div>
            </FadeIn>
            </div>
         
        <div  className=' flex flex-wrap justify-center text-center items-center'>
        <FadeIn delay={0.4} direction="up">
          
          <p  className='text-whiteClr tracking-wider text-lg'>Copyright ©2023 <span className='text-primaryClr font-bold'> -- Raju Halder --</span> All rights reserved.</p>
        
          </FadeIn>
        </div>
         
            </div>
    </div>
  )
}

export default Footer