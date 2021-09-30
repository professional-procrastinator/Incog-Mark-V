
import {React,useState} from "react";
import {useHistory} from "react-router-dom";


function Course(props){
    let History = useHistory();

    const [img,setImg] =useState(props.img)
    const [name,setName] =useState(props.name)
    const [desc,setDesc] =useState(props.desc)
    const [tags,setTags] = useState(props.tags)



    return(
        <div className='mainCourse'>
            <img src={img} className="courseImg" />
            <h2>{name}</h2>
            <h4>{desc}</h4>

            <p><i className='fa fa-tag'/>&nbsp;{tags}</p>
            <button className="joinCourseBtn">Join</button>
        </div>
    )


}

export default Course;
