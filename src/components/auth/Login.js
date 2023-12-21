import { useState } from "react";
import Navbar from "../layout/Navbar";

const Login = () => {
  const [isSignedIn, setSignedIn] = useState(true);

  const handleSignIn = () => {
    setSignedIn(!isSignedIn);
  };

  return (
    <div>
      <Navbar />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 bg-black m-auto my-48 left-0 right-0 p-12 flex flex-col bg-opacity-70 rounded-lg">
        <h1 className="text-white text-2xl mx-2 font-bold">
          {" "}
          {!isSignedIn ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Enter Full name"
            className="p-2 m-2"
          />
        )}
        <input type="text" placeholder="Enter email" className="p-2 m-2 " />
        <input
          type="password"
          placeholder="Enter password"
          className="p-2 m-2"
        />
        <button className="p-2 mx-2 mt-4 bg-red-600 text-white font-medium rounded-sm">
          {!isSignedIn ? "Sign Up" : "Sign In"}
        </button>
        <div className="mx-2">
          <input
            type="checkbox"
            id="remember"
            name="remenber"
            className="rounded-sm "
          />
          <label className="text-white rounded-sm" for="remember">
            Remember me
          </label>
        </div>
        <p className="mx-2 my-8 text-gray-600">
          {isSignedIn ? "New to Netflix?" : "Already Registered?"}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={handleSignIn}
          >
            {isSignedIn ? "Sign up now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
