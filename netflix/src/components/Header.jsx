import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToggleGptButton } from "../utils/gptSlice";
import { select_language } from "../utils/constant";
import { setSelectedLang } from "../utils/configSlice";

export default function Header() {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSignout() {
    signOut(auth).then(() => {
      navigate("/");
    });
  }

  function handleGptToggle() {
    dispatch(ToggleGptButton());
  }

  function handleSelectLang(e) {
    dispatch(setSelectedLang(e.target.value));
  }

  return (
    <div
      className="
      absolute 
      w-full 
      bg-gradient-to-b 
      from-black 
      px-4 
      sm:px-6 
      md:px-8 
      py-2 
      z-20 
      flex 
      items-center 
      justify-between
      "
    >
      {/* Netflix Logo */}
      <img
        className="w-28 sm:w-36 md:w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix"
      />

      {user && (
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Language Dropdown */}
          {showGptSearch && (
            <select
              className="bg-white text-black text-xs sm:text-sm px-2 py-1 rounded"
              onChange={handleSelectLang}
            >
              {select_language.map((el) => (
                <option key={el.identifier} value={el.identifier}>
                  {el.lang}
                </option>
              ))}
            </select>
          )}

          {/* GPT Toggle */}
          <button
            className="
            px-2 
            sm:px-4 
            py-1 
            sm:py-2 
            bg-red-700 
            rounded-lg 
            text-white 
            text-xs 
            sm:text-sm
            "
            onClick={handleGptToggle}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          {/* Profile Image */}
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
          />

          {/* Sign Out */}
          <button
            className="
            px-2 
            sm:px-4 
            py-1 
            sm:py-2 
            bg-red-700 
            rounded-lg 
            text-white 
            text-xs 
            sm:text-sm
            "
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}