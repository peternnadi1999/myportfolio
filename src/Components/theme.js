
import { createContext } from "react";
import { useState } from "react";


const themeContext = createContext({
        theme: true,
        changeColor: ()=>{},
        changeColor2: ()=>{},
})

export function ThemeContextProvider(props){
    const [theme, setTheme]=useState(true)

    const context = {
        theme:theme,
        changeColor: changeColor,
        changeColor2: changeColor2,
    }
function changeColor(param) {
    setTheme(param)
    
}
function changeColor2(param) {
    setTheme(param)
    
}
    return <themeContext.Provider value={context}>
        {props.children}
    </themeContext.Provider>
}
export default themeContext;