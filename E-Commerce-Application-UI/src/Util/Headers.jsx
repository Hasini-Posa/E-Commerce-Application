import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiUserCircle } from "react-icons/pi";
import { PiGift } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { SiAmazonecs } from "react-icons/si";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Headers = () => {
  let [isOpen,setIsOpen]=useState(false)
  return (
    <>
    <div className='h-20 w-full flex items-center justify-center '>
      
        <div className='  h-16 w-4/5  border-solid bg-white flex items-center justify-evenly'>
          <div className='  w-fit'>
            
            <img  className=' ml-20 h-10' src="/src/Images/Flip_Logo.jpg" alt="" title='FlipKart'/>

          </div>
          <div className='w-4/5'> 
          <input   title='Search for Products, Brands and more' className='  font-medium h-10 w-full p-1 bg-sky-50 rounded-xl outline-none border-white' type="<CiSearch />"  placeholder=' Search for Products, Brands and More ' />
          </div>
        </div>
        <div className=' h-16 w-2/5  bg-white flex items-center justify-around'>

               
        <div className="relative"  onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
      <span
        className="cursor-pointer   flex items-center justify-center text-lg hover:text-white hover:bg-blue-500 p-3 hover:rounded-xl"
      >
       <PiUserCircle/> Login
      </span>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-md p-4 ">
          <ul>
            <li className="mb-2">
              <Link className='flex items-center justify-between border-solid border-b-2 p-2' title='Sign Up'>
              <div>New Customer?</div>
              <div>
                <Link  to={"/register"} className='text-blue-500 font-bold' title='Sign Up'>Sign Up</Link>
              </div>
               </Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 flex items-center gap-2.5" title='My Profile'>
            <PiUserCircle/><Link>My Profile</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Flipkart Plus Zone'>
            <SiAmazonecs /><Link>Flipkart Plus Zone</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Orders'>
            <BsBoxSeam /><Link>Orders</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='WishList'>
            <GoHeart /><Link>WishList</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1 flex items-center gap-2.5" title='Rewards'>
            <PiGift /><Link>Rewards</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p1 flex items-center gap-2.5" title='GiftCards'>
            <HiOutlineCreditCard /><Link>GiftCards</Link>
            </li>
          </ul>
        </div>
      )}
    </div>

            <div className='text-lg' title='Become a Seller'>
              <Link>Become a Seller</Link>
            </div> 
  
    
        </div>
    </div>
    </>
  )
}

export default Headers


{/* <div>

</div>
<div className='flex item-center justify-around'>
<Link to={"/"}>Logo</Link>
 <Link to={"/login"}>Login</Link>
<Link to={"/register"}>Register</Link>
</div> */}
