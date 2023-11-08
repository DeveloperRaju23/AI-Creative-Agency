import React from "react";
import Container from "../Hooks/Container";
import logo from "../../assets/Image/LOGO.png";
import search from "../../assets/Image/search.png";
const Header = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "#" },
    { title: "Services", href: "#" },
    { title: "Portfolio", href: "#" },
    { title: "Pages", href: "#" },
    { title: "Contact Us", href: "#" },
  ];
  return (
    <div className="bg-blackClr">
      <Container>
        <div className="flex justify-between items-center">
          <img src={logo} alt="" />
          <ul className="hidden md:flex items-center lg:space-x-5 md:space-x-[12px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-lg hover:text-primaryClr transition duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
             <img className="lg:ps-5 ps-4" src={search} alt="" />
          </ul>
         
        </div>
      </Container>
    </div>
  );
};

export default Header;
