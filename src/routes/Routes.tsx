import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MainRoutes from "./MainRoutes";
import BottomMenu from "../components/bottom-menu/BottomMenu";
import ScrollToTop from "../components/scroll-top/ScrollToTop";
//import  Home  from "./components/homepage/Home";

export const Routes = (
  <>
    <Router>
      <ScrollToTop/>
      <Header />
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          {MainRoutes.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))}
        </Switch>
      </Suspense>
      <div className="h-16"></div>
      <Footer />
      <BottomMenu />
    </Router>
  </>
);
