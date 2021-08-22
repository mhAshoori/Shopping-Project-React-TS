import React from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";
//import { BsList } from "react-icons/bs";
//import { useDispatch } from "react-redux";
import ProductDetails from "../../ProductDetails";
import ProductCard from "../../components/product-card/ProductCard";
import { useHistory } from "react-router";
const Category = (props: RouteComponentProps) => {
  // Redux Elements
  // const dispatch = useDispatch();
  //   const handleClick = (item, actionType) => {
  //     console.log("Clicked");
  //     dispatch({ type: actionType, payload: item });
  //   };

  //RouterDOM Elements
  //const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  //let category='phones'
  const type = searchParams.get("type");
  //const items = type && ProductDetails[type];
  const items = type && ProductDetails[type];
  console.log("items: ", type);
  React.useEffect(() => {
    console.log("items: ", items);
  });
  const [modifiedItems, setModifiedItems] = React.useState(items);
  const sortFromExpensive = () => {
    setModifiedItems([...modifiedItems.sort((a, b) => b.price - a.price)]);
  };
  const sortFromCheap = () => {
    setModifiedItems([...modifiedItems.sort((a, b) => a.price - b.price)]);
  };
  const sortFromNewest = () => {
    setModifiedItems([...modifiedItems.sort((a, b) => b.id - a.id)]);
  };
  React.useEffect(() => {
    setModifiedItems(items);
  }, [items]);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
        {/* Buttons */}
        <div className="flex justify-center gap-5  border-2 md:border-0 rounded-md mx-2 p-2">
          <button
            onClick={sortFromNewest}
            className="p-4 bg-gray-200 rounded-md hover:bg-blue-200"
          >
            جدید ترین
          </button>
          <button
            onClick={sortFromCheap}
            className="p-4 bg-gray-200 rounded-md hover:bg-green-200"
          >
            ارزان ترین
          </button>
          <button
            onClick={sortFromExpensive}
            className="p-4 bg-gray-200 rounded-md hover:bg-red-200"
          >
            گرانترین
          </button>
        </div>
        {/* Products */}
        <div className=" flex flex-wrap justify-center md:w-auto md:border-2 md:rounded-lg m-2">
          {modifiedItems.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  history.push(`/product/${item.id}?category=${item.category}s`)
                }
              >
                <ProductCard cardInputs={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
