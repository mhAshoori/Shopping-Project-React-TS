import React from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps, useHistory } from "react-router-dom";

const PostProcess = (props: RouteComponentProps) => {
  const [input, setInput] = React.useState({
    province: "",
    city: "",
    address: "",
    postalcode: "",
  });
  const handleInput = (e: React.ChangeEvent) => {
    const data = e.target as HTMLInputElement;

    setInput({ ...input, [data.name]: data.value });
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "addressinfo", payload: input });
    history.push(`finalstep`);
  };

  return (
    <div className="h-auto">
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
                تکمیل اطلاعات نهایی خرید
              </h2>

              <form className="mt-10 space-y-3 ">
                {/* <!-- province Input --> */}
                <label
                  htmlFor="province"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  استان
                </label>
                <input
                  id="province"
                  type="text"
                  name="province"
                  onChange={handleInput}
                  placeholder="تهران"
                  className="block w-full py-3 px-1 mt-2 
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                {/* <!-- city Input --> */}
                <label
                  htmlFor="city"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  شهر
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  onChange={handleInput}
                  placeholder="تهران"
                  className="block w-full py-3 px-1 mt-2 mb-4
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                {/* <!-- address Input --> */}
                <label
                  htmlFor="address"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  آدرس
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  onChange={handleInput}
                  placeholder="خیابان آزادی، دانشگاه تهران"
                  className="block w-full py-3 px-1 mt-2 mb-4
                  text-gray-800 appearance-none 
                  border-b-2 border-gray-100
                  focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />
                {/* <!-- PostalCode Input --> */}
                <label
                  htmlFor="postalcode"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  کد پستی
                </label>
                <input
                  id="postalcode"
                  type="text"
                  name="postalcode"
                  onChange={handleInput}
                  placeholder="845752136"
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
                  تائید
                </button>

                {/* <!-- Another Auth Routes --> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProcess;
