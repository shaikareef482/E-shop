import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import {toast} from "react-toastify";

const Login = () => {
  const navigate =  useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();

    await axios.post(`${server}/user/login-user`,{email,password}, { withCredentials: true }).then((res)=>{
      toast.success("Login success");
      navigate("/");
      window.location.reload(true); 
      
    }).catch((err)=>{
      toast.error(err.response.data.message);
    
    })
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-500"
              >
                Password
              </label>
              <div className="mt-1 relative ">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between `} >
              <div className={`${styles.noramlFlex} `}>
                <input
                  type="checkbox"
                  name="Remember-me"
                  id="Remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                />
                <label className="ml-2 text-sm block text-gray-900">
                  Remember Me
                </label>
              </div>
              <div>
                <a href=".forget-password" className="font-medium text-blue-600 hover:text-blue-500">
                  Forget your password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full h-[40px] flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>
                Not have any account?
              </h4>
              <Link to="/sign-up" className="text-blue-600 pl-2"> Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
