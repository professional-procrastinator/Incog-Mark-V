import { HomeAppHero } from './homeAppHero';
import Header from './Header'
import React from "react"
import './App.css';
import Course from "./course"
import SearchBar from "./search"
import CourseTopDiv from "./courses";
import Dates from "./dates";
import About from './About';
import { WhatWillYouLearn } from './WhatWillYouLearn'
import { Footer } from './Footer';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import reactLogo from "./img/react.jpg"
import jsLogo from "./img/javascript.png"
import NextLogo from "./img/next.png"
import htmlLogo from "./img/html.webp"
import DjangoLogo from "./img/django.png"
import cssLogo from "./img/css.png"


const Courses = require('./courses.json');


function App() {
    return (
        <Router>
            <div className="App">
                <div id="topDiv"></div>
                <Header title='WebieCamp' />
                <Switch>
                    <Route exact path="/courses">
                        <CoursePage />
                    </Route>
                    <Route exact path="/course/">
                        <SingleCoursePage />
                    </Route>
                    <Route exact path="/dates/">
                        <DatePage />
                    </Route>
                    <Route exact path='/'>
                        <>
                            <HomeAppHero />
                            <About />
                            <WhatWillYouLearn />
                        </>
                    </Route>
                </Switch>
                <Footer />
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
                <Course name={Courses['Basic web dev and HTML']['name']} desc={Courses['Basic web dev and HTML']['desc']} img={htmlLogo} tags={Courses['Basic web dev and HTML']['tags']}/>
                <Course name={Courses['Next js in 5 days']['name']} desc={Courses['Next js in 5 days']['desc']} img={NextLogo} tags={Courses['Next js in 5 days']['tags']}/>
                <Course name={Courses['CSS in 20 days']['name']} desc={Courses['CSS in 20 days']['desc']} img={cssLogo} tags={Courses['CSS in 20 days']['tags']}/>
                <Course name={Courses['Web Dev using Python']['name']} desc={Courses['Web Dev using Python']['desc']} img={DjangoLogo} tags={Courses['Web Dev using Python']['tags']}/>
            </div>
        </div>
    )
}

function SingleCoursePage(){
    return(
        <CourseTopDiv />
    )
}

function DatePage(){
    return(
        <Dates></Dates>
    )
}
