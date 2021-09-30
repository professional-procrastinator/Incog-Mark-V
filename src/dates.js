import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import codeBg from "./img/code.jpg"
import "./course.css"

const Courses = require("./courses.json")
function Dates() {
    var params = new URLSearchParams(useLocation().search);
    var cName = params.get("c")

    var dates = Courses[cName]["date"];


    return (
        <div id='main'>

            <div id="topInfo">


                <div id='imgDiv'>
                    <img src={codeBg} className="codeBg"/>
                </div>

                <div id='infoDiv'>
                    <h2>{cName}</h2>
                    <p>{Courses[cName]["desc"]}</p>

                </div>


            </div>

            <div id="nav">
                <button className="links">
                    <Link to={`course?c=${cName}`}  style={{textDecoration: 'none', color: "black"}}>
                        Who can join
                    </Link>
                </button>

                <button className="links active">
                    <Link to={useLocation()} style={{textDecoration: 'none', color: "white"}}>
                        Dates
                    </Link>
                </button>
            </div>

            <div id='moreInfo'>

                <p>{dates}</p>

            </div>

        </div>
    )
}
export default Dates