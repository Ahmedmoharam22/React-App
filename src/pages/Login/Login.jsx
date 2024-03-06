import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Login.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginSchema from "../../Schemas/login";
import { useDispatch } from "react-redux";
import { login } from "../../rtx/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  async function loginHandler(values) {
    const res = await fetch(
      `http://localhost:3000/users?email=${values.email}&password=${values.password}`
    );
    const data = await res.json();
    if (data.length > 0) {
      dispatch(login(data[0]));
    } else {
      console.log("Wrong Email or password");
    }
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={loginHandler}
    >
      <Form className="user__form my-5">
        <Container>
          <div className="d-flex flex-column gap-2 mb-3">
            <label htmlFor="">Email </label>
            <Field name="email" placholder="Email" type="email" />
            <p className="text-danger">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <label htmlFor="">Password</label>
            <Field name="password" placholder="Password" type="password" />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>
          </div>
          <div>
            Do Not Have An Account ? <Link to={"/register"}>Register Now</Link>
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <Button className="loginBtn" variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Container>
      </Form>
    </Formik>
  );
}
