import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import registerShema from "../../Schemas/register";

export default function Register() {
  const navigate = useNavigate()
  async function submitHndeler(values, { resetForm }) {
    delete values.confirmPassword;
    await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    resetForm();
    navigate("/login")
  }
  return (
    // <h2>register</h2>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registerShema}
      onSubmit={submitHndeler}
    >
      <Form className="user__form my-5">
        <Container>
          <div className="d-flex flex-column gap-2 mb-2">
            <label htmlFor="">Full Name</label>
            <Field name="name" placholder="Full Name" type="text" />
            <p className="text-danger">
              <ErrorMessage name="name" />
            </p>
          </div>
          <div className="d-flex flex-column gap-2 mb-2">
            <label htmlFor="">Email </label>
            <Field name="email" placholder="Email" type="email" />
            <p className="text-danger">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="d-flex flex-column gap-2 mb-2">
            <label htmlFor="">Password</label>
            <Field name="password" placholder="Password" type="password" />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>
          </div>
          <div className="d-flex flex-column gap-2 mb-2">
            <label htmlFor="">Confirm Password </label>
            <Field
              name="confirmPassword"
              placholder="Confirm Password"
              type="password"
            />
            <p className="text-danger">
              <ErrorMessage name="confirmPassword" />
            </p>
          </div>
          <div>
            Already Have An Account ? <Link to={"/login"}>Login Now</Link>
          </div>
          <div className="d-flex flex-column gap-2 mb-3">
            <Button className="registerBtn" variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Container>
      </Form>
    </Formik>
  );
}
