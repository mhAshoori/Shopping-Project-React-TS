import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

const Profile = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const userEmail = useSelector<any, any>((state) => state.user.email);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "logout", payload: userEmail });
    props.history.push("/");
  };
  return (
    <div className="w-full h-96 flex flex-row items-center justify-center ">
      <div
        className="w-9/12 h-80 md:w-6/12 lg:w-5/12 bg-yellow-100 rounded-lg 
        flex flex-col justify-center items-center gap-y-3"
      >
        <h1 className="text-3xl">کاربر عزیز، خوش آمدید! </h1>
        <div>ایمیل شما: {userEmail}</div>
        <button
          className="px-4 py-2 rounded-md bg-blue-400"
          onClick={handleClick}
        >
          خروجی
        </button>
      </div>
    </div>
  );
};

export default Profile;
