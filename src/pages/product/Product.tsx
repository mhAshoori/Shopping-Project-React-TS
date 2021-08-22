//imports
import ProductDetails from "../../ProductDetails";
import ThumbGallery from "../../components/swipers/gallery/ThumbGallery";
import { RouteComponentProps} from "react-router";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Product = (props: RouteComponentProps) => {
  //Redux Elements
  const dispatch = useDispatch();
  //const cart = useSelector<any, any>((state) => state.cart);
  const handleClick = (item,actionType) => {
    console.log("Clicked");
    dispatch({ type: actionType, payload: item });
  };
  
  //RouterDOM Elements
  const { id } = useParams<{ id: string }>();
  const location=useLocation()
  const searchParams = new URLSearchParams(location.search);
  //let category='phones'
  const category = searchParams.get("category")
  const item =category && ProductDetails[category].find(product=>product.id===parseInt(id))
  return (
    <div className='w-full flex items-center justify-center'>
      {/* container */}
      <div className="container flex justify-center items-center w-full h-auto">
        <div
          className=" border border-solid border-gray-300 rounded-2xl md:w-full w-11/12 h-5/6 
              flex flex-col md:flex-row "
        >
          <div className="flex justify-center flex-col h-4/6 md:w-2/6 md:h-5/6 ">
            <ThumbGallery imgs={item.imgs}/>
          </div>
          {/* Separator line */}
          <div className="line w-px h-full bg-gray-300 mx-2"></div>
          <div className="details p-5 space-y-3">
            <h1 className=" text-xl font-bold">
              {item.title}
            </h1>
            <p className=" text-gray-500">
              {item.engName}
            </p>
            <div className="flex flex-row ">
              <p>برند: {item.Brand}</p>
              <p className="px-6">
                دسته بندی: {item.category}
              </p>
            </div>
            <div className=" md:hidden lg:flex items-center justify-between w-2/6">
              <p>انتخاب رنگ:</p>
              <div className="px-1 w-auto h-10 border border-solid border-gray-500 rounded-lg flex flex-row items-center">
                {item.colors.map((item, index) => {
                  return (
                    <div className=" px-2 ">
                      <div
                        className="w-6 h-6 rounded-full"
                        key={index}
                        style={{ backgroundColor: `${item}`, color: `${item}` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Main Properties */}
            <div className="md:hidden lg:flex">
              <p className=" font-bold py-3">مشخصات اصلی: </p>
              <ul className="space-y-2 pr-3 py-1" style={{listStyleType:"disc"}}>
                <li>تراشه: {item.mainProps.chip}</li>
                <li>
                  فرکانس پردازنده مرکزری:  {item.mainProps.chip}
                </li>
                <li>حافظه داخلی: {item.mainProps.storage} </li>
              </ul>
            </div>
          </div>
          {/* Separator line */}
          <div className=" w-px h-full bg-gray-300 "></div>
          {/* Ad to Cart */}
          <div className=" h-full w-50 flex  justify-center items-center py-4 ">
            <div className=" w-80 h-96  bg-gray-100 rounded-xl mx-3 p-3 space-y-7">
              <p> فروشنده کالا: لیان شاپینگ مال</p>
              <div className=" w-full h-px bg-gray-300 "></div>
              <p>گارانتی: 18 ماه</p>
              <div className=" w-full h-px bg-gray-300 "></div>
              <div className="text-xl text-blue-700">
                قیمت: {item.price.toLocaleString()} تومان
              </div>
              <div className=" w-full h-px bg-gray-300 "></div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 text-white w-11/12 h-10 rounded "
                onClick={()=>handleClick(item,"Add to cart")}>
                  افزودن به سبد خرید
                </button>
              </div>
              <div className="hint">
                <p>با خرید این کالا 110 امتیاز به حساب شما افزوده می شود</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
