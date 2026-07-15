import { createContext } from "react";

export const GlobalVariable = createContext()

export const GlobalProvide =({children})=>{
   const dataname ="Sagnik Saha" 
    return(
        <GlobalVariable.Provider value={dataname}>
         {children}
        </GlobalVariable.Provider>
    )
}