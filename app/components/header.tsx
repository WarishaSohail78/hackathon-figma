import Link from "next/link";
import Image from "next/image";
import logo from "@/app/components/Images/logo.jpeg";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
    return (
        <header className="w-[1286px] h-[41px]  bg-[#FFFFFF] flex">
      <div className=" container w-[1440px] h-[100px] mx-auto flex items-center justify-between px-4">
                <div className="w-[1286px] h-[41px] flex">
{ /* Logo section */ }
              <div className="logo flex items-center">
          <Image src={logo} alt="Logo"
            width={185}
            height={41}
          ></Image>
        </div>
{/* links section */}
         <div className="links-parent lg:flex space-x-8"> 
            <ul className="links">
                <li className="link w-[48px]"><Link href="#home">Home</Link></li>
                <li className="link w-[42px]"><Link href="#shop">Shop</Link></li>
                <li className="link w-[49px]"><Link href="#blog">Blog</Link></li>
                <li className="link w-[66px]"><Link href="#contact">Contact</Link></li>
            </ul>
            </div>
{/* icons section */}
        <div className="Icons-Div flex items-center space-x-6">
        <i className="bi bi-person-exclamation"></i>
        <i className="bi bi-search"></i>
        <i className="bi bi-heart"></i>
        <i className="bi bi-cart3"></i>
        </div>
      </div>
      </div>

 </header>
    );
}
       