// imports
import React from "react";

// interfaces
interface ICategory {
  icon: string;
  content: string;
}
export const Categories: React.FC<ICategory> = (props) => (
  <div className=" flex-col flex md:flex-row items-center  ">
    <div className="icon"><img src={props.icon} alt="" /></div>
    <div className="name text-center">{props.content}</div>
  </div>
);
