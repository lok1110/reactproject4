
import './App.css';

import React, { useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LayoutComponent from './components/Layout';

export interface IApp {}

const App:React.FunctionComponent<IApp> = (props) =>{
    

    return(
        <BrowserRouter>
            <Routes>
           
                <Route path ="/" element={<LayoutComponent/>}>
                    <Route index  element={<Dashboard/>}/>
                    <Route path=":number" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );

};
export default App;