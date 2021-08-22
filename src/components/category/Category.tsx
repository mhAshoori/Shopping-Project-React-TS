import React from "react";
import { RouteComponentProps,  } from "react-router";
import ProductDetails from "../../ProductDetails";
import { useDispatch, useSelector } from "react-redux";
const Category = (props: RouteComponentProps) => {
  //const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const cart = useSelector<any, any>((state) => state.cart);
  const handleClick = (item,actionType) => {
    console.log("Clicked");
    dispatch({ type: actionType, payload: item });
  };
  
  
  
  return (
    <div className=" w-4/5 h-full   ">
      {console.log(cart)}
      {ProductDetails.phones.map((item) => (
        <div className=" space-y-7 ">
          {item.title}
          <button onClick={() => handleClick(item,"add to cart")} className="bg-red-600">
            Add product
          </button>
          <button onClick={() => handleClick(item,"delete")} className="bg-yellow-400">
            delete Product
          </button>
        </div>
      ))}
    </div>
  );
};

export default Category;
