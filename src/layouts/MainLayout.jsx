import { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  )
}
