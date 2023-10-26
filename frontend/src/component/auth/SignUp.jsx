/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import zxcvbn from "zxcvbn";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import { useEffect } from "react";

let userSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, "Invalid name")
    .required("Name is required"),
  email: Yup.string()
    .email("Please Enter a valid Email")
    .required("Email is Required"),
  password: Yup.string().required("Password is required!"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );
  console.log(user);
  console.log(isLoading);
  console.log(isSuccess);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      dispatch(registerUser(values));
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
          SignUp
        </h1>
        <form
          className="p-10 bg-gray-200 rounded-2xl"
          onSubmit={formik.handleSubmit}
        >
          <div
            style={{ border: "2px solid orange", borderRadius: "10px" }}
            className="my-2"
          >
            <input
              className="bg-transparent text-gray-900 py-2 px-2 outline-none placeholder:text-red-600"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
            />
          </div>
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
              <Link to="/login">Already Have account ? Sign In</Link>
            </p>
          </div>
          <button className="px-[30px] py-[8px] text-sm text-white bg-green-600 mt-6 rounded-lg">
            {isLoading ? "Loading" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
