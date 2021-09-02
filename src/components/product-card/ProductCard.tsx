//imports
//import ProductDetails from "../../ProductDetails";
//import { RouteComponentProps } from "react-router-dom";
//import { useParams,useLocation } from "react-router-dom";
//import { title } from "process";
//import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

//import { useDispatch } from "react-redux";
const ProductCard = (props) => {
  //const dispatch = useDispatch();
  // const handleClick = (item, actionType) => {
  //   console.log("Clicked");
  //   dispatch({ type: actionType, payload: item });
const history = useHistory()
  // };
  //const item=props.cardInputs;
  console.log(props.cardInputs);
  return (
    <div>
      <div className="div p-3 flex justify-center">
        <div
          className=" w-60 h-96 bg-gray-100 rounded-xl cursor-pointer
             flex flex-col justify-around items-center"
             onClick={() =>
              history.push(
                `/product/${props.cardInputs.id}?category=${props.cardInputs.category}s`
              )
            }
        >
          {/* img */}
          <div className="img w-11/12 flex justify-center items-center">
            <img src={props.cardInputs.imgs[0]} alt="#" />
          </div>
          <p className="text-center p-1">{props.cardInputs.title}</p>
          <div className="w-11/12 h-px bg-gray-400" />
          {!props.cardInputs.discount[0] ? (
            <div className=" w-full flex justify-around items-center text-sm">
              <div>{props.cardInputs.price.toLocaleString()} تومان</div>
            </div>
          ) : (
            <div className=" w-full flex justify-around items-center text-sm">
              <div className="bg-red-500 w-auto h-auto rounded-full p-1">
                  {props.cardInputs.discount[1]}%
                </div>
              <div className="flex gap-x-1">
                <p className=" line-through text-gray-500">
                  {props.cardInputs.price.toLocaleString()}
                </p>
                <p>
                  {(
                    props.cardInputs.price *
                    ((100 - props.cardInputs.discount[1]) / 100)
                  ).toLocaleString()} تومان 
                </p>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
