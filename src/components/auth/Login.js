import React, { useState, useRef } from "react";
import Navbar from "../layout/Navbar";
import { validateFormFields } from "../../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/store/slices/userSlice";

const Login = () => {
  const [isSignedInForm, setSignedInForm] = useState(true);
  const [errorMsg, setErroMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInFom = () => {
    setSignedInForm(!isSignedInForm);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleForm = () => {
    const message = validateFormFields(
      email.current.value,
      password.current.value
    );
    setErroMsg(message);

    if (errorMsg !== null) return;

    if (!isSignedInForm) {
      // Signup

      if (name.current.value === "") {
        setErroMsg("Name is required");
        return;
      }

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          navigate("/browse");
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://imgs.search.brave.com/1_IVJqjyhwHicfLOl9gy6L-MsrD11T5Dc2IjSllpkeI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNjQvNjQ1NzIu/cG5n",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, displayName, email, photoURL }));
            })
            .catch((error) => {
              setErroMsg(error.message);
            });

          // ...
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use");
          setErroMsg("Email already in use. Please signup");
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential");
          setErroMsg("Login failed : Invalid credentials");
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="absolute w-screen h-screen overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black m-auto my-48 left-0 right-0 p-12 flex flex-col bg-opacity-70 rounded-lg"
      >
        <h1 className="text-white text-2xl mx-2 font-bold">
          {" "}
          {!isSignedInForm ? "Sign Up" : "Sign In"}
        </h1>
        <input
          type="text"
          placeholder="Enter email"
          className="p-2 m-2 "
          ref={email}
        />

        <div className="absolute top-36 right-12 flex items-center px-2 mt-2">
          <input
            className="hidden js-password-toggle"
            id="toggle"
            type="checkbox"
          />
          <label
            onClick={handleShowPassword}
            className="px-2  text-sm font-mono cursor-pointer js-password-label"
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </label>
        </div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className="p-2 m-2"
          ref={password}
        />

        {!isSignedInForm && (
          <input
            type="text"
            placeholder="Enter name"
            className="p-2 m-2"
            ref={name}
          />
        )}
        <button
          className="p-2 mx-2 mt-4 bg-red-600 text-white font-medium rounded-sm"
          onClick={handleForm}
        >
          {!isSignedInForm ? "Sign Up" : "Sign In"}
        </button>
        <div>
          <p className="text-red-500  font-bold p-2">{errorMsg}</p>
        </div>
        <p className="mx-2 my-8 text-gray-600">
          {isSignedInForm ? "New to Netflix?" : "Already Registered?"}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={toggleSignInFom}
          >
            {isSignedInForm ? "Sign up now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
