import React from "react";
import { useHistory } from "react-router";
import { FaShoppingCart, FaListUl } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GoVerified, GoListUnordered } from "react-icons/go";
import { MdDeleteSweep } from "react-icons/md";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
const Cart = () => {
  const myCart = useSelector<any, any>((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (item, actionType) => {
    console.log("Clicked");
    dispatch({ type: actionType, payload: item });
    // props.history.push('/cart')
  };
  let totalCost = 0;
  myCart.cart.map((item) => (totalCost += item.price * item.count));
  return (
    <div className="w-full h-auto flex justify-center items-start">
      <div className=" w-11/12 flex flex-col lg:flex-row justify-center items-center lg:items-start py-4">
        {/* product container */}
        <div className="w-8/12 border border-solid border-gray-300 rounded-lg">
          {/* Header */}
          <div className="cost-header flex ">
            <div
              className="flex flex-row items-center p-4 
            text-blue-500  bg-gray-300"
            >
              <FaShoppingCart />
              <p className="px-2">سبد خرید</p>
            </div>
            <div className="flex flex-row items-center p-4 text-gray-500">
              <FaListUl />
              <p className="px-2">لیست خرید</p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200" />
          {/* Product-list */}
          <div>
            {myCart.cart.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    key={index}
                    className=" hover:bg-gray-200 h-auto flex flex-col md:flex-row "
                  >
                    <div className="h-5/6 lg:w-2/6 flex  flex-row items-center justify-center ">
                      <img src={item.imgs[0]} className="h-full" alt="" />
                    </div>
                    <div key={index} className=" p-4 space-y-8">
                      <p className=" font-bold">{item.title}</p>
                      <div className="flex items-center text-gray-600 ">
                        <GoVerified />
                        <p className="px-2">اصالت کالا و سلامت فیزیکی</p>
                      </div>
                      <div className=" flex text-gray-600">
                        <div className="flex  items-center hover:text-green-600 ">
                          <GoListUnordered />
                          <p className="px-2 cursor-pointer ">
                            انتقال به لیست خرید بعدی
                          </p>
                        </div>
                        <div className="flex items-center px-4 hover:text-pink-600">
                          <MdDeleteSweep />{" "}
                          <p
                            className="px-2 cursor-pointer"
                            onClick={() => handleClick(item, "delete")}
                          >
                            حذف
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* cost */}
                    <div className=" flex flex-col items-center justify-end ml-5 mr-auto">
                      <p className=" w-full ">
                        قیمت: {item.price.toLocaleString()} تومان
                      </p>
                      <div
                        className=" border border-solid border-gray-300 rounded-md 
                             text-gray-600 flex items-center my-4"
                      >
                        <div
                          className="p-3 cursor-pointer hover:text-green-500"
                          onClick={() => handleClick(item, "increase")}
                        >
                          <AiOutlinePlus />
                        </div>
                        <div className="w-px h-full bg-gray-200" />
                        <div className="p-3">{item.count}</div>
                        <div className="w-px h-full bg-gray-200" />
                        <div
                          className="p-3 cursor-pointer hover:text-red-500"
                          onClick={() => handleClick(item, "decrease")}
                        >
                          <HiMinus />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-px bg-gray-200" />
          {/* Total cost */}
          <div className="w-full h-auto">
            <div dir="ltr" className="w-auto mr-auto ml-3  p-4 font-bold">
              قابل پرداخت: {totalCost.toLocaleString()} تومان
            </div>
          </div>
        </div>
        {/* next-level box */}
        <div
          className=" bg-gray-100 border-2 h-40 w-8/12 lg:w-3/12 rounded-lg lg:mx-2 my-2 lg:my-0
                    flex flex-col items-center justify-around"
        >
          <div className="flex gap-2 bg-gray-200 p-4 rounded-lg">
            <div className="flex gap-1">
              قابل پرداخت:{" "}
              <p className="font-bold text-blue-900">
                {totalCost.toLocaleString()}
              </p>
              تومان
            </div>
          </div>
          <button
            className=" bg-blue-400 px-4 py-2 rounded-lg"
            onClick={() => history.push("/post")}
          >
            نهایی سازی خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
