"use client";
import { FaMoon } from "react-icons/fa";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";


function Them() {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);

        document.documentElement.classList.toggle("dark");
    }

    return (
        <div className="">
            <button onClick={() => darkModeHandler()}>
                {

                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button>
        </div>
    );
}

export default Them;