import React from "react";
import {ImLinkedin2,ImFacebook,ImTwitter,} from 'react-icons/im'
import {FaTelegramPlane} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className=" w-full hidden md:flex h-auto  justify-center ">
      {/* contact info */}
      <div
        className=" w-full h-24 flex items-center justify-around 
             bg-blue-100 rounded-lg overflow-hidden"
      >
        <div className="flex ">
          <p className="px-2 text-gray-500"> شماره تماس:</p>
          <p dir="ltr">021-91012425 --- 034-91002425</p>
        </div>
        <div className="flex ">
          <p className="px-2 text-gray-500">آدرس ایمیل:</p>
          <p dir="ltr">info@mobit.ir</p>
        </div>
        <div className="hidden lg:flex ">
          <p className="px-2 text-gray-500 ">ساعات پاسخگویی::</p>
          <p dir="ltr">شنبه تا چهارشنبه ۸:۳۰ الی ۲۱ - پنجشنبه ۹ الی ۲۰</p>
        </div>
        {/* Icons */}
        <div className="grid grid-cols-4 gap-x-4 text-2xl text-gray-400 ">
           <div className="cursor-pointer hover:text-green-700"><ImLinkedin2 /></div> 
           <div className="cursor-pointer hover:text-green-700"><ImFacebook /></div> 
           <div className="cursor-pointer hover:text-green-700"><ImTwitter /></div> 
           <div className="cursor-pointer hover:text-green-700"><FaTelegramPlane /></div> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
