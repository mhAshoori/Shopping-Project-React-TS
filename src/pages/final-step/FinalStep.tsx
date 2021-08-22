import React from "react";
import { useSelector } from "react-redux";

const FinalStep = () => {
  const postalData = useSelector<any, any>((state) => [
    state.user.addressInfo,
    state.user.email,
  ]);
  return (
    <div className="w-full h-96 flex flex-row items-center justify-center">
      <div className="w-9/12 h-80 md:w-6/12 lg:w-5/12 bg-blue-200 rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-3xl">خرید شما تایید شد </h1>
        <div className="space-y-4">
          <p className="px-3">آدرس مقصد:</p>
          <p className="px-3">
            {postalData[0].province}،{postalData[0].city}،
            {postalData[0].address}
          </p>
          <p className="px-3">کد پستی: {postalData[0].postalcode}</p>
          <p className="px-3">آدریس ایمیل: {postalData[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;
