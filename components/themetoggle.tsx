'use client'

import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<boolean>(false)

    useEffect(() => {
        if (theme == true) 
            document.documentElement.classList.add('dark') 
        else
            document.documentElement.classList.remove('dark')

    }, [theme])

  return (
    <button className="ml-2" onClick={() => setTheme(prev => !prev)}>{ theme ? <FaRegMoon className="text-2xl"/> : <IoSunnyOutline className="text-2xl"/> }</button>
  )
}

export default ThemeToggle