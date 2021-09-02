// Assets
import Logo from "../../assets/imgs/mobit-logo.svg";
import icon1 from "../../assets/imgs/category-icons/1.svg";
import icon2 from "../../assets/imgs/category-icons/2.svg";
import icon3 from "../../assets/imgs/category-icons/3.svg";
import icon4 from "../../assets/imgs/category-icons/4.svg";
import icon5 from "../../assets/imgs/category-icons/5.svg";
import icon6 from "../../assets/imgs/category-icons/6.svg";
// React Icons
import { BsSearch } from "react-icons/bs";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
// Components
import { Categories } from "./category-menu/Categories";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const history = useHistory();
  const isLogin = useSelector<any, any>((state) => state.user.isLogin);
  const categoriesIcons = [
    { icon: icon1, type: "phones", title: "موبایل ", isAvailable: true },
    { icon: icon2, type: "laptops", title: "لپ تاپ", isAvailable: true },
    { icon: icon3, type: "watches", title: "گجت", isAvailable: true },
    { icon: icon4, type: "tablets", title: "تبلت ", isAvailable: true },
    { icon: icon5, title: "ماشین های اداری", isAvailable: false },
    { icon: icon6, title: "کنسول بازی", isAvailable: false },
  ];
  return (
    <>
      {/* UpRow */}
      <div className=" w-full h-16 flex flex-row justify-center items-center">
        {/* Right Side */}
        <div className=" md:w-10/12 h-full flex justify-center items-center">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => {history.push("/");window.location.reload();} }>
            <img src={Logo} alt="" className=" px-3" />
          </div>
          {/* Search-Bar */}
          <div
            className=" h-12 lg:w-6/12 flex flex-row justify-center items-center 
          bg-gray-200 rounded-md"
          >
            <div className="flex justify-center items-center w-1/12 cursor-pointer">
              <BsSearch className=" text-gray-500 w-full mx-2 " />
            </div>
            <div className=" w-px h-5/6 bg-gray-500" />
            <input
              type="text"
              placeholder="جست و جو در موبیت"
              //value=""
              className="h-full w-full rounded-inherit text-sm bg-transparent
             pl-10 sm:pl-20 pr-2  focus:outline-none "
            ></input>
          </div>
        </div>
        {/* Left side  */}
        <div className="md:flex flex-row items-center text-gray-500 h-full">
          {isLogin ? (
            <div
              onClick={() => history.push("/profile")}
              className=" hidden md:flex flex-row items-center cursor-pointer
                        border-2 w-20 h-3/5 justify-center rounded-md"
            >
              <FaUserAlt />
              <p className="mx-1 ">پروفایل</p>
            </div>
          ) : (
            <div
              onClick={() => history.push("/login")}
              className=" hidden md:flex flex-row items-center cursor-pointer
                        border-2 w-20 h-3/5 justify-center rounded-md"
            >
              <FaUserAlt />
              <p className="mx-1 ">ورود</p>
            </div>
          )}
          <div
            onClick={() => history.push("/cart")}
            className=" hidden md:flex  flex-row items-center cursor-pointer
          border-2 w-24 h-3/5 justify-center rounded-md mx-3"
          >
            <FaShoppingCart />
            <p>سبد خرید</p>
          </div>
        </div>
      </div>
      {/* <div className=" w-full my-2 h-px bg-gray-300"/> */}
      {/* DownRow */}
      <div
        className=" flex flex-row justify-around md:justify-center items-center m-3 p-1
         border md:border-0 border-gray-300 rounded-lg"
      >
        {categoriesIcons.map((item, index) => {
          if (item.isAvailable) {
            return (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => history.push(`/category/?type=${item.type}`)}
              >
                <Categories icon={item.icon} content={item.title} />
              </div>
            );
          } else {
            return (
              <div key={index} className="hidden md:flex">
                <Categories icon={item.icon} content={item.title} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Header;
