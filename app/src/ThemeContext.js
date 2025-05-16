import { createContext } from "react";

const ThemeContext = createContext({
    them : 'light',
    toggleThem : () =>{},
});

export default ThemeContext;