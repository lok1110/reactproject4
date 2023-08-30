import React, { ReactComponentElement } from "react";
import { Outlet } from "react-router-dom";
export interface ILayoutComponentProps{}

const LayoutComponent:React.FunctionComponent<ILayoutComponentProps> = (props) => {
   
    return <>
    <p>head</p> 
    <Outlet/>
    </>
};

export default LayoutComponent;