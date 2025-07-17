import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6"; //close eye
import { IoEyeOutline } from "react-icons/io5"; //open eye
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveToken } from "../Features/ProductSlice";

const Login = () => {
  const [email, setemail] = useState();
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [login, setlogin] = useState(true); //true means Login in

  const [passwordVisible, setpasswordVisible] = useState(false);

  const submitionHandler = async (e) => {
    e.preventDefault();

    if (!login) {
      //register logic

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_API}/api/user/register`,
          { name: userName, email, password }
        );
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          dispatch(saveToken(response.data.token));

          //clear form
          setemail("");
          setpassword("");

          //if user come from Delivery order page
          if (location.state === "checkingOut") {
            navigate("/DeliveryAddress");
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      //login logic
      try {
        console.log("yes");

        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_API}/api/user/login`,
          { email, password }
        );
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          dispatch(saveToken(response.data.token));

        

          //clear form
          setemail("");
          setpassword("");

          //if user come from Delivery order page
          if (location.state === "checkingOut") {
            navigate("/DeliveryAddress");
             toast.success("now you can place order", {
            autoClose: 3000,
            style: {
              color: "#0f5132",
              fontWeight: "semibold",
              closeOnClick: true,
              pauseOnHover: false,
            },
          });
          } else {
            navigate("/");
             toast.success("🎉 Welcome back!", {
            autoClose: 3000,
            style: {
              color: "#0f5132",
              fontWeight: "semibold",
              closeOnClick: true,
              pauseOnHover: false,
            },
          });
          }
        }
      } catch (error) {
        console.log(error.message);

        toast.error(`${error.response?.data?.message || "Login failed!"}`, {
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <>
      <div className="h-[80vh] w-full p-4  flex flex-col justify-center items-center ">
        <h1 className="font-[LoginFont]  m-12 sm:m-9 text-4xl md:text-6xl ">
          {login ? "LogIn" : "SignUp"}
        </h1>

        <form
          noValidate
          onSubmit={(e) => submitionHandler(e)}
          className="loginDIV  w-full sm:w-3/4 md:w-2/4 h-full  sm:h-1/2    flex justify-start items-center flex-col gap-4 "
        >
          {/* ---------UserName */}
          <input
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
            type="text"
            required
            placeholder="User Name"
            className={`${
              login ? "hidden" : "block"
            } w-full px-4 py-2 outline-0 rounded-xl `}
            style={{
              background: "#EDF2F4",
              boxShadow: "11px 11px 28px #c9cecf, -11px -11px 28px #ffffff",
            }}
          />

          {/* ---------Email */}
          <input
            onChange={(e) => setemail(e.target.value)}
            value={email}
            type="Email"
            required
            placeholder="Email"
            className={` w-full px-4 py-2 outline-0 rounded-xl`}
            style={{
              background: "#EDF2F4",
              boxShadow: "11px 11px 28px #c9cecf, -11px -11px 28px #ffffff",
            }}
          />

          {/* ---------Password + (eye icon) */}
          <div
            className="flex justify-between px-4 py-2 items-center gap-2 rounded-xl w-full "
            style={{
              background: "#EDF2F4",
              boxShadow: "11px 11px 28px #c9cecf, -11px -11px 28px #ffffff",
            }}
          >
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              type={passwordVisible ? "text" : "password"}
              required
              placeholder="Password"
              className="  flex-1/3  outline-0 "
            />

            <span
              className="cursor-pointer text-gray-500"
              onClick={() => setpasswordVisible((prev) => !prev)}
            >
              {passwordVisible ? <FaRegEyeSlash /> : <IoEyeOutline />}
            </span>
          </div>

          {/* Submit BTN--------------- */}
          <button
            type="submit"
            className="w-full text-center px-4 py-2 select-none bg-[var(--main-color)] text-white rounded-xl mt-4 cursor-pointer 
             hover:bg-red-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            {login ? "Login" : "Register"}
          </button>

          {/* Have an Account? or Not */}
          <p className="text-sm text-gray-600 mt-2">
            {!login ? (
              <>
                Have an account?{" "}
                <span
                  onClick={() => setlogin((prev) => !prev)}
                  className="text-[var(--main-color)] md:hover:font-semibold font-medium cursor-pointer"
                >
                  Sign in
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setlogin((prev) => !prev)}
                  className="text-[var(--main-color)] md:hover:font-semibold font-medium cursor-pointer"
                >
                  Register now
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
