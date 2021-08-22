import React from "react";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineUser,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BottomMenu = () => {
  const userDetail = useSelector<any, any>((state) => state.user);
  const history = useHistory();
  const handleClick = (route) => {
    history.push(route);
  };
  return (
    <div className="">
      <div
        className="flex  md:hidden fixed bottom-0 w-full h-16 bg-gray-200 
        justify-around items-center text-gray-700 "
      >
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={() => handleClick("/")}
        >
          <AiFillHome />
          <p>صفحه اصلی</p>
        </div>
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={() => handleClick("/cart")}
        >
          <AiOutlineShoppingCart />
          <p>سبد خرید</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {userDetail.isLogin ? (
            <div
              className="flex flex-col justify-center items-center cursor-pointer"
              onClick={() => handleClick("/profile")}
            >
              <AiOutlineUser />
              <p>مشاهده پروفایل</p>
            </div>
          ) : (
            <div
              className="flex flex-col justify-center items-center cursor-pointer"
              onClick={() => handleClick("/login")}
            >
              <AiOutlineLogin />
              <p>ورود</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
