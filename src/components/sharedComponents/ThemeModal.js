import React from "react";
import { useEffect } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setTheme, setThemeShown } from "../../reducers/modalSlice";

const ThemeModal = () => {
  const dispatch = useDispatch();
  const { isShown, theme } = useSelector((state) => state.modalReducer.theme);

  var setTheTheme = (theme) => {
    localStorage.setItem("theme", theme);
    dispatch(setTheme({ theme }));
  };
  var close = () => dispatch(setThemeShown(false));
  var handleClose = (ev) =>
    ev.target && Array.from(ev.target.classList).includes("fixed") && close();

  return (
    isShown && (
      <div
        className="absolute right-0 w-[250px] h-[50px] ThemeModal hover:cursor-pointer"
        onClick={handleClose}
      >
        <div className="w-full h-full mt-10 ThemeModalContent bg-base-300 hover:cursor-default">
          <span onClick={handleClose} className="fixed closeThemeModal ">
            <AiOutlineCloseSquare className="fixed w-[50px] h-[50px] hover:cursor-pointer closeThemeButton top-2 right-2 bg-base-100" />
          </span>
          <p>{"Theme: " + theme}</p>
          <div className="flex flex-row justify-around themeIcons">
            <button onClick={() => setTheTheme("darkTheme")}>🌙</button>
            <button onClick={() => setTheTheme("lightTheme")}>🔆</button>
            <button onClick={() => setTheTheme("cherryTheme")}>🌸</button>
            <button onClick={() => setTheTheme("orangeTheme")}>🎃</button>
            <button onClick={() => setTheTheme("darkCherryTheme")}>🎴</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ThemeModal;
