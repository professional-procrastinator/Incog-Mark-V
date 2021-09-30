import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import codeBg from "./img/code.jpg"
import "./course.css"

const Courses = require("./courses.json")
function CourseTopDiv(){
    var params = new URLSearchParams(useLocation().search);
    var cName = params.get("c")

    return(
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
            <button className="links active">
                <Link to={useLocation()} style={{ textDecoration:'none',color:"white"}}>
                    Who can join
                </Link>
            </button>

            <button className="links">
            <Link to={`dates/${cName}`} style={{ textDecoration: 'none',color:"black"}}>
                Dates
            </Link>
            </button>
        </div>

        <div id='moreInfo'>

        </div>

        </div>
    )
}
export default CourseTopDiv