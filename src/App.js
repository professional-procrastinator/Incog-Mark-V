import { HomeAppHero } from './homeAppHero';
import Header from './Header'
import React from "react"
import './App.css';
import Course from "./course"

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
                <Route exact path='/'>
                    <>
                    <HomeAppHero />
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
            <h2 className="courseHeading">
                Courses
            </h2>

            <div className="coursesDiv">
                <Course name={Courses['React']['name']} desc={Courses['React']['desc']} img={reactLogo} tags={Courses['React']['tags']}/>
                <Course name={Courses['Javascript']['name']} desc={Courses['Javascript']['desc']} img={jsLogo} tags={Courses['Javascript']['tags']}/>
            </div>
        </div>
    )
}
