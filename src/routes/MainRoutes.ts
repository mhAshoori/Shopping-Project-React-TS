import React from "react";
//import Home from "./components/homepage/Home"
//import SwiperIL from "./components/SwiperIL/SwpierIL"
//import Category from "./components/category/Category"

const Home = React.lazy(() => import("../pages/homepage/Home"));
const Product = React.lazy(() => import("../pages/product/Product"));
const Category = React.lazy(() => import("../pages/category/Category"));
const Cart = React.lazy(() => import("../pages/cart/Cart"));
const Login = React.lazy(() => import("../pages/login/Login"));
const Register = React.lazy(() => import("../pages/register/Register"));
const PostProcess = React.lazy(
  () => import("../pages/cart/post-process/PostProcess")
);
const FinalStep = React.lazy(() => import("../pages/final-step/FinalStep"));
const Profile = React.lazy(() => import("../pages/profile/Profile"));
const MainRoutes = [
  { path: "/", exact: true, component: Home },
  { path: "/category/", exact: false, component: Category },
  { path: "/product/:id", exact: false, component: Product },
  { path: "/cart", exact: true, component: Cart },
  { path: "/login", exact: true, component: Login },
  { path: "/register", exact: true, component: Register },
  { path: "/post", exact: true, component: PostProcess },
  { path: "/finalstep", exact: true, component: FinalStep },
  { path: "/profile", exact: true, component: Profile },
];
export default MainRoutes;
