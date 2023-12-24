import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const userdata = useSelector((store) => store.user);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex justify-between w-screen absolute px-8 py-4  bg-gradient-to-b from-black z-30">
      <img
        src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img
            className="h-10 w-10 rounded-full m-2"
            alt={userdata.displayName}
            src={userdata.photoURL}
          />
          <button
            onClick={handleLogout}
            className="p-2 text-white bg-red-600 rounded-sm m-2"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
