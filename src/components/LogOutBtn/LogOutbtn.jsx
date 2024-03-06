import { Fragment } from "react";
// import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../rtx/slices/authSlice";
import './logOut.css'
function LogOutbtn() {
  const dispatch = useDispatch();
  function logOuthandler() {
    dispatch(logout());
  }
  return (
    <Fragment>
      <a href="#" className="logOutbtn" onClick={logOuthandler}>Log Out</a>
    </Fragment>
  );
}

export default LogOutbtn;
