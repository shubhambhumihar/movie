/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../features/auth/authSlice";
import { useEffect } from "react";

let userSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a valid Email")
    .required("Email is Required"),
  password: Yup.string().required("Password is required!"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      dispatch(loginUser(values));
      // alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    if (user && isSuccess == true) {
      navigate("/");
    }
  }, [user, isSuccess]);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <div className="flex items-center flex-col mt-[5rem]">
        <h1 className="text-2xl font-bold text-green-600 mb-4 underline-offset-2 underline py-2">
          Login
        </h1>
        <form
          className="p-6 bg-gray-200 rounded-2xl"
          onSubmit={formik.handleSubmit}
        >
          <div
            style={{ border: "2px solid orange", borderRadius: "10px" }}
            className="my-6 border-orange-600"
          >
            <input
              className="bg-transparent text-gray-900 py-2 px-2 outline-none placeholder:text-red-600"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
          </div>
          <div style={{ border: "2px solid orange", borderRadius: "10px" }}>
            <input
              className="bg-transparent text-gray-900 py-[10px] px-3  outline-none placeholder:text-red-600"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
            />
          </div>
          <div>
            <p className="text-xs font-bold pt-6">
              <Link to="/signup">Don't Have account ? Sign Up</Link>
            </p>
          </div>
          <button className="px-[30px] py-[8px] text-sm text-white bg-green-600 mt-6 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
