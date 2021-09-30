import { HomeAppHero } from './homeAppHero';
import Header from './Header'
import React from "react"
import './App.css';
import Course from "./course"
import SearchBar from "./search"
import CourseTopDiv from "./courses";
import About from './About'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import reactLogo from "./img/react.jpg"
import jsLogo from "./img/javascript.png"

const Courses = require('./courses.json');

function App() {
    return (
        <Router>
            <div className="App">
                <div id="topDiv"></div>
                <Header title='Coding bootcamp' />
                <Switch>
                    <Route exact path="/courses">
                        <CoursePage />
                    </Route>
                    <Route exact path="/course/">
                        <SingleCoursePage />
                    </Route>
                    <Route exact path='/'>
                        <>
                            <HomeAppHero />
                            <About />
                        </>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

function CoursePage(){
    return(
        <div className='App'>
            <SearchBar/>


            <div className="coursesDiv">
                <Course name={Courses['React in 30 days']['name']} desc={Courses['React in 30 days']['desc']} img={reactLogo} tags={Courses['React in 30 days']['tags']}/>
                <Course name={Courses['Javascript 101']['name']} desc={Courses['Javascript 101']['desc']} img={jsLogo} tags={Courses['Javascript 101']['tags']}/>
            </div>
        </div>
    )
}

function SingleCoursePage(){
    return(
        <CourseTopDiv />
    )
}