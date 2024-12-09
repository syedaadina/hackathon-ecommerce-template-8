import Image from "next/image";
import Link from "next/link";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex flex-col text-white">
      {/* First Section */}
      <div className="flex justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 bg-[#272343] text-slate-300 py-2 text-xs sm:text-sm">
        <div>
          <h1>✔ Free Shipping On All Orders $50+</h1>
        </div>
        <div>
          <ul className="flex gap-6">
            <li className="flex">
              Eng <RiArrowDropDownLine className="text-2xl ml-1" />
              </li>
            <Link href={"./Faq"}>Faqs</Link>
            <li className="flex"><AiOutlineExclamationCircle className="text-xl" />Need Help</li>
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 bg-slate-50 text-black py-2 flex-wrap">
        <div className="flex items-center gap-4">
        <Image src="/Logo.png" alt="logo" width={50} height={50} className="text-emerald-500 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
            Comforty
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-6 text-xs sm:text-sm">
            <li>
           <Link href={"./Card"}>  <IoCartOutline className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" /></Link> 
            </li>
            <li>Cart</li>
            <li>
              <span className="rounded-full text-white bg-emerald-600 px-2 py-1 text-xs">
                2
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-12 sm:px-16 md:px-28 lg:px-40 py-4 gap-3">
        <ul className="flex gap-6 text-xs sm:text-sm md:text-base text-black">
          <Link href={"/"}>Home    </Link>
          <Link href={"./Card"}>Shop    </Link>
          <Link href={"./Product"}>Product </Link>
          <Link href={""}>Pages   </Link>
          <Link href={"./About"}>About   </Link>  
          <Link href={"./Contact"}>Contact  </Link>    
        </ul>
        <h1 className="text-xs sm:text-sm md:text-base text-black">
          Contact: (123) 456-7890
        </h1>
      </div>
    </div>
  );
}
