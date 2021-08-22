//imports
//import ProductDetails from "../../ProductDetails";
//import { RouteComponentProps } from "react-router-dom";
//import { useParams,useLocation } from "react-router-dom";
//import { title } from "process";
//import { useDispatch } from "react-redux";
//import { useDispatch } from "react-redux";
const ProductCard = (props) => {
  //const dispatch = useDispatch();
  // const handleClick = (item, actionType) => {
  //   console.log("Clicked");
  //   dispatch({ type: actionType, payload: item });
    
  // };
  //const item=props.cardInputs;
  console.log(props.cardInputs)
  return (
    <>
      <div className="div p-3 flex justify-center">
        <div className=" w-60 h-96 bg-gray-100 rounded-xl cursor-pointer
             flex flex-col justify-around items-center">
          {/* img */}
          <div className="img w-11/12 flex justify-center items-center">
            <img src={props.cardInputs.imgs[0]} alt="#" />
          </div>
          <p className="text-center p-1">{props.cardInputs.title}</p>
          <div className="w-11/12 h-px bg-gray-400"/>
          <p>{props.cardInputs.price.toLocaleString()} تومان</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
