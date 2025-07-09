import React, { useState } from "react";
import Title from "./Title";
import { FaRegEyeSlash } from "react-icons/fa6"; //close eye
import { IoEyeOutline } from "react-icons/io5"; //open eye

const Login = () => {
  const [email, setemail] = useState();
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();
  console.log(email, userName, password);
  

  const [login, setlogin] = useState(true);
  const [passwordVisible, setpasswordVisible] = useState(false);

  const submitionHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-[80vh] w-full p-4  flex flex-col justify-center items-center ">
      <h1 className="font-[LoginFont]  m-12 sm:m-9 text-4xl md:text-6xl ">
        {login ? "LogIn" : "SignUp"}
      </h1>

      <form
        onSubmit={(e) => submitionHandler(e)}
        className="loginDIV  w-full sm:w-3/4 md:w-2/4 h-full  sm:h-1/2    flex justify-start items-center flex-col gap-4 "
      >
        {/* ---------Email */}
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="Email"
          required
          placeholder="Email"
          className={`${
            login ? "hidden" : "block"
          } w-full px-4 py-2 outline-0 rounded-xl`}
          style={{
            background: "#EDF2F4",
            boxShadow: "11px 11px 28px #c9cecf, -11px -11px 28px #ffffff",
          }}
        />
        {/* ---------UserName */}
        <input
          onChange={(e) => setuserName(e.target.value)}
          value={userName}
          type="text"
          required
          placeholder="User Name"
          className=" w-full px-4 py-2 outline-0 rounded-xl"
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
          Login
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
  );
};

export default Login;
