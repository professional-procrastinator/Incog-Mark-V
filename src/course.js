
import React from "react";


class Course extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:props.name,
            desc:props.desc,
            img:props.img,
            CourseTags:props.tags
        }

    }

    render(){

        return(
            <div className='mainCourse'>
                <img src={this.state.img} className="courseImg" />
                <h2>{this.state.name}</h2>
                <h4>{this.state.desc}</h4>

                <p><i className='fa fa-tag'/>&nbsp;{this.state.CourseTags}</p>

            </div>
        )

    }
}

export default Course;