import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { LANG_OPTIONS, LOGO_URL } from "../../utils/constants";
import { addGptMovies, toggleGptPage } from "../../utils/store/slices/gptSlice";
import { changeLanguage } from "../../utils/store/slices/configSlice";
import { lang } from "../../utils/languageConstant";

const Navbar = () => {
  const userdata = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store.appConfig.lang);
  const user = auth.currentUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleToggle = () => {
    dispatch(toggleGptPage());
    dispatch(addGptMovies(null));
  };

  useEffect(() => {
    const unsubsrcibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubsrcibe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between  w-screen absolute px-8 py-4 bg-gradient-to-b from-black z-30">
      <img src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex">
          <select
            className="px-6 bg-black text-white m-2"
            onChange={handleLanguageChange}
          >
            {LANG_OPTIONS.map((lng) => {
              return (
                <option key={lng.identifier} value={lng.identifier}>
                  {lng.name}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleToggle}
            className="p-2  bg-white rounded-sm my-2 mx-20"
          >
            {lang[selectedLang]?.gptToggleButtonText}
          </button>

          <img
            className="h-10 w-10 rounded-full m-2 bg-white"
            alt={userdata?.displayName}
            src={userdata?.photoURL}
          />

          <button
            onClick={handleLogout}
            className="p-2 text-white bg-red-600 rounded-sm m-2"
          >
            {lang[selectedLang]?.logOutText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
