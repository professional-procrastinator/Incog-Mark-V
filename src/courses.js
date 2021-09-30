import React from "react";
import {useLocation} from "react-router-dom";

const Courses = require("./courses.json")
function CourseTopDiv(){
    var params = new URLSearchParams(useLocation().search);
    var cName = params.get("c")

    return(
        <div>

            <h2>{cName}</h2>
            <p>{Courses[cName]["desc"]}</p>
        </div>
    )
}
export default CourseTopDiv