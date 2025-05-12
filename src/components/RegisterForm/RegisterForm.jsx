import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              excepturi mollitia delectus obcaecati? Veritatis quaerat
              voluptates ad omnis? Doloremque quos minima molestiae, neque
              adipisci dignissimos laborum. Temporibus, iste? Voluptatibus,
              necessitatibus. Ullam velit et in temporibus doloribus eum
              voluptates laborum corrupti similique iste! Mollitia iusto ipsum
              vero quas, possimus praesentium a, soluta laborum assumenda rem
              voluptates omnis ea blanditiis eaque nobis!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                  <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <Field
                      name="name"
                      type="name"
                      className="input"
                      placeholder="Name"
                    />
                    <label className="label">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                    />
                    <label className="label">Password</label>
                    <Field
                      name="password"
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                    <div className="m-auto">
                      <NavLink className="link link-hover" to="/login">
                        I have an account
                      </NavLink>
                    </div>
                    <div className="m-auto">
                      <NavLink className="link link-hover" to="/">
                        Move to Home
                      </NavLink>
                    </div>
                    <button type="submit" className="btn btn-neutral mt-4">
                      Register
                    </button>
                  </fieldset>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default RegisterForm;
