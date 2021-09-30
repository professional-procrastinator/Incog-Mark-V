
import {React,useState} from "react";
import {useHistory} from "react-router-dom";


function Course(props){





    return(
        <div className='mainCourse'>
            <img src={props.img} className="courseImg" />
            <h2>{props.name}</h2>
            <h4>{props.desc}</h4>

            <p><i className='fa fa-tag'/>&nbsp;{props.tags}</p>
            <button className="joinCourseBtn" onClick={(e)=>{window.location = `course?c=${props.name}`}}>Join</button>
        </div>
    )


}
//do stuff
export default Course;
