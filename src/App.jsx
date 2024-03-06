import { Fragment } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MainLayout from "./layouts/MainLayout";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import IsNotlogedIn from "./components/IsNotlogedIn";
import IsLogedIn from "./components/IsLogedIn";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <IsLogedIn>
                <Home />
              </IsLogedIn>
            }
          />
          <Route
            path="/shop/:page?"
            element={
              <IsLogedIn>
                <Shop />
              </IsLogedIn>
            }
          />
          <Route
            path="/product/:id"
            element={
              <IsLogedIn>
                <SingleProduct />
              </IsLogedIn>
            }
          />
          <Route
            path="/cart"
            element={
              <IsLogedIn>
                <Cart />
              </IsLogedIn>
            }
          />
          <Route
            path="/login"
            element={
              <IsNotlogedIn>
                <Login />
              </IsNotlogedIn>
            }
          />
          <Route
            path="/register"
            element={
              <IsNotlogedIn>
                <Register />
              </IsNotlogedIn>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
