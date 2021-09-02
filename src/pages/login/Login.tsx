import React from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import {toast} from 'react-toastify'
const Login = (props: RouteComponentProps) => {
  const [input, setInput] = React.useState({ email: "", password: "" });
  const handleInput = (e: React.ChangeEvent) => {
    const data = e.target as HTMLInputElement;
   // console.log(input);
    setInput({ ...input, [data.name]: data.value });
  };
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "login", payload: input });
    toast.success('با موفقیت وارد شدید')
    setTimeout(() => { props.history.push("/profile"); }, 2000);
    
  };
  return (
    <div className="h-5/6">
      <div className="w-full h-full" dir="rtl">
        {/* <!-- component --> */}
        {/* <!-- Root element for center items --> */}
        <div className="flex flex-col h-full bg-gray-100">
          {/* <!-- Auth Card Container --> */}
          <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            {/* <!-- Auth Card --> */}
            <div
              className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
            >
              {/* <!-- Card Title --> */}
              <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                ورود به حساب کاربری
              </h2>

              <form className="mt-10 space-y-3">
                {/* <!-- Email Input --> */}
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  ایمیل
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleInput}
                  placeholder="email@hotmail.com"
                  autoComplete="email"
                  className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                {/* <!-- Password Input --> */}
                <label
                  htmlFor="password"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  رمز ورود
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleInput}
                  placeholder="p@ssword"
                  autoComplete="current-password"
                  className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                {/* <!-- Auth Buttton --> */}
                <button
                  onClick={handleClick}
                  className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                >
                  ورود
                </button>

                {/* <!-- Another Auth Routes --> */}
                <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                  <div className="flex-2 underline hover:text-green-700 cursor-pointer">
                    رمز عبور خود را فراموش کرده اید؟
                  </div>

                  <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                    or
                  </p>

                  <div
                    className="flex-2 underline hover:text-green-700 cursor-pointer"
                    onClick={() => {
                      props.history.push("/register");
                    }}
                  >
                    ایجاد حساب کاربری
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
