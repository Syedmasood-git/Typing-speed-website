import React from "react";
import "./style.css"

import Header from "./Components/Header"
import Typebox from "./Components/Typebox";
import Footer from "./Components/Footer"

const App=()=>{

    return(
        <div className="main">
            <Header/>
            <Typebox/>
            <Footer/>
        </div>
    )
}

export default App;